import React from 'react';
import { SafeAreaView, View, StyleSheet, StatusBar, Alert, FlatList, Image, TextInput } from 'react-native';
import { Text, Card, ListItem, Button, TouchableOpacity } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { SwipeListView } from 'react-native-swipe-list-view';
import {getTecnicoByIndex} from './../../../banco/bdTecnicos'



export default function Tecnicos({route}) {

    const { index } = route.params;
    const tecnico = getTecnicoByIndex(index);
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

                <Text style={styles.prefix}>Nome:</Text>
                <View style={styles.container}>
                    
                                <Text style={styles.content}>{tecnico.name}</Text>
                            
                </View>
                <Image style={{ marginBottom: 20 }} />
                <View
                    style={styles.linha}
                />

                <Text style={styles.prefix}>Cargo:</Text>
                <View style={styles.container}>
                    
                                <Text style={styles.content}>{tecnico.cargo}</Text>
                            
                </View>
                <Image style={{ marginBottom: 20 }} />
                <View
                    style={styles.linha}
                />

                <Text style={styles.prefix}>E-mail:</Text>
                <View style={styles.container}>
                    
                                <Text style={styles.content}>{tecnico.email}</Text>
                            
                </View>
                <Image style={{ marginBottom: 20 }} />
                <View
                    style={styles.linha}
                />

                <Text style={styles.prefix}>Telefone:</Text>
                <View style={styles.container}>
                    
                                <Text style={styles.content}>{tecnico.telefone}</Text>
                            
                </View>
                <Image style={{ marginBottom: 20 }} />
                <View
                    style={styles.linha}
                />

                <Text style={styles.prefix}>Celular:</Text>
                <View style={styles.container}>
                    
                                <Text style={styles.content}>{tecnico.celular}</Text>
                            
                </View>
                <Image style={{ marginBottom: 20 }} />
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
                        <Text style={styles.content}>TYA-8991</Text>
                    </View>
                    <View
                        style={styles.linha}
                    />
                    <View style={{ flexDirection: 'column', marginTop: 0 }}>
                        <Text style={styles.prefix}>Serviço:</Text>
                        <Text style={styles.content}>Instalação</Text>
                    </View>
                    <View
                        style={styles.linha}
                    />
                    <Button title='Editar perfil'
                        buttonStyle={{ marginTop: 30, width: 150, alignSelf: 'flex-end', backgroundColor: '#004B8D' }}
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
        width: 335,
        marginBottom: 10
    },

});