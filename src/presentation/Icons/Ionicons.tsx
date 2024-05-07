import Ionicons from '@expo/vector-icons/Ionicons';

interface Props {
  name: string;
  size?: number;
  color?: string;
}

export const IonIcons = ({ name, size = 50, color = '#000' }: Props) => {
  return (
    <Ionicons
      // @ts-ignore
      name={name}
      size={size}
      color={color}
    />
  );
};
