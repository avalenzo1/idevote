import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: '#f5f3f0',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default function Bible() {
  return (
    <View
      style={styles.container}
    >

    </View>
  );
}