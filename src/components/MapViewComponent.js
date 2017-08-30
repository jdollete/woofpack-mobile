import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet } from 'react-native';

const MapViewComponent = ({ latitude, longitude }) => {

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: latitude,
        longitude: longitude,
        latitudeDelta: 0.0052,
        longitudeDelta: 0.0051,
      }}
    />
  );
};

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    height: 300,
    margin: 10
  }
});

export { MapViewComponent };
