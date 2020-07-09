import { Alert } from "react-native";
import { indexOf } from "lodash";

const data = [
    {
        id: '0',
        name: 'Relâmpago McQueen',
        city: 'Ourinhos',
        plan: 'Fibra 40mb Res.',
        reason: 'Problemas de conexão',
        distance: 'a 7 km de distância',
        pending: true,
        latitude: -22.050826,
        longitude: -49.603366,
    },
    {
        id: '1',
        name: 'Vitória Cunha Cavalcanti',
        city: 'Ipaussu',
        plan: 'Fibra Colaboradores 20mb',
        reason: 'Problemas de conexão',
        distance: 'a 2 km de distância',
        pending: true,
        latitude: -23.054609,
        longitude: -49.624625,
    },
    {
        id: '2',
        name: 'Davi Fernandes Almeida',
        city: 'Chavantes',
        plan: 'Fibra 200mb Comercial',
        reason: 'Troca de endereço',
        distance: 'a 7 km de distância',
        pending: true,
        latitude: -23.1000000,
        longitude: -49.5638002,
    },    
    {
        id: '3',
        name: 'Lara Gomes Silva',
        city: 'Ourinhos',
        plan: 'Radio 5mb Res.',
        reason: 'Problemas de conexão',
        distance: 'a 500 m de distância',
        pending: true,
        latitude: -23.050826,
        longitude: -49.603366,
    },
    {
        id: '4',
        name: 'Yasmin Araujo Pereira',
        city: 'Ourinhos',
        plan: 'Fibra 40mb Res.',
        reason: 'Troca de endereço',
        distance: 'a 2 km de distância',
        pending: true,
        latitude: -22.850826,
        longitude: -49.203366,
    },
    {
        id: '5',
        name: 'Marisa Ribeiro Rodrigues',
        city: 'Ourinhos',
        plan: 'Fibra 40mb Res.',
        reason: 'Cancelamento de plano',
        distance: 'a 2 km de distância',
        pending: true,
        latitude: -23.050826,
        longitude: -49.603366,
    },
    {
        id: '6',
        name: 'José Sousa Melo',
        city: 'Ourinhos',
        plan: 'Fibra 40mb Res.',
        reason: 'Problemas de conexão',
        distance: 'a 3 km de distância',
        pending: true
    },
    {
        id: '7',
        name: 'Gustavo Rodrigues Cardoso',
        city: 'Chavantes',
        plan: 'Fibra Colaboradores 20mb',
        reason: 'Problemas de conexão',
        distance: 'a 2 km de distância',
        pending: true,
        latitude: -23.0000000,
        longitude: -49.8638002,
    },
    {
        id: '8',
        name: 'Arthur Castro Ferreira',
        city: 'Ourinhos',
        plan: 'Fibra 40mb Res.',
        reason: 'Cancelamento de plano',
        distance: 'a 876 m de distância',
        pending: false,
        latitude: -22.9931817,
        longitude: -49.8638002,
    },
    {
        id: '9 ',
        name: 'André Dias Souza',
        city: 'Ourinhos',
        plan: 'Fibra 200mb Res.',
        reason: 'Problemas de conexão',
        distance: 'a 1 km de distância',
        pending: false,
        latitude: -23.060826,
        longitude: -49.703366,
    }
];

const getOrder = () => data

const updatePendingOrder = (id) => {

    const found = data.find(element => element.id == id);
    found.pending = !found.pending

}

const addNewOrder = (newOrder) => {

    const array = Object.assign(newOrder, { id: data.length + 1 })
    data.push(array)

}

function findWithAttr (array, attr, value) {
    for (var i = 0; i < array.length; i += 1) {
        if (array[i][attr] === value) {
            return i;
        }
    }
    return -1;
}

const removeOrder = (orderID) => {

    const index = findWithAttr(data, 'id', orderID)
    data.splice(index, 1);

}

export { getOrder, updatePendingOrder, addNewOrder, removeOrder }