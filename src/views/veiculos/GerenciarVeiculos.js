import React from 'react';
import { SafeAreaView, View, StyleSheet, StatusBar, Alert, FlatList, Image, TextInput } from 'react-native';
import { Text, Card, ListItem, Button, TouchableOpacity } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { SwipeListView } from 'react-native-swipe-list-view';
import dadosVeiculos, { getVeiculoByIndex } from '../../banco/bdVeiculos'



export default function Veiculo({ route }) {

    const { index } = route.params;
    const veiculo = getVeiculoByIndex(index);
    const [novoNome, onChangeTextNome] = React.useState(veiculo.name);
    const [novoCor, onChangeTextCor] = React.useState(veiculo.cor);
    const [novoModelo, onChangeTextModelo] = React.useState(veiculo.subtitle);
    function salvarVeiculo(){
        dadosVeiculos[index].name=novoNome;
        dadosVeiculos[index].cor=novoCor;
        dadosVeiculos[index].subtitle=novoModelo;
        Alert.alert("Dados salvos com sucesso.");
    }
    function excluirVeiculo() {
        dadosVeiculos[index].excluido=true;
        Alert.alert("Veículo excluído com sucesso.");
               
    }
    const labelStyle = function (options) {
        if (options == 'Disponível para uso') {
            return {
                marginTop: 40,
                marginBottom: 4,
                marginLeft: 97,
                alignSelf: 'flex-end',
                fontWeight: 'bold',
                color: 'green',
                fontSize: 20
            }
        } if (options == 'Em uso') {
            return {
                marginTop: 40,
                marginBottom: 4,
                marginLeft: 210,
                alignSelf: 'flex-end',
                fontWeight: 'bold',
                color: '#004B8D',
                fontSize: 20
            }
        } else {
            return {
                marginTop: 40,
                marginBottom: 4,
                marginLeft: 130,
                alignSelf: 'flex-end',
                fontWeight: 'bold',
                color: 'red',
                fontSize: 20
            }
            
        } 

    }
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

                <Text style={styles.prefix}>Placa:</Text>

                <TextInput style={styles.content} onChangeText={text => onChangeTextNome(text)} value={novoNome}/>

                <View
                    style={styles.linha}
                />

                <Text style={styles.prefix}>Modelo/Ano:</Text>

                <TextInput style={styles.content} onChangeText={text => onChangeTextModelo(text)} value={novoModelo}/>

                <View
                    style={styles.linha}
                />

                <Text style={styles.prefix}>Cor:</Text>

                <TextInput style={styles.content} onChangeText={text => onChangeTextCor(text)} value={novoCor}/>

                <View
                    style={styles.linha}
                />


                <ScrollView>

                    <View style={{ flexDirection: 'row', marginTop: 0 }}>
                        <Text style={{ marginTop: 40, marginBottom: 4, marginLeft: 0, alignSelf: 'flex-start', fontWeight: 'bold', color: '#004B8D', fontSize: 18 }}>Status: </Text>
                        <Text style={labelStyle(veiculo.status)} >{veiculo.status}</Text>
                    </View>
                    <View style={{ flexDirection: 'column', marginTop: 0 }}>
                        <Text style={styles.prefix}>Sendo utilizado por:</Text>
                        <Text style={styles.content}>{veiculo.utilizadopor}</Text>
                    </View>
                    <View
                        style={styles.linha}
                    />
                    
                    <View style={{ flexDirection: 'row', marginTop: 0 }}>
                        <Button title='Excluir veículo'
                            buttonStyle={{ marginTop: 30, width: 150, alignSelf: 'flex-start', backgroundColor: '#BB0000' }}
                            onPress={() => Alert.alert(
                                'ATENÇÃO',
                                'Deseja realmente excluir o perfil?',
                                [
                                    { text: 'Não', onPress: () => console.warn('Não pressionado'), style: 'cancel' },
                                    { text: 'Sim', onPress: () => excluirVeiculo() },
                                ]
                            )} />
                        <Button title='Editar veículo'
                            buttonStyle={{ marginTop: 30, marginLeft: 35, width: 150, alignSelf: 'flex-end', backgroundColor: 'green' }}
                            onPress={() => Alert.alert(
                                'ATENÇÃO',
                                'Deseja realmente alterar o perfil?',
                                [
                                    { text: 'Não', onPress: () => console.warn('Não pressionado'), style: 'cancel' },
                                    { text: 'Sim', onPress: () => salvarVeiculo() },
                                ]
                            )} />


                    </View>
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
