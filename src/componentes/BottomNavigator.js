import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import { Icon } from 'react-native-elements'

export default BottomNavigator = (props) => {
    return (
        <View style={{
            flex: 1,
            flexDirection: 'column',
            backgroundColor: '#f8f4f4'

        }}>
            <View style={{ position: 'absolute', alignSelf: 'center', backgroundColor: '#f8f4f4', width: 70, height: 70, borderRadius: 35, bottom: 25, zIndex: 10 }}>
                <Icon
                    name='map'
                    type='material'
                    color='black'
                    containerStyle={{ alignSelf: 'center' }}
                    reverse
                    size={28}
                    onPress={() => { }}
                />
            </View>
            <View style={{ position: 'absolute', backgroundColor: '#004B8D', bottom: 0, zIndex: 1, width: '100%', height: 60, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15, paddingVertical: 10 }}>
                <Icon
                    name='home'
                    type='material'
                    color='#fff'
                    onPress={() => { props.navigation.navigate('Home') }}
                />
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>

                    <Icon
                        name='equalizer'
                        type='material'
                        color='#fff'
                    />
                    <Icon
                        name='build'
                        type='material'
                        color='#fff'
                        onPress={() => { Alert.alert('aa') }}
                        containerStyle={{ marginHorizontal: 16 }}
                    />
                    <Icon
                        name='person'
                        type='material'
                        color='#fff'
                    />
                </View>
            </View>
        </View>
    );
}
