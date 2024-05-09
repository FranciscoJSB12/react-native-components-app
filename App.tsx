import 'react-native-gesture-handler';
import { ThemeProvider } from './src/presentation/context/ThemeContext';
import { StackNavigator } from './src/presentation/navigator/StackNavigator';

export default function App() {
  return (
    <ThemeProvider>
      <StackNavigator />
    </ThemeProvider>
  );
}
