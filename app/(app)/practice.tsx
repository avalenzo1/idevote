import { StyleSheet, View, Text } from 'react-native';

import { globalStyles } from '@/constants/styles';
import { Link } from 'expo-router';

const styles = StyleSheet.create({

});


export default function Practice() {
  return (
    <View
      style={globalStyles.container}
    >
      <Text>
        Practice
      </Text>

      <Link href="/lesson?type=memory_scripture">Memory Scripture</Link>
    </View>
  );
}