  import React from 'react';
  import { View, StyleSheet } from 'react-native';
  import { NavigationContainer } from '@react-navigation/native';
  import { createNativeStackNavigator } from '@react-navigation/native-stack';


  import BottomTabs from './tabs/BottomTabs';


  import Home from './app/home';
  import BookDetail from './app/bookdetail';
  import RecommendForm from './app/RecommendForm';

  const Stack = createNativeStackNavigator();

  export default function App() {
    return (
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerStyle: {
                backgroundColor: '#FF6B6B', // color del encabezado
              },
              headerTintColor: '#fff', // color del texto en el encabezado
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              contentStyle: {
                backgroundColor: '#FFE8CD', // color de fondo de las pantallas
              },
            }}
          >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="BookDetail" component={BookDetail} options={{ title: 'Detalle del libro' }} />
            <Stack.Screen name="RecommendForm" component={RecommendForm} options={{ title: 'Recomienda un libro' }} />
          </Stack.Navigator>
                <BottomTabs />

        </NavigationContainer>
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE8CD', // fondo durazno claro de toda la app
  },
});
