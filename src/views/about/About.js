import React from 'react';
import { Text, View, StatusBar } from 'react-native';

export default function About () {
  return (
    <View>
      <StatusBar hidden={false} />
      <Text>Não somos legais, somos fodinhas!</Text>
    </View>
  );
}