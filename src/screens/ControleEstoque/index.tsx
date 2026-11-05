import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

// Estrutura dos dados do produto
interface Produto {
  id: string;
  nome: string;
  quantidade: number;
}

// Lista de produtos para exibição
const PRODUTOS_MOCK: Produto[] = [
  { id: '1', nome: 'Teclado Mecânico', quantidade: 15 },
  { id: '2', nome: 'Mouse Sem Fio', quantidade: 3 },
  { id: '3', nome: 'Monitor 24"', quantidade: 8 },
  { id: '4', nome: 'Cabo HDMI', quantidade: 2 },
  { id: '5', nome: 'Headset Gamer', quantidade: 0 },
];

export function ControleEstoque() {
  // Lógica para determinar o texto e a cor do status
  const getStatus = (quantidade: number) => {
    if (quantidade === 0) {
      return { texto: 'Esgotado', cor: '#d9534f', bg: '#fdf2f2' };
    }
    if (quantidade <= 5) {
      return { texto: 'Estoque Baixo', cor: '#f0ad4e', bg: '#fef9e7' };
    }
    return { texto: 'Em Estoque', cor: '#5cb85c', bg: '#eafaf1' };
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Produtos</Text>

      <FlatList
        data={PRODUTOS_MOCK}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => {
          const status = getStatus(item.quantidade);

          return (
            <View style={styles.card}>
              <View style={styles.infoContainer}>
                <Text style={styles.nomeProduto}>{item.nome}</Text>
                <Text style={styles.quantidadeText}>
                  Disponível: <Text style={styles.qtdValor}>{item.quantidade} un</Text>
                </Text>
              </View>

              <View style={[styles.badge, { backgroundColor: status.bg, borderColor: status.cor }]}>
                <Text style={[styles.statusText, { color: status.cor }]}>
                  {status.texto}
                </Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  listContainer: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  infoContainer: {
    flex: 1,
  },
  nomeProduto: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 4,
  },
  quantidadeText: {
    fontSize: 14,
    color: '#666',
  },
  qtdValor: {
    fontWeight: 'bold',
    color: '#333',
  },
  badge: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 12,
    borderWidth: 1,
  },
  statusText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
});