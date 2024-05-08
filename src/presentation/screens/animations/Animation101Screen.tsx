import { useRef } from 'react';
import { View, StyleSheet, Pressable, Text, Animated } from 'react-native';
import { colors } from '../../../config/theme/theme';

export const Animation101Screen = () => {
  const animatedOpacity = useRef(new Animated.Value(0.4)).current;
  //Animated.Value(0.4) 0 es transparente y 1 es full color, ojo no devuelve un valor númerico, para trabajar con animaciones hay que usar componentes que salgan del Animated, ejemplo, Animated.View

  const fadeIn = () => {
    Animated.timing(animatedOpacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start(() => console.log('Ended'));
  };

  const fadeOut = () => {
    Animated.timing(animatedOpacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => console.log('Ended'));
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.purpleBox,
          {
            opacity: animatedOpacity,
          },
        ]}
      />

      <Pressable
        onPress={fadeIn}
        style={{ marginTop: 10 }}
      >
        <Text>FadeIn</Text>
      </Pressable>

      <Pressable
        onPress={fadeOut}
        style={{ marginTop: 10 }}
      >
        <Text>FadeOut</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  purpleBox: {
    backgroundColor: colors.primary,
    width: 150,
    height: 150,
  },
});
