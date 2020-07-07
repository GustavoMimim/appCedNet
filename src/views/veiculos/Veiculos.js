import React from 'react';
import { SafeAreaView, View, StyleSheet, StatusBar, Alert, FlatList } from 'react-native';
import { Text, Card, ListItem } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { SwipeListView } from 'react-native-swipe-list-view';
import dadosVeiculos from '../../banco/bdVeiculos'; /* Importação do banco bdVeiculos */

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
                dadosVeiculos.filter(a => (a.disponivel == true)).map((u, i) => {
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
                dadosVeiculos.filter(a => (a.disponivel == false)).map((u, i) => {
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