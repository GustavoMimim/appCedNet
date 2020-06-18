import React from 'react';
import { Text, View, StatusBar } from 'react-native';

export default function Home () {
  return (
    <View>
      <StatusBar hidden={false} />
      <Text style={{ padding: 50 }}>Configurações!</Text>
    </View>
  );
}