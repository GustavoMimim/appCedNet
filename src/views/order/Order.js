import React from 'react';
import { SafeAreaView, View, StyleSheet, StatusBar, FlatList } from 'react-native';
import { Text } from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { SwipeListView } from 'react-native-swipe-list-view';
import Icon from 'react-native-vector-icons/FontAwesome';

const data = [
    {
        id: '0',
        name: 'Relâmpago McQueen',
        city: 'Ourinhos',
        plan: 'Fibra 40mb Res.',
        reason: 'Problemas de conexão',
        distance: 'a 7 km de distância'
    },
    {
        id: '1',
        name: 'Vitória Cunha Cavalcanti',
        city: 'Ipaussu',
        plan: 'Fibra Colaboradores 20mb',
        reason: 'Problemas de conexão',
        distance: 'a 2 km de distância'
    },
    {
        id: '2',
        name: 'Davi Fernandes Almeida',
        city: 'Chavantes',
        plan: 'Fibra 200mb Comercial',
        reason: 'Troca de endereço',
        distance: 'a 7 km de distância'
    },
    {
        id: '3',
        name: 'Lara Gomes Silva',
        city: 'Ourinhos',
        plan: 'Radio 5mb Res.',
        reason: 'Problemas de conexão',
        distance: 'a 500 m de distância'
    },
    {
        id: '4',
        name: 'Yasmin Araujo Pereira',
        city: 'Ourinhos',
        plan: 'Fibra 40mb Res.',
        reason: 'Troca de endereço',
        distance: 'a 2 km de distância'
    },
    {
        id: '5',
        name: 'Marisa Ribeiro Rodrigues',
        city: 'Ourinhos',
        plan: 'Fibra 40mb Res.',
        reason: 'Cancelamento de plano',
        distance: 'a 2 km de distância'
    },
    {
        id: '6',
        name: 'José Sousa Melo',
        city: 'Ourinhos',
        plan: 'Fibra 40mb Res.',
        reason: 'Problemas de conexão',
        distance: 'a 3 km de distância'
    },
    {
        id: '7',
        name: 'Gustavo Rodrigues Cardoso',
        city: 'Chavantes',
        plan: 'Fibra Colaboradores 20mb',
        reason: 'Problemas de conexão',
        distance: 'a 2 km de distância'
    },
    {
        id: '8',
        name: 'Arthur Castro Ferreira',
        city: 'Ourinhos',
        plan: 'Fibra 40mb Res.',
        reason: 'Cancelamento de plano',
        distance: 'a 876 m de distância'
    },
    {
        id: '9 ',
        name: 'André Dias Souza',
        city: 'Ourinhos',
        plan: 'Fibra 200mb Res.',
        reason: 'Problemas de conexão',
        distance: 'a 1 km de distância'
    }
];

export default function Map () {
    return (
        <View style={styles.container}>
            <StatusBar hidden={false} barStyle="dark-content" backgroundColor="white" translucent />

            <SwipeListView
                data={data}
                renderItem={(data, rowMap) => (
                    <View style={{ flex: 1, margin: 10, alignItems: 'stretch' }}>
                        <View style={styles.item}>
                            <Text h5 style={styles.text}>{data.item.plan + ' - ' + data.item.reason}</Text>
                            <Text h4 style={styles.text}>{data.item.name}</Text>
                            <View  style={{ flexDirection: 'row' }}>
                                <Text h5 style={styles.text}>{data.item.city + ' '}</Text>
                                <Icon name='map-marker' size={16} color='#004B8D' />
                                <Text h5 style={styles.text}>{' ' + data.item.distance}</Text>
                            </View>
                        </View>
                    </View>
                )}
                renderHiddenItem={(data, rowMap) => (
                    <View style={styles.rowBack}>
                    </View>
                )}
                leftOpenValue={75}
                rightOpenValue={-75}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30
    },
    item: {
        padding: 10,
        height: 130,
        backgroundColor: 'white',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        borderLeftColor: '#004B8D',
        borderLeftWidth: 5
    },
    text: {
        color: "#333333",
    }
})