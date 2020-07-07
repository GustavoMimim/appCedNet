import React from 'react';
import { SafeAreaView, View, StyleSheet, StatusBar, Alert, FlatList } from 'react-native';
import { Text, Card, ListItem } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { SwipeListView } from 'react-native-swipe-list-view';


const technical = [
  {
    name: 'Gustavo B. Mimim',
    primeironome: 'Gustavo',
    avatar: 'https://image.flaticon.com/icons/png/512/306/306473.png',
    tarefas: 3
  },
  {
    name: 'Renan L. R. da Silva',
    primeironome: 'Renan',
    avatar: 'https://image.flaticon.com/icons/png/512/306/306473.png',
    tarefas: 2
  },
  {
    name: 'Vinicius A. Ribeiro',
    primeironome: 'Vinicius',
    avatar: 'https://image.flaticon.com/icons/png/512/306/306473.png',
    tarefas: 2
  },
  {
    name: 'Adriano P. Souza',
    primeironome: 'Adriano',
    avatar: 'https://image.flaticon.com/icons/png/512/306/306473.png',
    tarefas: 1
  },
  {
    name: 'Márcio F. Freitas',
    primeironome: 'Márcio',
    avatar: 'https://image.flaticon.com/icons/png/512/306/306473.png',
    tarefas: 1
  },
]

const technicalIndisponiveis = [
  {
    name: 'Aline O. Pereira',
    primeironome: 'Aline',
    avatar: 'https://img.icons8.com/cotton/2x/cancel-2--v2.png',
    tarefas: 0
  },
  {
    name: 'Guilherme P. Cardoso',
    primeironome: 'Guilherme',
    avatar: 'https://img.icons8.com/cotton/2x/cancel-2--v2.png',
    tarefas: 0
  },
  {
    name: 'João A. Gomes',
    primeironome: 'João',
    avatar: 'https://img.icons8.com/cotton/2x/cancel-2--v2.png',
    tarefas: 0
  },
  {
    name: 'Lucas B. Moura',
    primeironome: 'Lucas',
    avatar: 'https://img.icons8.com/cotton/2x/cancel-2--v2.png',
    tarefas: 0
  },
  {
    name: 'Thainá T. Romero',
    primeironome: 'Thainá',
    avatar: 'https://img.icons8.com/cotton/2x/cancel-2--v2.png',
    tarefas: 0
  },
]

export default function Tecnicos() {


  return (
    <View>

      <StatusBar barStyle="dark-content" backgroundColor='white' translucent />

      <ScrollView>


        <View>
          <Card
            title='Técnicos disponíveis'
          >
            {
              technical.map((u, i) => {
                return (
                  <ListItem
                    button onPress={() => { Alert.alert(u.primeironome + ' possui ' + u.tarefas + ' tarefa(s)') }}
                    key={i}
                    roundAvatar
                    title={u.name}
                    leftAvatar={{ source: { uri: u.avatar } }}
                    containerStyle={{ height: 60 }}
                    bottomDivider
                    chevron={{ color: 'gray' }}
                    badge={{ value: u.tarefas, textStyle: { color: 'white' }, containerStyle: { marginTop: 0 } }}
                  />
                );
              })
            }
          </Card>

          <Card
            title='Técnicos indisponíveis'
            titleStyle={{ color: 'gray' }}
            containerStyle={{ backgroundColor: "#eee" }}
          >
            {
              technicalIndisponiveis.map((u, i) => {
                return (
                  <ListItem
                    button onPress={() => { Alert.alert(u.primeironome + ' está indisponível no momento.') }}
                    key={i}
                    roundAvatar
                    title={u.name}
                    titleStyle={{ color: '#aaa' }}
                    leftAvatar={{ source: { uri: u.avatar } }}
                    containerStyle={{ height: 60 }}
                    bottomDivider
                    chevron
                    containerStyle={{ backgroundColor: "#eee" }}
                  />
                );
              })
            }
          </Card>
        </View>

      </ScrollView>
    </View>


  );
}