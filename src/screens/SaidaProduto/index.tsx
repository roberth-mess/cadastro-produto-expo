import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export function SaidaProduto() {
  const [produto, setProduto] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [motivo, setMotivo] = useState('Venda');

  const motivos = ['Venda', 'Avarias', 'Uso Interno'];

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome do Produto</Text>
      <TextInput style={styles.input} placeholder="Ex: Teclado Mecânico" value={produto} onChangeText={setProduto} />

      <Text style={styles.label}>Quantidade de Saída</Text>
      <TextInput style={styles.input} placeholder="Ex: 5" keyboardType="numeric" value={quantidade} onChangeText={setQuantidade} />

      <Text style={styles.label}>Motivo da Retirada</Text>
      <View style={styles.optionsContainer}>
        {motivos.map((item) => (
          <TouchableOpacity
            key={item}
            style={[styles.optionButton, motivo === item && styles.optionSelected]}
            onPress={() => setMotivo(item)}
          >
            <Text style={motivo === item ? styles.textSelected : styles.textUnselected}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Registar Saída</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
  label: { fontSize: 16, fontWeight: 'bold', marginTop: 15, color: '#333' },
  input: { backgroundColor: '#fff', padding: 12, borderRadius: 8, marginTop: 5, borderWidth: 1, borderColor: '#ddd' },
  optionsContainer: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 },
  optionButton: { flex: 1, paddingVertical: 12, borderWidth: 1, borderColor: '#ddd', borderRadius: 8, alignItems: 'center', marginHorizontal: 3, backgroundColor: '#fff' },
  optionSelected: { backgroundColor: '#007bff', borderColor: '#007bff' },
  textSelected: { color: '#fff', fontWeight: 'bold', fontSize: 14 },
  textUnselected: { color: '#333', fontSize: 14 },
  button: { backgroundColor: '#d9534f', padding: 15, borderRadius: 8, marginTop: 25, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 }
});