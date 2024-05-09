import { PropsWithChildren, createContext, useEffect, useState } from 'react';
import { ThemeColors, darkColors, lightColors } from '../../config/theme/theme';
import { AppState, Appearance, useColorScheme } from 'react-native';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';

type ThemeColor = 'light' | 'dark';

interface ThemeContextProps {
  currentTheme: ThemeColor;
  colors: ThemeColors;
  isDark: boolean;

  setTheme: (theme: ThemeColor) => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

//IMPORTANTE: PropsWithChildren sirve para tipear el children y se importa de react, es como un ReactNode

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  //OJO: useColorSchema te permite saber el color que tiene el sistema operativo
  const colorScheme = useColorScheme();
  const [currentTheme, setCurrentTheme] = useState<ThemeColor>('light');

  const isDark = currentTheme === 'dark';
  const colors = isDark ? darkColors : lightColors;

  useEffect(() => {
    if (colorScheme === 'dark') {
      setCurrentTheme('dark');
    } else {
      setCurrentTheme('light');
    }
  }, [colorScheme]);

  // useEffect(() => {
  //   IMPORTANTE: esto nos sirve para saber el estado de la APP
  //   const subscription = AppState.addEventListener('change', nextAppState => {
  //     const colorScheme = Appearance.getColorScheme();
  //     setCurrentTheme( colorScheme === 'dark' ? 'dark' : 'light')

  //   });

  //   return () => {
  //     subscription.remove();
  //   };
  // }, []);

  const setTheme = (theme: ThemeColor) => {
    setCurrentTheme(theme);
  };

  return (
    <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
      <ThemeContext.Provider
        value={{
          currentTheme: currentTheme,
          isDark: isDark,
          colors: colors,
          setTheme: setTheme,
        }}
      >
        {children}
      </ThemeContext.Provider>
    </NavigationContainer>
  );
};
