import { globalStyles } from '@/constants/styles';
import { Text, View } from 'react-native';

export default function Fellowship() {
  return (
    <View
      style={globalStyles.container}
    >
      <Text style={globalStyles.text}>You are not a part of any action groups.</Text>
    </View>
  );
}