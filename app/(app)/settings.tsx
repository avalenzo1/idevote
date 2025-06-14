import { StyleSheet, View, Button } from 'react-native';
import { globalStyles } from '@/constants/styles';
import * as WebBrowser from 'expo-web-browser';
import { useSession } from '@/contexts/auth';


const styles = StyleSheet.create({

});


export default function Settings() {
  const { signOut } = useSession();

  return (
    <View
      style={globalStyles.container}
    >
      <Button
        title="Logout"
        onPress={() => {
          // The `app/(app)/_layout.tsx` will redirect to the sign-in screen.
          signOut();
        }}
      />
    </View>
  );
}