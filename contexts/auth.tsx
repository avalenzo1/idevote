import { use, createContext, type PropsWithChildren } from 'react';
import { useStorageState } from '@/hooks/useStorageState';

const AuthContext = createContext<{
    signIn: (email: string, password: string) => void;
    signUp: (email: string, password: string) => void;
    signOut: () => void;
    session?: string | null;
    isLoading: boolean;
}>({
    signIn: () => null,
    signOut: () => null,
    signUp: () => null,
    session: null,
    isLoading: false,
});

// This hook can be used to access the user info.
export function useSession() {
    const value = use(AuthContext);
    if (!value) {
        throw new Error('useSession must be wrapped in a <SessionProvider />');
    }

    return value;
}

export function SessionProvider({ children }: PropsWithChildren) {
    const [[isLoading, session], setSession] = useStorageState('session');

    return (
        <AuthContext
            value={{
                signIn: (email: string, password: string) => {
                    // Perform sign-in logic here
                    setSession('xxx');
                },

                signUp: async (email: string, password: string) => {
                    const user = {
                        email: email,
                        password: password
                    };

                    try {
                        // Perform sign-up logic here
                        const response = await fetch("http://192.168.1.66:8080/auth/register", {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(user),
                        });



                        if (response.ok) {
                            const json = await response.json();
                            console.log(json);
                        } else {
                            console.error(response.statusText)
                        }

                        
                    } catch (error: any) {
                        console.error(error.message);
                    }


                },

                signOut: () => {
                    setSession(null);
                },
                session,
                isLoading,
            }}>
            {children}
        </AuthContext>
    );
}
