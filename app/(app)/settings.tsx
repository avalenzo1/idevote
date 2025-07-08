import { StyleSheet, View, Button } from 'react-native';
import { globalStyles } from '@/constants/styles';
import { useSession } from '@/contexts/auth';

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