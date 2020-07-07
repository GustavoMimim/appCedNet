import React from 'react';
import { SafeAreaView, View, StyleSheet, StatusBar, Alert, FlatList } from 'react-native';
import { Text, Card, ListItem } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { SwipeListView } from 'react-native-swipe-list-view';

const veiculos = [
    {
        name: 'CDU-2532',
        avatar: 'https://www.firstcarrental.co.za/images/group-b-suzuki-swift-june2019.jpg',
        subtitle: 'Ford Ka - 2020'
    },
    {
        name: 'TYA-8991',
        avatar: 'https://i2.wp.com/blog.twwhiteandsons.co.uk/wp-content/uploads/2014/08/siwft-sport.png?fit=447%2C237&ssl=1',
        subtitle: 'Kwid - 2019'
    },
    {
        name: 'MTR-4318',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR1VdYdn_6WEgG-g405G05ScMlCHysgwIjtwN8RGQu-QqSuxYPd&usqp=CAU',
        subtitle: 'Mobi - 2020'
    },
    {
        name: 'QMM-2353',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR1VdYdn_6WEgG-g405G05ScMlCHysgwIjtwN8RGQu-QqSuxYPd&usqp=CAU',
        subtitle: 'Mobi - 2020'
    }
]

export default function Veiculos({ navigation: { navigate } }) {


    return (
        <View>


            <ScrollView>


                <View style={styles.container}>
                    {
                        veiculos.map((u, i) => {
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