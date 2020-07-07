import React from 'react';
import { View, StatusBar, Alert, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Text, Card, ListItem } from 'react-native-elements';
import dadosTecnicos from '../../banco/bdTecnicos'; /* Importação do banco bdTecnicos */
import dadosVeiculos from '../../banco/bdVeiculos'; /* Importação do banco bdVeiculos */

const styles = StyleSheet.create({
  numeros: {
    fontSize: 16,
    alignSelf: 'center',
    color: 'white',
    backgroundColor: '#004B8D',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5
  },
});


export default function Home ({ navigation: { navigate } }) {

  return (
    <View>

      <StatusBar barStyle="dark-content" backgroundColor='white' translucent />

      <ScrollView>

        <View style={{ flexDirection: 'row', alignSelf: 'center'}}>
          <Card
            title='Ordens de serviço' titleStyle={{ fontSize: 14 }}
            containerStyle={{ width: 166, borderRadius: 5 }}
          >
            <Text style={styles.numeros} onPress={() => navigate('Serviços')}>  9  </Text>
          </Card>
          <Card
            title='Protocolos' titleStyle={{ fontSize: 14 }}
            containerStyle={{ width: 166, borderRadius: 5 }}
          >
            <Text style={styles.numeros}> 30 </Text>
          </Card>
        </View>
        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
          <Card
            title='Ordens já atendidas' titleStyle={{ fontSize: 14 }}
            containerStyle={{ width: 166, borderRadius: 5 }}
          >
            <Text style={styles.numeros}> 12 </Text>
          </Card>
          <Card
            title='Novos clientes' titleStyle={{ fontSize: 14 }}
            containerStyle={{ width: 166, borderRadius: 5 }}
          >
            <Text style={styles.numeros}>  8  </Text>
          </Card>
        </View >
        <View>
          <Card
            title='Técnicos em plantão disponíveis'
            containerStyle={{ borderRadius: 8 }}
          >
            {
              dadosTecnicos.filter(a => ((a.primeironome == 'Gustavo') || (a.primeironome == 'Renan') || (a.primeironome == 'Vinicius') )).map((u, i) => {
                return (
                  <ListItem
                    button onPress={() => navigate('Informações - ' + u.primeironome)}
                    key={i}
                    roundAvatar
                    title={u.primeironome}
                    leftAvatar={{ source: { uri: 'https://image.flaticon.com/icons/png/512/306/306473.png' }}} 
                    containerStyle={{ height: 60 }}
                    bottomDivider
                    chevron={{ color: 'gray' }}
                    badge={{ value: u.tarefas, textStyle: { color: 'white' }, containerStyle: { marginTop: 0 } }}
                  />
                );
              })
            }
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingTop: 20 }}>
              <Text style={{ alignSelf: 'flex-start', color: 'white', backgroundColor: '#004B8D', fontSize: 16, paddingHorizontal: 20, paddingVertical: 6, borderRadius: 5 }} onPress={() => navigate('Lista de Técnicos')}>Gerenciar</Text>
              <Text style={{ alignSelf: 'flex-end', color: 'white', backgroundColor: '#004B8D', fontSize: 16, paddingHorizontal: 20, paddingVertical: 6, borderRadius: 5 }} onPress={() => navigate('Técnicos')}>     Mais     </Text>
            </View>
            
            
          </Card>
        </View>

        <View style={{ paddingBottom: 15 }}>
          <Card
            title='Veículos disponíveis'
            containerStyle={{ borderRadius: 8 }}
          >
            {
              dadosVeiculos.filter(a => (a.disponivel == true)).map((u, i) => {
                return (
                  <ListItem
                    button onPress={() => navigate('Gerenciar Veículo - ' + u.name)}
                    key={i}
                    roundAvatar
                    title={u.name}
                    subtitle={u.subtitle}
                    leftAvatar={{ source: { uri: u.avatar } }}
                    containerStyle={{ height: 60 }}
                    bottomDivider
                    chevron={{ color: 'gray' }}
                  />
                );
              })
            }
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingTop: 20 }}>
              <Text style={{ alignSelf: 'flex-start', color: 'white', backgroundColor: '#004B8D', fontSize: 16, paddingHorizontal: 20, paddingVertical: 6, borderRadius: 5 }} onPress={() => navigate('Lista de Veículos')}>Gerenciar</Text>
              <Text style={{ alignSelf: 'flex-end', color: 'white', backgroundColor: '#004B8D', fontSize: 16, paddingHorizontal: 20, paddingVertical: 6, borderRadius: 5 }} onPress={() => navigate('Veículos')}>     Mais     </Text>
            </View>
          </Card>
        </View>

      </ScrollView>
    </View>


  );
}
