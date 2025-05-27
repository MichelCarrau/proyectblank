import React, { useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

export default function BookDetail({ route }) {
  const { book } = route.params;
  const screenWidth = Dimensions.get('window').width;
  const [showOpiniones, setShowOpiniones] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.title}>{book.title}</Text>

      <View style={styles.contentRow}>
        <Image source={{ uri: book.image }} style={styles.image} />

        <View style={styles.infoBox}>
          <Text style={styles.label}>Autor:</Text>
          <Text style={styles.text}>{book.author}</Text>

          <Text style={styles.label}>Descripción:</Text>
          <Text style={styles.text}>{book.description}</Text>

          <Text style={styles.label}>Sinopsis:</Text>
          <Text style={styles.text}>{book.sinopsis}</Text>
        </View>
      </View>

      <TouchableOpacity onPress={() => setShowOpiniones(!showOpiniones)} style={styles.opinionBox}>
        <Text style={styles.opinionTitle}>💬 Opiniones &lt;3 {showOpiniones ? '▲' : '▼'}</Text>

        {showOpiniones && (
          <View style={styles.opinionContent}>
            <Text style={styles.label}>Opinión personal:</Text>
            <Text style={styles.text}>{book.opinionPersonal}</Text>

            <Text style={styles.label}>Otras opiniones:</Text>
            {book.opiniones && book.opiniones.map((opinion, index) => (
              <Text key={index} style={styles.text}>• {opinion}</Text>
            ))}
          </View>
        )}
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#FF6B6B',
  },
  contentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  image: {
    width: 200,
    height: 300,
    borderRadius: 15,
  },
  infoBox: {
    flex: 1,
    marginLeft: 20,
    backgroundColor: '#FFD6D6',
    borderRadius: 30,
    padding: 20,
    borderWidth: 3,
    borderColor: '#FFF',
    borderStyle: 'dashed',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  opinionBox: {
    backgroundColor: '#FFE3E3',
    borderRadius: 30,
    padding: 20,
    borderWidth: 3,
    borderColor: '#FFF',
    borderStyle: 'dashed',
    alignItems: 'center',
  },
  opinionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FF6B6B',
    marginBottom: 10,
  },
  opinionContent: {
    width: '100%',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF6B6B',
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 6,
    color: '#333',
  },
});
