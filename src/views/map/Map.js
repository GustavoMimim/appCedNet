import React from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function Map () {
  return (
    <View style={styles.container}>
      <StatusBar hidden={false} barStyle = "dark-content" backgroundColor="white" translucent />
      <MapView
        showsUserLocation={true}
        showsMyLocationButton={true}
        style={styles.image}
        initialRegion={{
          latitude: -23.040826,
          longitude: -49.703366,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
      >
        <Marker
          coordinate={{            
            latitude: -23.040826,
            longitude: -49.703366,
          }}
          title='Sua localização'
          description='Ford Ka - 2020'

        />
      </MapView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
})