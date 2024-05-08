import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import { Card } from '../../components/ui/Card';
import { CustomView } from '../../components/ui/CustomView';
import { Title } from '../../components/ui/Title';
import { globalStyles } from '../../../config/theme/theme';

export const TextInputScreen = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView>
        <CustomView margin>
          <Title
            safe
            text='Text Inputs'
          />
          <Card>
            <TextInput
              style={globalStyles.input}
              placeholder='Nombre completo'
              autoCapitalize={'words'}
              autoCorrect={false}
              onChangeText={value => setForm({ ...form, name: value })}
            />
            <TextInput
              style={globalStyles.input}
              placeholder='Correo electrónico'
              autoCapitalize={'none'}
              autoCorrect={false}
              keyboardType='email-address'
              onChangeText={value => setForm({ ...form, email: value })}
            />
            <TextInput
              style={globalStyles.input}
              placeholder='Teléfono'
              keyboardType='email-address'
              onChangeText={value => setForm({ ...form, phone: value })}
            />
          </Card>
          <View style={{ height: 10 }} />
          <Card>
            <Text>{JSON.stringify(form, null, 2)}</Text>
          </Card>
          <Card>
            <Text>{JSON.stringify(form, null, 2)}</Text>
          </Card>
          <Card>
            <Text>{JSON.stringify(form, null, 2)}</Text>
          </Card>
          <Card>
            <Text>{JSON.stringify(form, null, 2)}</Text>
          </Card>
          <Card>
            <Text>{JSON.stringify(form, null, 2)}</Text>
          </Card>
          <View style={{ height: 50 }} />
          <Card>
            <TextInput
              style={globalStyles.input}
              placeholder='Teléfono'
              keyboardType='email-address'
              onChangeText={value => setForm({ ...form, phone: value })}
            />
          </Card>
        </CustomView>
        <View style={{ height: 50 }} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
