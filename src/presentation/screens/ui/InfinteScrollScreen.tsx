import { useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { colors } from '../../../config/theme/theme';
import { FadeInImage } from '../../components/ui/FadeInImage';

export const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);

  const loadMore = () => {
    /*El argumento { length: 5 } crea 5 elementos más, luego tienes (_, i) => {}, donde el "_" es el valor actual */
    const newArray = Array.from({ length: 5 }, (_, i) => numbers.length + i);

    setTimeout(() => {
      setNumbers([...numbers, ...newArray]);
    }, 3000);
  };

  return (
    <View style={{ backgroundColor: 'black' }}>
      <FlatList
        data={numbers}
        onEndReached={loadMore}
        onEndReachedThreshold={0.6}
        /* onEndReachedThreshold={0.6} por defecto el valor es 5, va de 0(0%) a 1(100%) de esta forma controlas cuando los elementos se cargan a medida que llegas al final, cuando está a 60% del scroll empieza a cargar los siguientes*/
        keyExtractor={item => item.toString()}
        /* keyExtractor={item => item.toString()} IMPORTANTE, ese key tiene que ser string, por eso el keyExtractor */
        renderItem={({ item }) => <ListItem number={item} />}
        /*PENDIENTE: Este componente llamado ListFooterComponent nos sirve para mostrar un spinner, básicamente eso es el activity indicator*/
        ListFooterComponent={() => (
          <View style={{ height: 150, justifyContent: 'center' }}>
            <ActivityIndicator
              size={40}
              color={colors.primary}
            />
          </View>
        )}
      />
    </View>
  );
};

interface ListItemProps {
  number: number;
}

const ListItem = ({ number }: ListItemProps) => {
  return (
    <FadeInImage
      uri={`https://picsum.photos/id/${number}/500/400`}
      style={{
        height: 400,
        width: '100%',
      }}
    />
    // <Image
    //   source={{ uri: `https://picsum.photos/id/${number}/500/400` }}
    // style={{
    //   height: 400,
    //   width: '100%'
    // }}

    // />
  );
};
