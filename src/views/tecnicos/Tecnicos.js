import React from 'react';
import { SafeAreaView, View, StyleSheet, StatusBar, Alert, FlatList } from 'react-native';
import { Text, Card, ListItem } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { SwipeListView } from 'react-native-swipe-list-view';
import dadosTecnicos from '../../banco/bdTecnicos'; /* Importação do banco bdTecnicos */


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
              dadosTecnicos.filter(a => (a.subtitle == 'Disponível')).map((u, i) => {
                return (
                  <ListItem
                    button onPress={() => { Alert.alert(u.primeironome + ' possui ' + u.tarefas + ' tarefa(s)') }}
                    key={i}
                    roundAvatar
                    title={u.name}
                    leftAvatar={{ source: { uri: 'https://image.flaticon.com/icons/png/512/306/306473.png' } }}
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
              dadosTecnicos.filter(a => (a.subtitle == 'Indisponível')).map((u, i) => {
                return (
                  <ListItem
                    button onPress={() => { Alert.alert(u.primeironome + ' está indisponível no momento.') }}
                    key={i}
                    roundAvatar
                    title={u.name}
                    titleStyle={{ color: '#aaa' }}
                    leftAvatar={{ source: { uri: 'https://png.pngtree.com/png-vector/20190501/ourlarge/pngtree-vector-forbidden-icon-png-image_1019667.jpg' } }}
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