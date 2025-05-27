import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FontAwesome } from '@expo/vector-icons'; // usa esto si estás con Expo

import Home from './app/home';
import BookDetail from './app/bookdetail';
import RecommendForm from './app/RecommendForm';
import AboutUs from './app/Aboutus'; // asegúrate de tener este archivo creado

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={({ navigation }) => ({
            headerStyle: {
              backgroundColor: '#FF6B6B',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            contentStyle: {
              backgroundColor: '#FFE8CD',
            },
            headerRight: () => (
              <View style={styles.iconContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                  <FontAwesome name="home" size={22} color="#fff" style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('RecommendForm')}>
                  <FontAwesome name="pencil" size={22} color="#fff" style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('AboutUs')}>
                  <FontAwesome name="info-circle" size={22} color="#fff" style={styles.icon} />
                </TouchableOpacity>
              </View>
            ),
          })}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="BookDetail" component={BookDetail} options={{ title: 'Detalle del libro' }} />
          <Stack.Screen name="RecommendForm" component={RecommendForm} options={{ title: 'Recomienda un libro' }} />
          <Stack.Screen name="AboutUs" component={AboutUs} options={{ title: 'Acerca de' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE8CD',
  },
  iconContainer: {
    flexDirection: 'row',
    marginRight: 10,
  },
  icon: {
    marginHorizontal: 8,
  },
});
