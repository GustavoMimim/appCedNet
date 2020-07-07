import React, { useState } from 'react';
import { View, StyleSheet, StatusBar, TouchableOpacity, Modal } from 'react-native';
import { Text } from 'react-native-elements';
import { SwipeListView } from 'react-native-swipe-list-view';
import Icon from 'react-native-vector-icons/FontAwesome';
import data from '../../services/orders';

export default function Order () {

    const [orderSelected, setOrderSelected] = useState(false);
    const [filter, setFilter] = useState(false);

    return (

        <View style={styles.container}>
            <StatusBar hidden={false} barStyle="dark-content" backgroundColor="white" translucent />


            <View style={styles.centeredView}>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={orderSelected}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text h4 style={styles.modalText}>Dados do serviço</Text>

                            <TouchableOpacity
                                style={{ ...styles.openButton, backgroundColor: '#004B8D' }}
                                onPress={() => {
                                    setOrderSelected(!orderSelected);
                                }}
                            >
                                <Text style={styles.textStyle}>Fechar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>

                <SwipeListView
                    data={data.filter(a => (a.pending == true))}
                    renderItem={(data, rowMap) => (
                        <TouchableOpacity
                            underlayColor={'#004B8D'}
                            onPress={() => {
                                setOrderSelected(true);
                            }}
                        >
                            <View style={styles.item}>
                                <Text h5 style={styles.text}>{data.item.plan + ' - ' + data.item.reason}</Text>
                                <Text h4 style={styles.text}>{data.item.name}</Text>
                                <View>
                                    <Text h5 style={styles.text}>{data.item.city + ' '}</Text>
                                    <Icon name='map-marker' size={16} color='#004B8D' />
                                    <Text h5 style={styles.text}>{' ' + data.item.distance}</Text>
                                </View>
                            </View>
                        </TouchableOpacity >
                    )}
                    renderHiddenItem={(data, rowMap) => (
                        <View style={styles.rowBack}>
                        </View>
                    )}
                    leftOpenValue={75}
                    rightOpenValue={-75}
                />

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={filter}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Filtros!</Text>

                            <TouchableOpacity
                                style={{ ...styles.openButton, backgroundColor: "#004B8D" }}
                                onPress={() => {
                                    setFilter(!filter);
                                }}
                            >
                                <Text style={styles.textStyle}>Fechar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>

                <TouchableOpacity
                    style={styles.floatButton}
                    onPress={() => {
                        setFilter(true);
                    }}
                >

                    <Icon
                        name='filter'
                        size={28}
                        color='white'
                    />
                </TouchableOpacity>

            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        padding: 10,
        height: 130,
        backgroundColor: 'white',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        borderLeftColor: '#004B8D',
        borderLeftWidth: 5,
        flex: 1,
        margin: 10,
        alignItems: 'stretch'
    },
    text: {
        color: "#333333",
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
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
    floatButton: {
        width: 48,
        height: 48,
        borderRadius: 30,
        position: 'absolute',
        bottom: 10,
        right: 10,
        backgroundColor: '#004B8D',
        alignItems: 'center', justifyContent: 'center'
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginTop: 0,
        marginBottom: 15,
        textAlign: "center",
        color: '#004B8D'
    },

})