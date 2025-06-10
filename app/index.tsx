import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f3f0',
    alignItems: 'center',
    justifyContent: 'center',
  }
});


export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <View>
        <Text>Home</Text>
      </View>
      
    </View>
  );
}