import Feather from '@expo/vector-icons/Feather';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { SplashScreen, Tabs } from "expo-router";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import { themes } from '@/constants/theme';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    'cardo': require('@/assets/fonts/cardo.ttf'),
    'lex': require('@/assets/fonts/lexicon.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return <SafeAreaView style={{ flex: 1 }}>
    <Tabs screenOptions={{
      tabBarStyle: {
        height: 55, // or whatever height you prefer
        paddingBottom: 0, // fine-tune manually
      },

    }}>
      <Tabs.Screen name="index" options={{
        headerTitle: "Home",
        title: "Home",
        headerShown: false,
        tabBarActiveTintColor: themes.light.primary,
        tabBarIcon: ({ focused, color }) => (
          <Feather name="home" size={24} color={color} />
        )

      }}></Tabs.Screen>
      <Tabs.Screen name="practice" options={{
        headerTitle: "Practice",
        title: "Practice",
        headerShown: false,
        tabBarActiveTintColor: themes.light.primary,
        tabBarIcon: ({ focused, color }) => (
          <FontAwesome6 name="dumbbell" size={24} color={color} />
        )
      }}></Tabs.Screen>
      <Tabs.Screen name="(bible)" options={{
        headerTitle: "Bible",
        title: "The Word",
        headerShown: false,
        tabBarActiveTintColor: themes.light.primary,
        tabBarIcon: ({ focused, color }) => (
          <Feather name="book" size={24} color={color} />
        )
      }}></Tabs.Screen>
      <Tabs.Screen name="fellowship" options={{
        headerTitle: "Fellowship",
        title: "Fellowship",
        headerShown: false,
        tabBarActiveTintColor: themes.light.primary,
        tabBarIcon: ({ focused, color }) => (
          <Feather name="users" size={24} color={color} />
        )
      }}></Tabs.Screen>
      <Tabs.Screen name="settings" options={{
        headerTitle: "Settings",
        title: "Settings",
        headerShown: false,
        tabBarActiveTintColor: themes.light.primary,
        tabBarIcon: ({ focused, color }) => (
          <Feather name="settings" size={24} color={color} />
        )
      }}>
      </Tabs.Screen>
    </Tabs>
  </SafeAreaView>;
}
