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
      >
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
    justifyContent: 'flex-end',
    padding: 40
  },
})