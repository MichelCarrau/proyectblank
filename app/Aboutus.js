// app/AboutUs.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function AboutUs() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.header}>Sobre nosotros</Text>
        <View style={styles.formBox}>
          <Text style={styles.paragraph}>
            ¡Hola! 👋 Soy estudiante de la Universidad Tecnológica de la Riviera Maya. Este proyecto fue desarrollado con React Native como parte de mi actividad.
          </Text>
          <Text style={styles.paragraph}>
            El objetivo principal fue crear una pequeña aplicación de librería 📚 que permita a los usuarios:
          </Text>
          <Text style={styles.listItem}>• Ver una lista de libros disponibles.</Text>
          <Text style={styles.listItem}>• Consultar detalles de cada libro.</Text>
          <Text style={styles.listItem}>• Recomendar nuevos libros a través de un formulario.</Text>
          <Text style={styles.paragraph}>
            Durante la creación del proyecto aplicamos los siguientes temas aprendidos en clase:
          </Text>
          <Text style={styles.listItem}>✅ Uso de componentes funcionales en React Native.</Text>
          <Text style={styles.listItem}>✅ Navegación con Stack Navigator y manejo de pantallas.</Text>
          <Text style={styles.listItem}>✅ Estilos personalizados con StyleSheet.</Text>
          <Text style={styles.listItem}>✅ Incorporación de íconos con FontAwesome.</Text>
          <Text style={styles.listItem}>✅ Estructura básica de carpetas y organización del código.</Text>
          <Text style={styles.paragraph}>
            ¡Gracias por visitar!
          </Text>
        </View>
      </ScrollView>
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
  scroll: {
    paddingBottom: 40,
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
    textAlign: 'center',

  },
  paragraph: {
    fontSize: 16,
    color: '#333',
    marginBottom: 12,
    lineHeight: 24,
        textAlign: 'center',
    fontWeight: 'bold',

  },
  listItem: {
    fontSize: 16,
    color: '#444',
    marginBottom: 8,
    paddingLeft: 10,
  },
});
