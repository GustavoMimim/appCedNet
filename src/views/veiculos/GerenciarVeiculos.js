import React from 'react';
import { SafeAreaView, View, StyleSheet, StatusBar, Alert, FlatList, Image  } from 'react-native';
import { Text, Card, ListItem } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { SwipeListView } from 'react-native-swipe-list-view';

const veiculos = [
    {
        name: 'FP5T71Q',
        avatar: 'https://www.firstcarrental.co.za/images/group-b-suzuki-swift-june2019.jpg',
        subtitle: 'Ford Ka - 2020'
    },
    {
        name: 'FP5TZ1Q',
        avatar: 'https://i2.wp.com/blog.twwhiteandsons.co.uk/wp-content/uploads/2014/08/siwft-sport.png?fit=447%2C237&ssl=1',
        subtitle: 'Kwid - 2019'
    },
    {
        name: 'BEE4R22',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR1VdYdn_6WEgG-g405G05ScMlCHysgwIjtwN8RGQu-QqSuxYPd&usqp=CAU',
        subtitle: 'Mobi - 2020'
    }
    
]

const veiculosIndisponiveis = [
    {
        name: 'BEE4R22',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR1VdYdn_6WEgG-g405G05ScMlCHysgwIjtwN8RGQu-QqSuxYPd&usqp=CAU',
        subtitle: 'Mobi - 2020'
    }
]

export default function Tecnicos() {


    return (
        <View style={styles.container}>
            <Text style={{ marginTop: 0, marginLeft: 22, alignSelf: 'flex-start', fontWeight: 'bold', color: '#004B8D', fontSize: 22 }}>Informações do Veículo</Text>
            <View style={{
                marginHorizontal: 20,
                marginTop: 20,
                paddingVertical: 40,
                shadowColor: 'gray',
                shadowOpacity: 0.5,
                shadowOffset: {
                    height: 3,
                    width: 3
                },
                shadowRadius: 4,
                elevation: 4,
                backgroundColor: 'white',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                paddingLeft: 25
            }}>
                <Image style={{ marginBottom: 10 }}  />
                <View style={{ flexDirection: 'row', marginTop: 0 }}>
                    <Text style={styles.prefix}>Nome:</Text>
                    <Text style={styles.content}>Gustavo Bergamo Mimim</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 8 }}>
                    <Text style={styles.prefix}>Cargo:</Text>
                    <Text style={styles.content}>Programador Sênior</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 8 }}>
                    <Text style={styles.prefix}>Idade: </Text>
                    <Text style={styles.content}>22</Text>
                </View>
            </View>
        </View>


    );


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingTop: 35
    },
    prefix: {
        fontSize: 16,
        marginRight: 10
    },
    content: {
        fontSize: 16,
        color: 'gray'
    }

});
