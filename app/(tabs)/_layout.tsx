import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { colors } from '@/src/theme';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          left: 18,
          right: 18,
          bottom: 18,
          height: 66,
          borderTopWidth: 0,
          borderRadius: 24,
          backgroundColor: '#121821',
          paddingTop: 10,
        },
        tabBarActiveTintColor: colors.accent,
        tabBarInactiveTintColor: colors.muted,
        tabBarIcon: ({ color, size, focused }) => {
          const map: Record<string, keyof typeof Ionicons.glyphMap> = {
            index: focused ? 'home' : 'home-outline',
            vault: focused ? 'folder-open' : 'folder-open-outline',
            scan: focused ? 'scan' : 'scan-outline',
            settings: focused ? 'settings' : 'settings-outline',
          };
          return <Ionicons name={map[route.name] ?? 'ellipse-outline'} size={focused ? 26 : 24} color={color} />;
        },
      })}
    >
      <Tabs.Screen name="index" />
      <Tabs.Screen name="vault" />
      <Tabs.Screen name="scan" />
      <Tabs.Screen name="settings" />
    </Tabs>
  );
}
