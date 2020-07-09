import React, { useState } from 'react';
import { View, StyleSheet, StatusBar, TouchableOpacity, Modal, Picker, Alert, TextInput } from 'react-native';
import { Text } from 'react-native-elements';
import { SwipeListView } from 'react-native-swipe-list-view';
import Icon from 'react-native-vector-icons/FontAwesome';
import { getOrder, updatePendingOrder, addNewOrder, removeOrder } from '../../banco/bdOrders';

export default function Order () {

    const [newOrderView, setNewOrderView] = useState(false);
    const [filterView, setFilterView] = useState(false);
    const [filterPending, setfilterPending] = useState('');
    const [filterCity, setfilterCity] = useState('');
    const [filterPlan, setfilterPlan] = useState('');
    const [filterReason, setfilterReason] = useState('');

    const [orders, setOrders] = useState(getOrder());
    const [newOrder, setNewOrder] = useState({});

    function filterOrders (data) {
        var arr = []
        arr = data
        if (arr) {
            arr = filterPending === '' ? arr : arr.filter(a => (a.pending == filterPending))
            arr = filterCity == '' ? arr : arr.filter(a => (a.city == filterCity))
            arr = filterPlan == '' ? arr : arr.filter(a => (a.plan == filterPlan))
            arr = filterReason == '' ? arr : arr.filter(a => (a.reason == filterReason))
        }
        return arr
    };

    return (

        <View style={styles.container}>
            <StatusBar hidden={false} barStyle="dark-content" backgroundColor="white" translucent />

            <View>
                <SwipeListView
                    scrollEnabled={true}
                    data={filterOrders(orders)}
                    renderItem={(orders, rowMap) => (
                        <View style={styles.item}>
                            <Text h5 style={styles.text}>{orders.item.plan + ' - ' + orders.item.reason}</Text>
                            <Text h4 style={styles.text}>{orders.item.name}</Text>
                            <View>
                                <Text h5 style={styles.text}>{orders.item.city + ' '}</Text>
                                <Icon name='map-marker' size={16} color='#004B8D' />
                                <Text h5 style={styles.text}>{' ' + orders.item.distance}</Text>
                            </View>
                        </View>
                    )}
                    renderHiddenItem={(orders, rowMap) => (
                        <View style={styles.rowBack}>
                            <View style={styles.backRightBtnLeft}>

                                <TouchableOpacity
                                    onPress={() => {
                                        updatePendingOrder(orders.item.id)
                                        Alert.alert('Serviço alterado com sucesso!')
                                        setfilterPending(!filterPending)
                                    }}
                                >

                                    <Icon
                                        name='check'
                                        size={28}
                                        color='white'
                                    />
                                </TouchableOpacity>

                            </View>
                            <View style={styles.backRightBtnRight}>

                                <TouchableOpacity
                                    onPress={() => {
                                        removeOrder(orders.item.id)
                                        Alert.alert('Serviço removido com sucesso!')
                                        setOrders(getOrder())
                                    }}
                                >

                                    <Icon
                                        name='remove'
                                        size={28}
                                        color='white'
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                    leftOpenValue={75}
                    rightOpenValue={-75}
                />

                { /* ****************************************************************************** */}
                {/* View de filtros */}
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={filterView}
                >

                    <View>
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
                                {orders.map((item, index) => {
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
                                {orders.map((item, index) => {
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
                                {orders.map((item, index) => {
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

                { /* ****************************************************************************** */}
                {/* View de novo agendamento */}
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={newOrderView}
                >
                    <View>
                        <View style={styles.modalView}>
                            <Text h4 style={styles.modalText}>Novo agendamento!</Text>

                            <TextInput
                                style={styles.input}
                                onChangeText={text => setNewOrder(Object.assign(newOrder, { name: text }))}
                                placeholder='Cliente'
                            />

                            <TextInput
                                style={styles.input}
                                onChangeText={text => setNewOrder(Object.assign(newOrder, { city: text }))}
                                value={newOrder.city}
                                placeholder='Cidade'
                            />

                            <TextInput
                                style={styles.input}
                                onChangeText={text => setNewOrder(Object.assign(newOrder, { plan: text }))}
                                value={newOrder.plan}
                                placeholder='Plano de acesso'
                            />

                            <TextInput
                                style={styles.input}
                                onChangeText={text => setNewOrder(Object.assign(newOrder, { reason: text }))}
                                value={newOrder.reason}
                                placeholder='Motivo do agendamento'
                            />

                            <TextInput
                                style={styles.input}
                                onChangeText={text => setNewOrder(Object.assign(newOrder, { latitude: parseFloat(text) }))}
                                value={newOrder.latitude}
                                placeholder='Latitude'
                            />

                            <TextInput
                                style={styles.input}
                                onChangeText={text => setNewOrder(Object.assign(newOrder, { longitude: parseFloat(text) }))}
                                value={newOrder.longitude}
                                placeholder='Longitude'
                            />

                            <View style={{ flexDirection: 'column', padding: 20 }}>

                                <TouchableOpacity
                                    style={{ ...styles.openButton, backgroundColor: "#004B8D" }}
                                    onPress={() => {
                                        console.log(newOrder);
                                        addNewOrder(newOrder);
                                        setNewOrderView(!newOrderView);
                                    }}
                                >
                                    <Text style={styles.textStyle}>Salvar</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={{ ...styles.openButton, backgroundColor: "black" }}
                                    onPress={() => {
                                        setNewOrderView(!newOrderView);
                                        setNewOrder({})
                                    }}
                                >
                                    <Text style={styles.textStyle}>Cancelar</Text>
                                </TouchableOpacity>

                            </View>
                        </View>
                    </View>
                </Modal>

                { /* ****************************************************************************** */}

            </View>

            <TouchableOpacity
                style={styles.floatButtonNew}
                onPress={() => {
                    setNewOrderView(true);
                }}
            >

                <Icon
                    name='pencil'
                    size={28}
                    color='white'
                />
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.floatButtonFilter}
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

        </View >

    );
}

const styles = StyleSheet.create({
    input: {
        height: 50,
        width: 300,
        borderWidth: 1,
        borderColor: '#004B8D',
        marginVertical: 10,
        padding: 10
    },
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
        borderRightWidth: 2,
        borderRightColor: 'red',
        flex: 1,
        marginVertical: 10,
        alignItems: 'stretch',
        width: '100%'
    },
    text: {
        color: "#333333",
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
    },
    modalText: {
        marginTop: 0,
        marginBottom: 15,
        textAlign: "center",
        color: '#004B8D'
    },
    backRightBtn: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 75,
    },
    rowBack: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    backRightBtnLeft: {
        backgroundColor: '#004B8D',
        alignItems: 'center',
        justifyContent: 'center',
        height: 130,
        width: 75,
        left: 0,
    },
    backRightBtnRight: {
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        height: 130,
        width: 80,
        right: 0,
    },
})