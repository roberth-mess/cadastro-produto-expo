import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export function CadastroProduto() {
  const [nome, setNome] = useState('');
  const [quantidade, setQuantidade] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome do Produto</Text>
      <TextInput style={styles.input} placeholder="Ex: Bola de Futebol" value={nome} onChangeText={setNome} />

      <Text style={styles.label}>Quantidade Inicial</Text>
      <TextInput style={styles.input} placeholder="Ex: 10" keyboardType="numeric" value={quantidade} onChangeText={setQuantidade} />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Cadastrar Produto</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
  label: { fontSize: 16, fontWeight: 'bold', marginTop: 15, color: '#333' },
  input: { backgroundColor: '#fff', padding: 12, borderRadius: 8, marginTop: 5, borderWidth: 1, borderColor: '#ddd' },
  button: { backgroundColor: '#007bff', padding: 15, borderRadius: 8, marginTop: 25, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 }
});