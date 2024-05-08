import { View, Text, Pressable, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { colors } from '../../../config/theme/theme';
import { useNavigation } from '@react-navigation/native';
import { Separator } from './Separator';

interface Props {
  name: string;
  icon: string;
  component: string;
  isFirst?: boolean;
  isLast?: boolean;
}

export const MenuItem = ({ name, icon, component, isFirst, isLast }: Props) => {
  const navigation = useNavigation<any>();
  return (
    <>
      <Pressable onPress={() => navigation.navigate(component)}>
        <View
          style={{
            ...styles.container,
            backgroundColor: colors.cardBackground,
            ...(isFirst && {
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              paddingTop: 10,
            }),
            ...(isLast && {
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              paddingBottom: 10,
            }),
          }}
        >
          <Ionicons
            // @ts-ignore
            name={icon}
            size={25}
            style={{
              marginRight: 10,
            }}
            color={colors.primary}
          />
          <Text style={{ color: colors.text }}>{name}</Text>
          <Ionicons
            name='chevron-forward-circle-outline'
            size={25}
            style={{
              marginLeft: 'auto',
              color: colors.primary,
            }}
            color={colors.primary}
          />
        </View>
      </Pressable>
      {!isLast && <Separator />}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
