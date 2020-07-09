import React, { useState } from 'react';
import { View, StyleSheet, Alert, Modal, TextInput, TouchableOpacity } from 'react-native';
import { Text, Card, ListItem, Button } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import dadosTecnicos from '../../banco/bdTecnicos'; /* Importação do banco bdTecnicos */
import { addNewTecnico, getTecnico } from '../../banco/bdTecnicos';

export default function Tecnicos({ navigation: { navigate } }) {

    const [newTecnicoView, setNewTecnicoView] = useState(false);

    const [tecnicos, setTecnicos] = useState(getTecnico());
    const newTecnico = {};


    return (
        <View>


            <ScrollView style={{ backgroundColor: '#FFFFFF' }}>

                <Button title='Inserir Técnico'
                    buttonStyle={{ marginBottom: 30, marginTop: 30, marginRight: 30, width: 150, alignSelf: 'flex-end', backgroundColor: '#004B8D' }}
                    onPress={() => {
                        setNewTecnicoView(true);
                    }} />
                <View style={styles.container}>
                    {
                        dadosTecnicos.filter(a => ((a.excluido != true))).map((u, i) => {
                            return (
                                <ListItem
                                    button onPress={() => navigate('Gerenciar Técnico', { index: u.id })}
                                    key={i}
                                    roundAvatar
                                    title={u.name}
                                    subtitle={u.subtitle}
                                    subtitleStyle={{ fontSize: 10 }}
                                    leftAvatar={{ source: { uri: 'https://image.flaticon.com/icons/png/512/306/306473.png' } }}
                                    containerStyle={{ height: 60 }}
                                    bottomDivider
                                    chevron={{ color: 'black' }}
                                    
                                />
                            );
                        })
                    }
                </View>
            </ScrollView>
            { /* ****************************************************************************** */}
            {/* View de novo Técnico */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={newTecnicoView}
            >
                <View>
                    <View style={styles.modalView}>
                        <Text h4 style={styles.modalText}>Inserir novo Técnico</Text>

                        <TextInput
                            style={styles.input}
                            onChangeText={text => Object.assign(newTecnico, { name: text })}
                            placeholder='Nome'
                        />

                        <TextInput
                            style={styles.input}
                            onChangeText={text => Object.assign(newTecnico, { email: text })}
                            placeholder='E-mail'
                        />

                        <TextInput
                            style={styles.input}
                            onChangeText={text => Object.assign(newTecnico, { telefone: text })}
                            placeholder='Telefone'
                        />

                        <TextInput
                            style={styles.input}
                            onChangeText={text => Object.assign(newTecnico, { celular: text })}
                            placeholder='Celular'
                        />

                        <TextInput
                            style={styles.input}
                            onChangeText={text => Object.assign(newTecnico, { cargo: text })}
                            placeholder='Cargo'
                        />



                        <View style={{ flexDirection: 'column', padding: 20 }}>

                            <TouchableOpacity
                                style={{ ...styles.openButton, backgroundColor: "#004B8D" }}
                                onPress={() => {
                                    addNewTecnico(newTecnico);
                                    setNewTecnicoView(!newTecnicoView);
                                }}
                            >
                                <Text style={styles.textStyle}>Salvar</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={{ ...styles.openButton, backgroundColor: "black" }}
                                onPress={() => {
                                    setNewTecnicoView(!newTecnicoView);
                                    newTecnico = {}
                                }}
                            >
                                <Text style={styles.textStyle}>Cancelar</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
            </Modal>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        padding: 0,
        margin: 0,
    },
    input: {
        height: 50,
        width: 300,
        borderWidth: 1,
        borderColor: '#004B8D',
        marginVertical: 10,
        padding: 10
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        paddingTop: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderWidth: 1,
        borderColor: '#004B8D'
    },
    floatButtonFilter: {
        width: 48,
        height: 48,
        borderRadius: 30,
        position: 'absolute',
        bottom: 10,
        right: 10,
        backgroundColor: '#004B8D',
        alignItems: 'center', justifyContent: 'center'
    },
    floatButtonNew: {
        width: 48,
        height: 48,
        borderRadius: 30,
        position: 'absolute',
        bottom: 70,
        right: 10,
        backgroundColor: '#004B8D',
        alignItems: 'center', justifyContent: 'center'
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        width: 150,
        marginBottom: 5
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    }
});