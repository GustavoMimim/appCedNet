import React, { useState } from 'react';
import { View, StyleSheet, Alert, Modal, TextInput, TouchableOpacity } from 'react-native';
import { Text, Card, ListItem, Button } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import dadosVeiculos from '../../banco/bdVeiculos'; /* Importação do banco bdVeiculos */
import { addNewVeiculo, getVeiculo } from '../../banco/bdVeiculos';


export default function Veiculos({ navigation: { navigate } }) {

    const [newVeiculoView, setNewVeiculoView] = useState(false);

    const [veiculos, setVeiculos] = useState(getVeiculo());
    const newVeiculo = {};


    return (
        <View>


            <ScrollView style={{ backgroundColor: '#FFFFFF' }}>

                <Button title='Inserir Veículo'
                    buttonStyle={{ marginBottom: 30, marginTop: 30, marginRight: 30, width: 150, alignSelf: 'flex-end', backgroundColor: '#004B8D' }}
                    onPress={() => {
                        setNewVeiculoView(true);
                    }} />
                <View style={styles.container}>
                    {

                        dadosVeiculos.filter(a => (a.excluido == false)).map((u, i) => {
                            return (
                                <ListItem
                                    button onPress={() => navigate('Gerenciar Veículo', { index: u.id })}
                                    key={i}
                                    roundAvatar
                                    title={u.name}
                                    subtitle={u.fabricante + ' ' + u.modelo + ' - ' + u.ano}
                                    leftAvatar={{ source: { uri: u.avatar } }}
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
            {/* View de novo Veículo */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={newVeiculoView}
            >
                <View>
                    <View style={styles.modalView}>
                        <Text h4 style={styles.modalText}>Inserir novo Veículo</Text>

                        <TextInput
                            style={styles.input}
                            onChangeText={text => Object.assign(newVeiculo, { name: text })}
                            placeholder='Placa'
                        />

                        <TextInput
                            style={styles.input}
                            onChangeText={text => Object.assign(newVeiculo, { fabricante: text })}
                            placeholder='Fabricante'
                        />

                        <TextInput
                            style={styles.input}
                            onChangeText={text => Object.assign(newVeiculo, { modelo: text })}
                            placeholder='Modelo'
                        />


                        <TextInput
                            style={styles.input}
                            onChangeText={text => Object.assign(newVeiculo, { ano: text })}
                            placeholder='Ano'
                        />

                        <TextInput
                            style={styles.input}
                            onChangeText={text => Object.assign(newVeiculo, { cor: text })}
                            placeholder='Cor'
                        />


                        <View style={{ flexDirection: 'column', padding: 20 }}>

                            <TouchableOpacity
                                style={{ ...styles.openButton, backgroundColor: "#004B8D" }}
                                onPress={() => {
                                    addNewVeiculo(newVeiculo);
                                    setNewVeiculoView(!newVeiculoView);
                                }}
                            >
                                <Text style={styles.textStyle}>Salvar</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={{ ...styles.openButton, backgroundColor: "#DD0000" }}
                                onPress={() => {
                                    setNewVeiculoView(!newVeiculoView);
                                    newVeiculo = {}
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