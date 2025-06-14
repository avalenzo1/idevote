import { router } from 'expo-router';
import { Text, TextInput, View } from 'react-native';
import { useState } from 'react';

import { useSession } from '@/contexts/auth';
import { globalStyles } from '@/constants/styles';
import { Button } from '@react-navigation/elements';

export default function SignIn() {
    const { signIn, signUp } = useSession();
    const [email, setEmail] = useState('john.doe@example.com',);
    const [password, setPassword] = useState('password');

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View>
                <TextInput placeholder="Email" style={globalStyles.input} placeholderTextColor="grey" onChangeText={setEmail}
                    value={email}></TextInput>

                <TextInput placeholder="Password" style={globalStyles.input} placeholderTextColor="grey" onChangeText={setPassword}
                    value={password}></TextInput>
            </View>

            <Button
                onPress={() => {
                    signIn(email, password);
                    // Navigate after signing in. You may want to tweak this to ensure sign-in is
                    // successful before navigating.
                    router.replace('/');
                }}
            >
                Sign In
            </Button>

            <Button
                onPress={() => {
                    signUp(email, password);
                    // Navigate after signing in. You may want to tweak this to ensure sign-in is
                    // successful before navigating.
                    router.replace('/');
                }}
            >
                Sign Up
            </Button>
        </View>
    );
}