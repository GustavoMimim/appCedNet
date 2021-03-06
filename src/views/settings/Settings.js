import React from 'react';
import { Text, View, StatusBar, StyleSheet, Alert, Image, ScrollView  } from 'react-native';
import { Button } from 'react-native-elements';

export default function Home () {
  
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
                    <Text style={styles.content}>Vinicius Andrade Ribeiro</Text>
                </View>
                <View
                    style={styles.linha}
                />
                <View style={{ flexDirection: 'column', marginTop: 8 }}>
                    <Text style={styles.prefix}>Cargo:</Text>
                    <Text style={styles.content}>CEO</Text>
                </View>
                <View
                    style={styles.linha}
                />
                <View style={{ flexDirection: 'column', marginTop: 8 }}>
                    <Text style={styles.prefix}>E-mail:</Text>
                    <Text style={styles.content}>ceo@cednet.com.br</Text>
                </View>
                <View
                    style={styles.linha}
                />
                <View style={{ flexDirection: 'column', marginTop: 8 }}>
                    <Text style={styles.prefix}>Telefone: </Text>
                    <Text style={styles.content}>(14) 3322-7777</Text>
                </View>
                <View
                    style={styles.linha}
                />
                <View style={{ flexDirection: 'column', marginTop: 8 }}>
                    <Text style={styles.prefix}>Celular: </Text>
                    <Text style={styles.content}>(14) 97566-6666</Text>
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
        width: 335
    },

});