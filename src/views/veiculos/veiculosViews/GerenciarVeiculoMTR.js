import React from 'react';
import { SafeAreaView, View, StyleSheet, StatusBar, Alert, FlatList, Image, TextInput } from 'react-native';
import { Text, Card, ListItem, Button, TouchableOpacity } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { SwipeListView } from 'react-native-swipe-list-view';



export default function Veiculo() {


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
                    <Text style={styles.prefix}>Placa:</Text>
                    <Text style={styles.content}>MTR-4318</Text>
                </View>
                <View
                    style={styles.linha}
                />
                <View style={{ flexDirection: 'column', marginTop: 8 }}>
                    <Text style={styles.prefix}>Fabricante/Modelo:</Text>
                    <Text style={styles.content}>Fiat Mobi</Text>
                </View>
                <View
                    style={styles.linha}
                />
                <View style={{ flexDirection: 'column', marginTop: 8 }}>
                    <Text style={styles.prefix}>Ano:</Text>
                    <Text style={styles.content}>2020</Text>
                </View>
                <View
                    style={styles.linha}
                />
                <View style={{ flexDirection: 'column', marginTop: 8 }}>
                    <Text style={styles.prefix}>Cor: </Text>
                    <Text style={styles.content}>Cinza</Text>
                </View>
                <View
                    style={styles.linha}
                />

                <ScrollView>
                    <View style={{ flexDirection: 'row', marginTop: 0 }}>
                        <Text style={{ marginTop: 40, marginBottom: 4, marginLeft: 0, alignSelf: 'flex-start', fontWeight: 'bold', color: '#004B8D', fontSize: 18 }}>Status: </Text>
                        <Text style={{ marginTop: 40, marginBottom: 4, marginLeft: 210, alignSelf: 'flex-end', fontWeight: 'bold', color: '#004B8D', fontSize: 20, }}>Em uso</Text>
                    </View>
                    <View style={{ flexDirection: 'column', marginTop: 0 }}>
                        <Text style={styles.prefix}>Técnico utilizando:</Text>
                        <Text style={styles.content}>Gustavo B. Mimim</Text>
                    </View>
                    <View
                        style={styles.linha}
                    />
                    <Button title='Editar informações'
                        buttonStyle={{ marginTop: 30, width: 160, alignSelf: 'flex-end', backgroundColor: '#004B8D' }} 
                        onPress={() => Alert.alert('Olá')} />
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
    },

});
