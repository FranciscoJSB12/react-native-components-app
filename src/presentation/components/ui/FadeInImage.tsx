import { useState } from 'react';
import {
  ActivityIndicator,
  Animated,
  ImageStyle,
  StyleProp,
  View,
} from 'react-native';
import { useAnimation } from '../../hooks/useAnimation';

interface Props {
  uri: string;
  style?: StyleProp<ImageStyle>;
}

export const FadeInImage = ({ uri, style }: Props) => {
  const { animatedOpacity, fadeIn } = useAnimation();
  const [isLoading, setIsLoading] = useState(true);

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      {isLoading && (
        <ActivityIndicator
          style={{ position: 'absolute' }}
          color='grey'
          size={30}
          /*PENDIENTE: el size solo se aplica a ANDROID */
        />
      )}

      <Animated.Image
        source={{ uri }}
        /*La propiedad source tiene la posibilidad de asignar headers, lo cual es importante porque hay imagenes que pueden pedir algún token de autenticación*/
        onLoadEnd={() => {
          fadeIn({});
          setIsLoading(false);
        }}
        /*La propiedad onLoadEnd sirve para conocer cuando finaliza la carga de la imagen y de esta forma disparar un callback */
        style={[style, { opacity: animatedOpacity }]}
      />
    </View>
  );
};
