import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function RecommendForm({ navigation }) {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [title, setTitle] = useState('');
  const [recommendation, setRecommendation] = useState('');

  const onSubmit = () => {
    Alert.alert('Gracias', '¡Gracias por tu recomendación!');
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>📚 Recomienda un libro</Text>

      <View style={styles.formBox}>
        <TextInput
          placeholder="Tu nombre"
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholderTextColor="#999"
        />
        <TextInput
          placeholder="Tipo de libro"
          style={styles.input}
          value={type}
          onChangeText={setType}
          placeholderTextColor="#999"
        />
        <TextInput
          placeholder="Título del libro"
          style={styles.input}
          value={title}
          onChangeText={setTitle}
          placeholderTextColor="#999"
        />
        <TextInput
          placeholder="¿Por qué lo recomiendas?"
          style={[styles.input, styles.textArea]}
          value={recommendation}
          onChangeText={setRecommendation}
          multiline
          placeholderTextColor="#999"
        />

        <View style={styles.buttons}>
          <TouchableOpacity style={styles.buttonEnviar} onPress={onSubmit}>
            <Text style={styles.buttonText}>Enviar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonCancelar} onPress={() => navigation.goBack()}>
            <Text style={styles.buttonText}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#FFE8CD',
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FF6B6B',
    textAlign: 'center',
    marginBottom: 25,
  },
  formBox: {
    backgroundColor: '#FFE3E3',
    padding: 20,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#FFF',
    borderStyle: 'dashed',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#FFB3B3',
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
    color: '#333',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  buttons: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonEnviar: {
    backgroundColor: '#FF6B6B',
    paddingVertical: 25,
    paddingHorizontal: 60,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: '#fff',
    borderStyle: 'dashed',
    alignItems: 'center',
    flex: 1,
    marginRight: 10,
  },
  buttonCancelar: {
    backgroundColor: 'gray',
    paddingVertical: 25,
    paddingHorizontal: 60,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: '#fff',
    borderStyle: 'dashed',
    alignItems: 'center',
    flex: 1,
    marginLeft: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  
});
