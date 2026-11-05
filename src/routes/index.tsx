import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { CadastroProduto } from '../screens/CadastroProduto';
import { SaidaProduto } from '../screens/SaidaProduto';
import { ControleEstoque } from '../screens/ControleEstoque';

const Tab = createBottomTabNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#007bff' },
          headerTintColor: '#ffffff',
          headerTitleStyle: { fontWeight: 'bold' },
          tabBarActiveTintColor: '#007bff',
          tabBarInactiveTintColor: '#888888',
        }}
      >
        <Tab.Screen 
          name="Cadastro" 
          component={CadastroProduto} 
          options={{ title: 'Novo Produto' }} 
        />
        <Tab.Screen 
          name="Saida" 
          component={SaidaProduto} 
          options={{ title: 'Saída de Produto' }} 
        />
        <Tab.Screen 
          name="Estoque" 
          component={ControleEstoque} 
          options={{ title: 'Controle de Estoque' }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}