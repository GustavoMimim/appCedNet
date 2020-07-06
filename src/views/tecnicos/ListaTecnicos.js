import React from 'react';
import { SafeAreaView, View, StyleSheet, StatusBar, Alert, FlatList } from 'react-native';
import { Text, Card, ListItem } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { SwipeListView } from 'react-native-swipe-list-view';

const tecnicos = [
    {
        name: 'Adriano Pereira Souza',
        avatar: 'https://image.flaticon.com/icons/png/512/306/306473.png',
        subtitle: 'Disponível'
    },
    {
        name: 'Aline Oliveira Pereira',
        avatar: 'https://image.flaticon.com/icons/png/512/306/306473.png',
        subtitle: 'Indisponível'
    },
    {
        name: 'Guilherme Pessoa Cardoso',
        avatar: 'https://image.flaticon.com/icons/png/512/306/306473.png',
        subtitle: 'Indisponível'
    },
    {
        name: 'Gustavo Bergamo Mimim',
        avatar: 'https://image.flaticon.com/icons/png/512/306/306473.png',
        subtitle: 'Disponível'
    },
    {
        name: 'João Armando Gomes',
        avatar: 'https://image.flaticon.com/icons/png/512/306/306473.png',
        subtitle: 'Indisponível'
    },
    {
        name: 'Lucas Beto Moura',
        avatar: 'https://image.flaticon.com/icons/png/512/306/306473.png',
        subtitle: 'Indisponível'
    },
    {
        name: 'Márcio Fernando Freitas',
        avatar: 'https://image.flaticon.com/icons/png/512/306/306473.png',
        subtitle: 'Disponível'
    },
    {
        name: 'Renan Leonardo Ramos da Silva',
        avatar: 'https://image.flaticon.com/icons/png/512/306/306473.png',
        subtitle: 'Disponível'
    },
    {
        name: 'Thainá Toga Romero',
        avatar: 'https://image.flaticon.com/icons/png/512/306/306473.png',
        subtitle: 'Indisponível'
    },
    {
        name: 'Vinicius Andrade Ribeiro',
        avatar: 'https://image.flaticon.com/icons/png/512/306/306473.png',
        subtitle: 'Disponível'
    }
]

export default function Tecnicos() {


    return (
        <View>


            <ScrollView>


                <View style={styles.container}>
                    {
                        tecnicos.map((u, i) => {
                            return (
                                <ListItem
                                    button onPress={() => { Alert.alert(u.name) }}
                                    key={i}
                                    roundAvatar
                                    title={u.name}
                                    subtitle={u.subtitle}
                                    subtitleStyle={{ fontSize: 10 }}
                                    leftAvatar={{ source: { uri: u.avatar } }}
                                    containerStyle={{ height: 60 }}
                                    bottomDivider
                                    chevron={{ color: 'black' }}
                                    linearGradientProps={{ /* efeito de cinza clareando de cima para baixo */
                                        colors: ['#fff', '#ddd'],
                                        start: [0, 1],
                                        end: [0, -1],
                                    }}
                                />
                            );
                        })
                    }
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        padding: 0,
        margin: 0,
    }
});