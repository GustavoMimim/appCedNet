import React from 'react';
import { View, StyleSheet, Alert, Image, TextInput,  } from 'react-native';
import { Text, Button, TouchableOpacity } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

import { getTecnicoByIndex } from '../../banco/bdTecnicos'
import dadosTecnicos from '../../banco/bdTecnicos';



export default function Tecnicos({ route, navigation: { navigate } }) {

    


    const { index } = route.params;
    const tecnico = getTecnicoByIndex(index);
    const [novoNome, onChangeTextNome] = React.useState(tecnico.name);
    const [novoEmail, onChangeTextEmail] = React.useState(tecnico.email);
    const [novoTelefone, onChangeTextTelefone] = React.useState(tecnico.telefone);
    const [novoCelular, onChangeTextCelular] = React.useState(tecnico.celular);
    function salvarTecnico() {
        dadosTecnicos[index].name = novoNome;
        dadosTecnicos[index].email = novoEmail;
        dadosTecnicos[index].telefone = novoTelefone;
        dadosTecnicos[index].celular = novoCelular;
        Alert.alert("Perfil alterado com sucesso.")

    }
    function excluirTecnico() {
        dadosTecnicos[index].excluido = true;
        Alert.alert("Perfil excluído com sucesso.");

    }
    const labelStyle = function (options) {
        if (options == 'Disponível') {
            return {
                marginTop: 30,
                marginBottom: 4,
                marginLeft: 180,
                alignSelf: 'flex-end',
                fontWeight: 'bold',
                color: 'green',
                fontSize: 20
            }
        } else {
            return {
                marginTop: 30,
                marginBottom: 4,
                marginLeft: 165,
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
                <Image style={{ marginBottom: 5 }} />

                <Text style={styles.prefix}>Nome:</Text>

                <TextInput style={styles.content} onChangeText={text => onChangeTextNome(text)} value={novoNome} />

                <View
                    style={styles.linha}
                />

                <Text style={styles.prefix}>Cargo:</Text>
                <View style={styles.container}>

                    <Text style={styles.content}>{tecnico.cargo}</Text>

                </View>
                <Image style={{ marginBottom: 24 }} />
                <View
                    style={styles.linha}
                />

                <Text style={styles.prefix}>E-mail:</Text>

                <TextInput style={styles.content} onChangeText={text => onChangeTextEmail(text)} value={novoEmail} />


                <View
                    style={styles.linha}
                />

                <Text style={styles.prefix}>Telefone:</Text>

                <TextInput style={styles.content} onChangeText={text => onChangeTextTelefone(text)} value={novoTelefone} />

                <View
                    style={styles.linha}
                />

                <Text style={styles.prefix}>Celular:</Text>

                <TextInput style={styles.content} onChangeText={text => onChangeTextCelular(text)} value={novoCelular} />

                <View
                    style={styles.linha}
                />




                <ScrollView>

                    <View style={{ flexDirection: 'row', marginTop: 0 }}>
                        <Text style={{ marginTop: 30, marginBottom: 4, marginLeft: 0, alignSelf: 'flex-start', fontWeight: 'bold', color: '#004B8D', fontSize: 18 }}>Status: </Text>
                        <Text style={labelStyle(tecnico.subtitle)} >{tecnico.subtitle}</Text>
                    </View>
                    <View style={{ flexDirection: 'column', marginTop: 0 }}>
                        <Text style={styles.prefix}>Veículo:</Text>
                        <Text style={styles.content}>{tecnico.veiculo}</Text>
                    </View>
                    <View
                        style={styles.linha}
                    />
                    <View style={{ flexDirection: 'column', marginTop: 0 }}>
                        <Text style={styles.prefix}>Serviço:</Text>
                        <Text style={styles.content}>{tecnico.servico}</Text>
                    </View>
                    <View
                        style={styles.linha}
                    />
                    <View style={{ flexDirection: 'row', marginTop: 0 }}>
                        <Button title='Excluir perfil'
                            buttonStyle={{ marginTop: 30, width: 150, alignSelf: 'flex-start', backgroundColor: '#BB0000' }}
                            onPress={() => Alert.alert(
                                'ATENÇÃO',
                                'Deseja realmente excluir o perfil?',
                                [
                                    { text: 'Não', onPress: () => console.warn('Não pressionado'), style: 'cancel' },
                                    { text: 'Sim', onPress: () => excluirTecnico() },
                                ]
                            )} />
                        <Button title='Editar perfil'
                            buttonStyle={{ marginTop: 30, marginLeft: 35, width: 150, alignSelf: 'flex-end', backgroundColor: 'green' }}
                            onPress={() => Alert.alert(
                                'ATENÇÃO',
                                'Deseja realmente alterar o perfil?',
                                [
                                    { text: 'Não', onPress: () => console.warn('Não pressionado'), style: 'cancel' },
                                    { text: 'Sim', onPress: () => salvarTecnico() },
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
        marginTop: 8,
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
    }

});