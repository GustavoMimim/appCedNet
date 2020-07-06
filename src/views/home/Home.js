import React from 'react';
import { View, StatusBar, Alert, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Text, Card, ListItem } from 'react-native-elements';

const technical = [
  {
    name: 'Gustavo B. Mimim',
    avatar: 'https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png',
    tarefas: 2
  },
  {
    name: 'Renan L. R. da Silva',
    avatar: 'https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png',
    tarefas: 1
  },
  {
    name: 'Vinicius A. Ribeiro',
    avatar: 'https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png',
    tarefas: 4
  },
]

const vehicles = [
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

export default function Home ({ navigation: { navigate } }) {

  return (
    <View>

      <StatusBar barStyle="dark-content" backgroundColor='white' translucent />

      <ScrollView>

        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
          <Card
            title='Ordens de serviço'
            containerStyle={{ width: 150 }}
          >
            <Text>15</Text>
          </Card>
          <Card
            title='Protocolos'
            containerStyle={{ width: 150 }}
          >
            <Text>50</Text>
          </Card>
        </View>
        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
          <Card
            title='Ordens já atendidas'
            containerStyle={{ width: 150 }}
          >
            <Text>1</Text>
          </Card>
          <Card
            title='Novos clientes'
            containerStyle={{ width: 150 }}
          >
            <Text>15</Text>
          </Card>
        </View >
        <View>
          <Card
            title='Técnicos em plantão disponíveis'
          >
            {
              technical.map((u, i) => {
                return (
                  <ListItem
                    button onPress={() => {Alert.alert(u.name + ' possui ' + u.tarefas + ' tarefa(s)')}}
                    key={i}
                    roundAvatar
                    title={u.name}
                    leftAvatar={{ source: { uri: u.avatar } }}
                    containerStyle={{ height: 60 }}
                    bottomDivider
                    chevron
                    badge={{ value: u.tarefas, textStyle: { color: 'orange' }, containerStyle: { marginTop: 0 } }}
                  />
                );
              })
            }
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingTop: 20 }}>
              <Text style={{ alignSelf: 'flex-start', color: '#004B8D' }}>Gerenciar</Text>
              <Text style={{ alignSelf: 'flex-end', color: 'gray' }} onPress={() => navigate('Tecnicos')}>Mais</Text>
            </View>
            
            
          </Card>
        </View>

        <View style={{ paddingBottom: 15 }}>
          <Card
            title='Veículos disponíveis'
          >
            {
              vehicles.map((u, i) => {
                return (
                  <ListItem
                    key={i}
                    roundAvatar
                    title={u.name}
                    subtitle={u.subtitle}
                    leftAvatar={{ source: { uri: u.avatar } }}
                    containerStyle={{ height: 60 }}
                    bottomDivider
                    chevron
                  />
                );
              })
            }
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingTop: 20 }}>
              <Text style={{ alignSelf: 'flex-start', color: '#004B8D' }} onPress={() => {Alert.alert('teste oi')}}>Gerenciar</Text>
              <Text style={{ alignSelf: 'flex-end', color: 'gray' }}>Mais</Text>
            </View>
          </Card>
        </View>

      </ScrollView>
    </View>


  );
}
