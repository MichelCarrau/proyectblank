import React from 'react';
import { View, Text, ScrollView, StyleSheet, Button } from 'react-native';
import BookCard from './components/bookcard';
import { books } from './data';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native'; // agrega esto arriba si no lo tienes

export default function Home() {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>💗 Libros leídos por Mich 💗</Text>
      <View style={styles.list}>
        {books.map(book => (
          <BookCard
            key={book.id}
            book={book}
            onPress={() => navigation.navigate('BookDetail', { book })}
          />
        ))}
      </View>
      <View style={styles.recommendContainer}>
        <Text style={styles.recommendText}>💗 ¡Recomiéndanos un libro aquí! 💗</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('RecommendForm')}>
  <Text style={styles.buttonText}>Ir al formulario</Text>
</TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: 'center',
    
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  recommendContainer: {
    marginTop: 30,
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
  },
  recommendText: {
    fontSize: 24,
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: 'bold',

  },
    button: {
  marginTop: 10,
  backgroundColor: '#FF6B6B', // rojo tomate claro
  paddingVertical: 25,
  paddingHorizontal: 60,
  borderRadius: 20, // cute y redondeado
  borderWidth: 3,
  borderColor: '#fff',
  borderStyle: 'dashed', // bordes tipo - - - -
  alignItems: 'center',
},

buttonText: {
  color: 'white',
  fontSize: 18,
  fontWeight: 'bold',
},



});
