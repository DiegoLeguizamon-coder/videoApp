import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Home from './src/screens/containers/home.js';
import Header from './src/sections/components/header.js';

export default function App() {
  return (
    <Home>
      <Header>
        <Text>Texto de la derecha</Text>
      </Header>
      <Text>Buscador</Text>
      <Text>Categorias</Text>
      <Text>Sugerencias</Text>
    </Home>
  );
}