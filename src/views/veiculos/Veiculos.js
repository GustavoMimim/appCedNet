import React from 'react';
import { SafeAreaView, View, StyleSheet, StatusBar, Alert, FlatList } from 'react-native';
import { Text, Card, ListItem } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { SwipeListView } from 'react-native-swipe-list-view';

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

  const veiculosIndisponiveis = [
    {
      name: 'BEE4R22',
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR1VdYdn_6WEgG-g405G05ScMlCHysgwIjtwN8RGQu-QqSuxYPd&usqp=CAU',
    subtitle: 'Mobi - 2020'
    }
  ]

  export default function Tecnicos () {

  
    return (
      <View>
  
        <StatusBar barStyle="dark-content" backgroundColor='white' translucent />
  
        <ScrollView>
  
          
          <View>
            <Card
              title='Veículos disponíveis'
            >
              {
                veiculos.map((u, i) => {
                  return (
                    <ListItem
                      button onPress={() => {Alert.alert(u.name + ' possui ' + u.tarefas + ' tarefa(s)')}}
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
            </Card>

            <Card
              title='Veículos indisponíveis'
              titleStyle={{color: 'gray'}}
              containerStyle={{backgroundColor: "#eee"}}
            >
              {
                veiculosIndisponiveis.map((u, i) => {
                  return (
                    <ListItem
                      button onPress={() => {Alert.alert(u.name + ' não possui possui tarefas no momento.')}}
                      key={i}
                      roundAvatar
                      title={u.name}
                      titleStyle={{color: '#aaa'}}
                      subtitle={u.subtitle}
                      subtitleStyle={{color: '#ccc'}}
                      leftAvatar={{ source: { uri: u.avatar } }}
                      containerStyle={{ height: 60 }}
                      bottomDivider
                      chevron
                      containerStyle={{backgroundColor: "#eee"}}
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