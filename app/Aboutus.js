// app/AboutUs.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AboutUs() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sobre nosotros</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFE8CD' },
  text: { fontSize: 20, fontWeight: 'bold', color: '#FF6B6B' },
});
