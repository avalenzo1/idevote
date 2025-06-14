import { Stack } from 'expo-router';
import { SessionProvider } from '@/contexts/auth';
import { SplashScreenController } from '@/components/SplashScreenController';
import { useSession } from '@/contexts/auth';

export default function Root() {
  // Set up the auth context and render our layout inside of it.
  return (
    <SessionProvider>
      <SplashScreenController />
      <RootNavigator />
    </SessionProvider>
  );
}

// Separate this into a new component so it can access the SessionProvider context later

function RootNavigator() {
  const { session } = useSession();

  return (
    <Stack>
      <Stack.Protected guard={!!session}>
        <Stack.Screen name="(app)" options={{headerShown: false}} />
      </Stack.Protected>

      <Stack.Protected guard={!session}>
        <Stack.Screen name="sign-in" options={{headerShown: false}} />
      </Stack.Protected>
    </Stack>
  );
}