import React from 'react';
import { SafeAreaView, View, StyleSheet, StatusBar, Alert, FlatList } from 'react-native';
import { Text, Card, ListItem } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { SwipeListView } from 'react-native-swipe-list-view';
import dadosTecnicos from '../../banco/bdTecnicos'; /* Importação do banco bdTecnicos */

export default function Tecnicos({ navigation: { navigate } }) {


    return (
        <View>


            <ScrollView>


                <View style={styles.container}>
                    {
                        dadosTecnicos.map((u, i) => {
                            return (
                                <ListItem
                                    button onPress={() => navigate('Informações - ' + u.primeironome)}
                                    key={i}
                                    roundAvatar
                                    title={u.name}
                                    subtitle={u.subtitle}
                                    subtitleStyle={{ fontSize: 10 }}
                                    leftAvatar={{ source: { uri: 'https://image.flaticon.com/icons/png/512/306/306473.png' } }}
                                    containerStyle={{ height: 60 }}
                                    bottomDivider
                                    chevron={{ color: 'black' }}
                                    linearGradientProps={{ /* efeito de cinza clareando de cima para baixo */
                                        colors: ['#fff', '#eef'],
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