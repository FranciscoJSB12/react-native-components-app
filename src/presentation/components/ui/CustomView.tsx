import { ReactNode } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { globalStyles } from '../../../config/theme/theme';

interface Props {
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
  margin?: boolean;
}

export const CustomView = ({ style, children, margin = false }: Props) => {
  return (
    <View
      style={[
        globalStyles.mainContainer,
        style,
        margin ? globalStyles.globalMargin : null,
      ]}
    >
      {children}
    </View>
  );
};
