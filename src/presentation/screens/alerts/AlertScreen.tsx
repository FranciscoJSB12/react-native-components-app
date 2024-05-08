import { Alert, View } from 'react-native';
import { CustomView } from '../../components/ui/CustomView';
import { Title } from '../../components/ui/Title';
import { globalStyles } from '../../../config/theme/theme';
import { Button } from '../../components/ui/Button';

export const AlertScreen = () => {
  const createTwoButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);

  const createThreeButtonAlert = () =>
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {
          text: 'Ask me later',
          onPress: () => console.log('Ask me later pressed'),
        },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      {
        cancelable: true,
        onDismiss() {
          console.log('On dimiss');
        },
      }
    );

  const showPrompt = () => {
    Alert.prompt('Email', 'hola', (value: string) => console.log({ value }));
  };

  return (
    <CustomView style={globalStyles.globalMargin}>
      <Title
        safe
        text='Alertas'
      />
      <Button
        text='Alerta - 2 Botones'
        onPress={createTwoButtonAlert}
      />
      <View style={{ height: 10 }} />
      <Button
        text='Alerta - 3 Botones'
        onPress={createThreeButtonAlert}
      />
      <View style={{ height: 10 }} />
      <Button
        text='Prompt'
        onPress={showPrompt}
      />
      <View style={{ height: 10 }} />
    </CustomView>
  );
};
