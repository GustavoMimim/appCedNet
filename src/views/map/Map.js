import React from 'react';
import { Text, View, StyleSheet, StatusBar, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import mapStyle from './mapStyle'


const positionTechnical = [
  {
    latitude: -23.040826,
    longitude: -49.703366,
    title: 'Sua localização',
    description: 'Ford Ka - 2020'
  },
  {
    latitude: -22.9931817, 
    longitude: -49.8638002,
    title: 'Vinicius A. Ribeiro',
    description: 'Mobi - 2020'
  },
  {
    latitude: -22.9998999, 
    longitude: -49.8638002,
    title: 'Renan L. R. da Silva',
    description: 'Kwid - 2019'
  }
]


export default function Map () {
  return (
    <View style={styles.container}>
      <StatusBar hidden={false} barStyle="dark-content" backgroundColor="white" translucent />
      <MapView
        pitchEnabled={true}
        showsCompass={true}
        liteMode={false}
        showsBuildings={true}
        showsTraffic={true}
        showsIndoors={true}
        showsUserLocation={true}
        showsMyLocationButton={true}
        customMapStyle={mapStyle}
        style={styles.map}
        initialRegion={{
          latitude: -23.040826,
          longitude: -49.703366,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
      >
        
        {
          positionTechnical.map((u, i) => {
            return (
              <Marker
                key={i}
                coordinate={{
                  latitude: u.latitude,
                  longitude: u.longitude,
                }}
                title={u.title}
                description={u.description}
                icon={{
                  uri: "https://img.icons8.com/color/72/000000/fiat-500.png"
                }}

              />
            );
          })
        }


      </MapView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  map: {
    width: Dimensions.get('window').width,
    top: 25,
    height: '100%'
  },
})