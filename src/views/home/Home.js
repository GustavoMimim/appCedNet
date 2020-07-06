import React from 'react';
import { View, StatusBar, Alert, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Text, Card, ListItem } from 'react-native-elements';

const technical = [
  {
    name: 'Gustavo B. Mimim',
    avatar: 'https://image.flaticon.com/icons/png/512/306/306473.png',
    tarefas: 6
  },
  {
    name: 'Renan L. R. da Silva',
    avatar: 'https://image.flaticon.com/icons/png/512/306/306473.png',
    tarefas: 4
  },
  {
    name: 'Vinicius A. Ribeiro',
    avatar: 'https://image.flaticon.com/icons/png/512/306/306473.png',
    tarefas: 3
  },
]

const veiculos = [
  {
    name: 'FP5T71Q',
    avatar: 'https://www.firstcarrental.co.za/images/group-b-suzuki-swift-june2019.jpg',
    subtitle: 'Ford Ka - 2020'
  },
  {
    name: 'FP5TZ1Q',
    avatar: 'https://i2.wp.com/blog.twwhiteandsons.co.uk/wp-content/uploads/2014/08/siwft-sport.png?fit=447%2C237&ssl=1',
    subtitle: 'Kwid - 2019'
  },
  {
    name: 'BEE4R22',
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR1VdYdn_6WEgG-g405G05ScMlCHysgwIjtwN8RGQu-QqSuxYPd&usqp=CAU',
    subtitle: 'Mobi - 2020'
  },
]

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
            <Text style={styles.numeros} onPress={() => navigate('Serviços')}> 10 </Text>
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
              technical.map((u, i) => {
                return (
                  <ListItem
                    button onPress={() => navigate('Informações do Técnico')}
                    key={i}
                    roundAvatar
                    title={u.name}
                    leftAvatar={{ source: { uri: u.avatar }}} 
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
              veiculos.map((u, i) => {
                return (
                  <ListItem
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
