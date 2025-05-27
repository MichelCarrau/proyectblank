import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function BookCard({ book, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: book.image }} style={styles.image} />
      <Text style={styles.title}>{book.title}</Text>
      <Text style={styles.description}>{book.description}</Text>
      <Text style={styles.verMas}>Ver más</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
  margin: 10,
  padding: 10,
  backgroundColor: '#FFDCDC', // rojo tomate claro
  borderRadius: 30, // redondeado y cute
  borderWidth: 3,
  borderColor: '#fff',
  borderStyle: 'dashed', // estilo - - - -
  width: 160,
  alignItems: 'center',
},
  image: {
    width: '100%',
    height: 100,
    borderRadius: 5,
  },
  title: {
    fontWeight: 'bold',
    marginTop: 8,
  },
  description: {
    marginTop: 4,
    color: '#555',
  },
  verMas: {
    marginTop: 6,
    fontWeight: 'bold',
    color: '#DA6C6C',
  },
});
