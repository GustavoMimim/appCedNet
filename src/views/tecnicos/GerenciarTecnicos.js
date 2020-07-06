import React from 'react';
import { SafeAreaView, View, StyleSheet, StatusBar, Alert, FlatList, Image, TextInput } from 'react-native';
import { Text, Card, ListItem } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { SwipeListView } from 'react-native-swipe-list-view';

const technical = [
    {
        name: 'Gustavo B. Mimim',
        avatar: 'https://image.flaticon.com/icons/png/512/306/306473.png',
        tarefas: 6
    },
    {
        name: 'Renan L. R. da Silva',
        avatar: 'https://image.flaticon.com/icons/png/512/306/306473.png',
        tarefas: 4
    },
    {
        name: 'Vinicius A. Ribeiro',
        avatar: 'https://image.flaticon.com/icons/png/512/306/306473.png',
        tarefas: 3
    },
    {
        name: 'Adriano P. Souza',
        avatar: 'https://image.flaticon.com/icons/png/512/306/306473.png',
        tarefas: 1
    },
    {
        name: 'Márcio F. Freitas',
        avatar: 'https://image.flaticon.com/icons/png/512/306/306473.png',
        tarefas: 1
    },
]

const technicalIndisponiveis = [
    {
        name: 'Lucas B. Moura',
        avatar: 'https://cdn.onlinewebfonts.com/svg/img_519084.png',
        tarefas: 0
    },
    {
        name: 'Aline O. Pereira',
        avatar: 'https://cdn.onlinewebfonts.com/svg/img_519084.png',
        tarefas: 4
    },
    {
        name: 'João A. Gomes',
        avatar: 'https://cdn.onlinewebfonts.com/svg/img_519084.png',
        tarefas: 3
    },
    {
        name: 'Guilherme P. Cardoso',
        avatar: 'https://cdn.onlinewebfonts.com/svg/img_519084.png',
        tarefas: 1
    },
    {
        name: 'Thainá T. Romero',
        avatar: 'https://cdn.onlinewebfonts.com/svg/img_519084.png',
        tarefas: 1
    },
]

export default function Tecnicos() {


    return (
        <View style={styles.container}>

            <View style={{
                marginHorizontal: 0,
                marginTop: 0,
                paddingTop: 10,
                paddingBottom: 30,
                shadowColor: 'gray',
                shadowOpacity: 0.5,
                shadowOffset: {
                    height: 3,
                    width: 3
                },
                shadowRadius: 4,
                elevation: -4,
                backgroundColor: 'white',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                paddingLeft: 25,
                borderRadius: 8
            }}>
                <Image style={{ marginBottom: 10 }} />
                
                <View style={{ flexDirection: 'column', marginTop: 0 }}>
                    <Text style={styles.prefix}>Nome:</Text>
                    <TextInput style={styles.content}>Gustavo Bergamo Mimim</TextInput>
                </View>
                <View
                    style={styles.linha}
                />
                <View style={{ flexDirection: 'column', marginTop: 8 }}>
                    <Text style={styles.prefix}>Cargo:</Text>
                    <Text style={styles.content}>Programador Sênior</Text>
                </View>
                <View
                    style={styles.linha}
                />
                <View style={{ flexDirection: 'column', marginTop: 8 }}>
                    <Text style={styles.prefix}>E-mail:</Text>
                    <Text style={styles.content}>guguinho@gmail.com</Text>
                </View>
                <View
                    style={styles.linha}
                />
                <View style={{ flexDirection: 'column', marginTop: 8 }}>
                    <Text style={styles.prefix}>Telefone: </Text>
                    <Text style={styles.content}>(14) 3342-3555</Text>
                </View>
                <View
                    style={styles.linha}
                />
                <View style={{ flexDirection: 'column', marginTop: 8 }}>
                    <Text style={styles.prefix}>Celular: </Text>
                    <Text style={styles.content}>(14) 99812-2665</Text>
                </View>
                <View
                    style={styles.linha}
                />

                <ScrollView>
                    <View style={{ flexDirection: 'row', marginTop: 0 }}>
                        <Text style={{ marginTop: 40, marginBottom: 4, marginLeft: 0, alignSelf: 'flex-start', fontWeight: 'bold', color: '#004B8D', fontSize: 18 }}>Status: </Text>
                        <Text style={{ marginTop: 40, marginBottom: 4, marginLeft: 180, alignSelf: 'flex-end', fontWeight: 'bold', color: 'green', fontSize: 20 }}>Disponível</Text>
                    </View>
                    <View style={{ flexDirection: 'column', marginTop: 0 }}>
                        <Text style={styles.prefix}>Veículo:</Text>
                        <Text style={styles.content}>BEE4R22</Text>
                    </View>
                    <View
                        style={styles.linha}
                    />
                    <View style={{ flexDirection: 'column', marginTop: 0 }}>
                        <Text style={styles.prefix}>Serviço:</Text>
                        <Text style={styles.content}>Manutenção</Text>
                    </View>
                    <View
                        style={styles.linha}
                    />
                </ScrollView>

            </View>


        </View>




    );


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingTop: 0,
        backgroundColor: 'white'
    },
    prefix: {
        marginTop: 15,
        fontSize: 12,
        color: 'gray'
    },
    content: {
        fontSize: 18,
        color: 'black'
    },
    linha: {
        backgroundColor: '#A2A2A2',
        height: 1.4,
        width: 335
    }

});
