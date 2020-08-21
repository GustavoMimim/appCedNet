import React from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Text, Card, ListItem } from 'react-native-elements';
import dadosTecnicos from '../../banco/bdTecnicos'; /* Importação do banco bdTecnicos */
import dadosVeiculos from '../../banco/bdVeiculos'; /* Importação do banco bdVeiculos */

console.disableYellowBox = true

export default function Home ({ navigation: { navigate } }) {

    return (
    <View>

      <StatusBar barStyle="dark-content" backgroundColor='white' translucent />

      <ScrollView>
        <View style={styles.viewCard}>
          <Card
            title='Ordens de serviço' titleStyle={{ fontSize: 14 }}
            containerStyle={{ width: '40%' }}
          >
            <Text style={styles.numeros} onPress={() => navigate('Serviços')}> 9 </Text>
          </Card>
          <Card
            title='Protocolos' titleStyle={{ fontSize: 14 }}
            containerStyle={{ width: '40%' }}
          >
            <Text style={styles.numeros}> 30 </Text>
          </Card>
        </View>
        <View style={styles.viewCard}>
          <Card
            title='Ordens já atendidas' titleStyle={{ fontSize: 14 }}
            containerStyle={{ width: '40%' }}
          >
            <Text style={styles.numeros}> 12 </Text>
          </Card>
          <Card
            title='Novos clientes' titleStyle={{ fontSize: 14 }}
            containerStyle={{ width: '40%' }}
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
              dadosTecnicos.filter(a => (((a.primeironome == 'Gustavo') || (a.primeironome == 'Renan') || (a.primeironome == 'Vinicius')) && (a.excluido != true))).map((u, i) => {
                return (
                  <ListItem
                    button onPress={() => navigate('Gerenciar Técnico', { index: u.id })}
                    key={i}
                    roundAvatar
                    title={u.nomeAbreviado}
                    leftAvatar={{ source: { uri: 'https://image.flaticon.com/icons/png/512/306/306473.png' } }}
                    containerStyle={{ height: 60 }}
                    bottomDivider
                    chevron={{ color: 'gray' }}
                    badge={{ value: u.tarefas, textStyle: { color: 'white' }, containerStyle: { marginTop: 0 }, badgeStyle: { backgroundColor: '#004B8D' } }}
                  />
                );
              })
            }
            <View style={styles.viewButtons}>
              <Text style={styles.text} onPress={() => navigate('Lista de Técnicos')}>Gerenciar</Text>
              <Text style={styles.text} onPress={() => navigate('Técnicos')}>     Mais     </Text>
            </View>
          </Card>
        </View>

        <View style={{ paddingBottom: 15 }}>
          <Card
            title='Veículos disponíveis'
            containerStyle={{ borderRadius: 8 }}
          >
            {
              dadosVeiculos.filter(a => ((a.disponivel == true) && (a.excluido != true))).map((u, i) => {
                return (
                  <ListItem
                    button onPress={() => navigate('Gerenciar Veículo', { index: u.id })}
                    key={i}
                    roundAvatar
                    title={u.name}
                    subtitle={u.fabricante + ' ' + u.modelo + ' - ' + u.ano}
                    leftAvatar={{ source: { uri: u.avatar } }}
                    containerStyle={{ height: 60 }}
                    bottomDivider
                    chevron={{ color: 'gray' }}
                  />
                );
              })
            }
            <View style={styles.viewButtons}>
              <Text style={styles.text} onPress={() => navigate('Lista de Veículos')}>Gerenciar</Text>
              <Text style={styles.text} onPress={() => navigate('Veículos')}>     Mais     </Text>
            </View>
          </Card>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  numeros: {
    fontSize: 16,
    alignSelf: 'center',
    color: 'black',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5
  },
  viewCard: {
    flexDirection: 'row',
    alignSelf: 'center'
  },
  viewButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 20
  },
  text: {
    alignSelf: 'flex-start',
    color: 'white',
    backgroundColor: '#004B8D',
    fontSize: 16,
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 5
  }
});
