import Feather from '@expo/vector-icons/Feather';
import { Tabs } from "expo-router";

export default function RootLayout() {
  return <Tabs>
    <Tabs.Screen name="index" options={{
      headerTitle: "Home",
      title: "Home",
      headerShown: false,
      tabBarIcon: ({focused, color}) => (
        <Feather name="home" size={24} color={color} />
      )
    }}></Tabs.Screen>
    <Tabs.Screen name="bible" options={{
      headerTitle: "Bible",
      title: "Bible",
      headerShown: false,
      tabBarIcon: ({focused, color}) => (
        <Feather name="book" size={24} color={color} />
      )
    }}></Tabs.Screen>
    <Tabs.Screen name="fellowship" options={{
      headerTitle: "Fellowship",
      title: "Fellowship",
      headerShown: false,
      tabBarIcon: ({focused, color}) => (
        <Feather name="users" size={24} color={color} />
      )
    }}></Tabs.Screen>
    <Tabs.Screen name="settings" options={{
      headerTitle: "Settings",
      title: "Settings",
      headerShown: false,
      tabBarIcon: ({focused, color}) => (
        <Feather name="settings" size={24} color={color} />
      )
    }}></Tabs.Screen>
  </Tabs>;
}
