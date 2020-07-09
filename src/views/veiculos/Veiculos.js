import React from 'react';
import { SafeAreaView, View, StyleSheet, StatusBar, Alert, FlatList } from 'react-native';
import { Text, Card, ListItem } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { SwipeListView } from 'react-native-swipe-list-view';
import dadosVeiculos from '../../banco/bdVeiculos'; /* Importação do banco bdVeiculos */

export default function Veiculos({ navigation: { navigate } }) {


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
                    button onPress={() => Alert.alert(
                      '',
                      'Veículo está disponível.',
                      [
                        { text: 'Visualizar informações', onPress: () => navigate('Gerenciar Veículo', { index: u.id }) },
                        { text: 'OK', onPress: () => console.warn('OK'), style: 'cancel' },
                      ]
                    )}
                    key={i}
                    roundAvatar
                    title={u.name}
                    subtitle={u.fabricante + ' ' + u.modelo + ' - ' + u.ano}
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
            titleStyle={{ color: 'gray' }}
            containerStyle={{ backgroundColor: "#eee" }}
          >
            {
              dadosVeiculos.filter(a => (a.disponivel == false)).map((u, i) => {
                return (
                  <ListItem
                    button onPress={() => Alert.alert(
                      '',
                      'Veículo está indisponível no momento.',
                      [
                        { text: 'Visualizar informações', onPress: () => navigate('Gerenciar Veículo', { index: u.id }) },
                        { text: 'OK', onPress: () => console.warn('OK'), style: 'cancel' },
                      ]
                    )}
                    key={i}
                    roundAvatar
                    title={u.name}
                    titleStyle={{ color: '#aaa' }}
                    subtitle={u.fabricante + ' ' + u.modelo + ' - ' + u.ano}
                    subtitleStyle={{ color: '#ccc' }}
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