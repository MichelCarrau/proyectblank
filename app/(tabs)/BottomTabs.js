import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from '../home';
import RecommendForm from '../RecommendForm';
import AboutUs from '../AboutUs';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: true, // muestra encabezado en cada pantalla
        tabBarStyle: { backgroundColor: '#FFE8CD' },
        tabBarActiveTintColor: '#FF6B6B',
        tabBarInactiveTintColor: 'gray',
        headerStyle: { backgroundColor: '#FF6B6B' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Inicio') iconName = 'home-outline';
          else if (route.name === 'Recomendar') iconName = 'create-outline';
          else if (route.name === 'Acerca') iconName = 'information-circle-outline';
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Inicio" component={Home} />
      <Tab.Screen name="Recomendar" component={RecommendForm} options={{ title: 'Recomienda un libro' }} />
      <Tab.Screen name="Acerca" component={AboutUs} />
    </Tab.Navigator>
  );
}
