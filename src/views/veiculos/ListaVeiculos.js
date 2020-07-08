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


            <ScrollView>


                <View style={styles.container}>
                    {
                        
                        dadosVeiculos.map((u, i) => {
                            return (
                                <ListItem
                                    button onPress={() => navigate('Gerenciar Veículo', { index: u.id })}
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