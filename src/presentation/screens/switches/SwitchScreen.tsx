import { CustomView } from '../../components/ui/CustomView';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { CustomSwitch } from '../../components/ui/CustomSwitch';

export const SwitchScreen = () => {
  const { top } = useSafeAreaInsets();

  //const [isEnabled, setIsEnabled] = useState(false);
  //const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const [isActive, setIsActive] = useState(false);

  return (
    <CustomView style={{ marginTop: top, paddingHorizontal: 10 }}>
      <Card>
        <CustomSwitch
          isOn={isActive}
          onChange={value => setIsActive(value)}
          text='Encendido'
        />
        {/* <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor='#3e3e3e'
          onValueChange={toggleSwitch}
          value={isEnabled}
        /> */}
      </Card>
    </CustomView>
  );
};
