import React, { useState } from 'react';
import { View, StyleSheet, StatusBar, TouchableOpacity, Modal, Picker, Alert } from 'react-native';
import { Text } from 'react-native-elements';
import { SwipeListView } from 'react-native-swipe-list-view';
import Icon from 'react-native-vector-icons/FontAwesome';
import getOrder from '../../banco/bdOrders';

export default function Order () {

    const [filterView, setFilterView] = useState(false);
    const [filterPending, setfilterPending] = useState(false);
    const [filterCity, setfilterCity] = useState('');
    const [filterPlan, setfilterPlan] = useState('');
    const [filterReason, setfilterReason] = useState('');

    const data = getOrder();

    function filterOrders (data) {
        var arr = []
        arr = data
        if (arr) {
            arr = filterPending == '' ? arr : arr.filter(a => (a.pending == filterPending))
            arr = filterCity == '' ? arr : arr.filter(a => (a.city == filterCity))
            arr = filterPlan == '' ? arr : arr.filter(a => (a.plan == filterPlan))
            arr = filterReason == '' ? arr : arr.filter(a => (a.reason == filterReason))
        }
        return arr
    };

    return (

        <View style={styles.container}>
            <StatusBar hidden={false} barStyle="dark-content" backgroundColor="white" translucent />

            <View style={styles.centeredView}>
                <SwipeListView
                    data={filterOrders(data)}

                    renderItem={(data, rowMap) => (
                        <View style={styles.item}>
                            <Text h5 style={styles.text}>{data.item.plan + ' - ' + data.item.reason}</Text>
                            <Text h4 style={styles.text}>{data.item.name}</Text>
                            <View>
                                <Text h5 style={styles.text}>{data.item.city + ' '}</Text>
                                <Icon name='map-marker' size={16} color='#004B8D' />
                                <Text h5 style={styles.text}>{' ' + data.item.distance}</Text>
                            </View>
                        </View>
                    )}
                    renderHiddenItem={(data, rowMap) => (
                        <View style={styles.rowBack}>
                            <TouchableOpacity>
                                <Text>Left</Text>
                                <Text>Right</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                    leftOpenValue={75}
                    rightOpenValue={-75}
                />

                {/* View de filtros */}
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={filterView}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text h4 style={styles.modalText}>Filtros!</Text>

                            <Picker
                                style={{ height: 100, width: 300 }}
                                selectedValue={filterPending}
                                onValueChange={(item, itemIndex) => setfilterPending(item)}>
                                <Picker.Item label='ANDAMENTO...' value={''} />
                                <Picker.Item label={'Pendente'} value={true} />
                                <Picker.Item label={'Concluído'} value={false} />
                            </Picker>

                            <Picker
                                style={{ height: 100, width: 300 }}
                                selectedValue={filterCity}
                                onValueChange={(item, itemIndex) => setfilterCity(item)}>
                                <Picker.Item label='CIDADE...' value='' />
                                {data.map((item, index) => {
                                    return (
                                        <Picker.Item label={item.city} value={item.city} key={index} />
                                    )
                                })}
                            </Picker>

                            <Picker
                                style={{ height: 100, width: 300 }}
                                selectedValue={filterPlan}
                                onValueChange={(item, itemIndex) => setfilterPlan(item)}>
                                <Picker.Item label='PLANO...' value='' />
                                {data.map((item, index) => {
                                    return (
                                        <Picker.Item label={item.plan} value={item.plan} key={index} />
                                    )
                                })}
                            </Picker>

                            <Picker
                                style={{ height: 100, width: 300 }}
                                selectedValue={filterReason}
                                onValueChange={(item, itemIndex) => setfilterReason(item)}>
                                <Picker.Item label='MOTIVO...' value='' />
                                {data.map((item, index) => {
                                    return (
                                        <Picker.Item label={item.reason} value={item.reason} key={index} />
                                    )
                                })}
                            </Picker>

                            <TouchableOpacity
                                style={{ ...styles.openButton, backgroundColor: "#004B8D" }}
                                onPress={() => {
                                    setFilterView(!filterView);
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
                        setFilterView(true);
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
        borderLeftColor: '#004B8D',
        borderLeftWidth: 5,
        flex: 1,
        margin: 10,
        alignItems: 'stretch',
        width: '100%'
    },
    text: {
        color: "#333333",
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'stretch',
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
    rowBack: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
    },
    backRightBtn: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 75,
    },
    backRightBtnLeft: {
        backgroundColor: 'blue',
        right: 75,
    },
    backRightBtnRight: {
        backgroundColor: 'red',
        right: 0,
    },

})