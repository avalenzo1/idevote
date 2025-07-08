import { Stack } from 'expo-router';

export default function Root() {
    // Set up the auth context and render our layout inside of it.
    return (
        <Stack>
            <Stack.Screen name="index" options={{
                headerTitle: "Home",
                title: "Home",
                headerShown: false,
            }} />

            <Stack.Screen name="translation" options={{
                presentation: 'modal',
            }} />

            <Stack.Screen name="books" options={{
                presentation: 'modal',
            }} />
        </Stack>
    );
}