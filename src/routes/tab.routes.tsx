import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import { CadastroProduto } from '../screens/CadastroProduto';
import { SaidaProduto } from '../screens/SaidaProduto';
import { ControleEstoque } from '../screens/ControleEstoque';

const Tab = createBottomTabNavigator();

export function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#007bff',
        tabBarInactiveTintColor: '#888',
        headerTitleAlign: 'center',
      }}
    >
      <Tab.Screen 
        name="Cadastro" 
        component={CadastroProduto}
        options={{
          title: 'Novo Produto',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="add-box" size={size} color={color} />
          )
        }}
      />
      <Tab.Screen 
        name="Saida" 
        component={SaidaProduto}
        options={{
          title: 'Saída de Produto',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="call-made" size={size} color={color} />
          )
        }}
      />
      <Tab.Screen 
        name="Estoque" 
        component={ControleEstoque}
        options={{
          title: 'Controle de Estoque',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="inventory" size={size} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  );
}
