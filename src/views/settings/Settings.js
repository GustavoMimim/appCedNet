import React from 'react';
import { Text, View, StatusBar, StyleSheet, Alert  } from 'react-native';
import { Button } from 'react-native-elements';

export default function Home () {
  
  return (
    
    <View>
      <StatusBar hidden={false} />
      <Text style={styles.baseText}>Configurações</Text>
      <Button
        style={styles.botao} title='Alterar tema' onPress={() => Alert.alert('Olá')}/>
    </View>
  );
};

const styles = StyleSheet.create({
  baseText: {
    borderStyle: "solid",
    color: 'black',
    fontWeight: 'bold',
    marginVertical: 40,
    marginLeft: 10,
    alignSelf: "flex-start",
    fontSize: 28
    
  },
  botao: {
    backgroundColor: 'red'
  }
});

