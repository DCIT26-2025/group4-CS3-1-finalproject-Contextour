import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'react-native';
import * as NavigationBar from 'expo-navigation-bar';
import { useEffect } from 'react';

export default function RootLayout() {
  useEffect(() => {
    NavigationBar.setVisibilityAsync('hidden');
    NavigationBar.setBehaviorAsync('immersive');
  }, []);

  return (
    <>
      <StatusBar hidden={true} />
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: '#f4511e',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            backgroundColor: '#fff',
            position: 'absolute',
            bottom: 20,
            marginHorizontal: 20,
            borderRadius: 30,
            height: 70,
            elevation: 10,
            justifyContent: 'center',
            alignItems: 'center',
          },
          tabBarIconStyle: {
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          },
          headerShown: false,
          tabBarShowLabel: false,
        }}>
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="gallery"
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="images" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="settings" size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
