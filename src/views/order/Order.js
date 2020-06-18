import React from 'react';
import { SafeAreaView, View, StyleSheet, StatusBar, FlatList } from 'react-native';
import { Text } from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const data = [
    {
        id: '0',
        name: 'Relâmpago McQueen',
        city: 'Ourinhos',
        plan: 'Fibra 40mb Res.'
    },
    {
        id: '1',
        name: 'Vitória Cunha Cavalcanti',
        city: 'Ipaussu',
        plan: 'Fibra Colaboradores 20mb'
    },
    {
        id: '2',
        name: 'Davi Fernandes Almeida',
        city: 'Chavantes',
        plan: 'Fibra 200mb Comercial'
    },
    {
        id: '3',
        name: 'Lara Gomes Silva',
        city: 'Ourinhos',
        plan: 'Radio 5mb Res.'
    },
    {
        id: '4',
        name: 'Yasmin Araujo Pereira',
        city: 'Ourinhos',
        plan: 'Fibra 40mb Res.'
    },
    {
        id: '5',
        name: 'Marisa Ribeiro Rodrigues',
        city: 'Ourinhos',
        plan: 'Fibra 40mb Res.'
    },
    {
        id: '6',
        name: 'José Sousa Melo',
        city: 'Ourinhos',
        plan: 'Fibra 40mb Res.'
    },
    {
        id: '7',
        name: 'Gustavo Rodrigues Cardoso',
        city: 'Chavantes',
        plan: 'Fibra Colaboradores 20mb'
    },
    {
        id: '8',
        name: 'Arthur Castro Ferreira',
        city: 'Ourinhos',
        plan: 'Fibra 40mb Res.'
    },
    {
        id: '9 ',
        name: 'André Dias Souza',
        city: 'Ourinhos',
        plan: 'Fibra 200mb Res.'
    }
];

export default function Map () {
    return (
        <View style={styles.container}>
            <StatusBar hidden={false} barStyle="dark-content" backgroundColor="white" translucent />

            <FlatList
                data={data}
                keyExtractor={item => item.id}
                renderItem={({ item }) => {
                    return (
                        <View>
                            <View style={styles.item}>
                                <Text h5 style={styles.text}>{item.plan}</Text>
                                <Text h5 style={styles.text}>Problemas de conexão</Text>
                                <Text h4 style={styles.text, { padding: 0 }}>{item.name}</Text>
                                <Text h4 style={styles.text}>{item.city}</Text>
                            </View>
                        </View>
                    );
                }}
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
        borderRadius: 16,
        margin: 10,
        height: 130,
        backgroundColor: 'white',
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        color: "#333333",
    }
})