import { Text } from 'react-native';
import { CustomView } from '../../components/ui/CustomView';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const SwitchScreen = () => {
  const { top } = useSafeAreaInsets();
  return (
    <CustomView style={{ marginTop: top, paddingHorizontal: 10 }}>
      <Text>Hola</Text>
    </CustomView>
  );
};
