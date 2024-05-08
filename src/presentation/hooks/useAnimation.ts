import { useRef } from "react";
import { Animated, Easing } from "react-native";

export const useAnimation = () => {
    const animatedOpacity = useRef(new Animated.Value(0)).current;
    //Animated.Value(0.4) 0 es transparente y 1 es full color, ojo no devuelve un valor númerico, para trabajar con animaciones hay que usar componentes que salgan del Animated, ejemplo, Animated.View
    const animatedTop = useRef(new Animated.Value(0)).current;
  
    const fadeIn = ({ toValue = 1, duration = 300, callback = () => {} }) => {
      /*Animated.timing(animatedTop, {
        toValue: 0,
        duration: 700,
        useNativeDriver: true,
        easing: Easing.bounce,
      }).start(() => console.log('Ended'));*/
  
      Animated.timing(animatedOpacity, {
        toValue: toValue,
        duration: duration,
        useNativeDriver: true,
      }).start(callback);
    };
  
    const fadeOut = ({ toValue = 1, duration = 300, callback = () => {} }) => {
      Animated.timing(animatedOpacity, {
        toValue: toValue,
        duration: duration,
        useNativeDriver: true,
      }).start(callback);
      //() => animatedTop.resetAnimation()
    };

    const startMovingTopPosition = ({ initialPosition = 0, toValue = 0, duration = 300, easing = Easing.linear, callback = () => {} }) => {
      animatedTop.setValue(initialPosition);
      Animated.timing(animatedTop, {
        toValue: toValue,
        duration: duration,
        useNativeDriver: true,
        easing: easing,
      }).start(callback);
    }

    return {
        animatedOpacity,
        animatedTop,
        fadeIn,
        fadeOut,
        startMovingTopPosition
    };
}