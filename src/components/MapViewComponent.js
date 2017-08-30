import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet } from 'react-native';

const MapViewComponent = ({ latNum, lngNum }) => {
  const latNumInt = parseFloat(latNum);
  const lngNumInt = parseFloat(lngNum);
  return (
    <MapView
      style={styles.map}
      region={{
        latitude: latNumInt,
        longitude: lngNumInt,
        latitudeDelta: 0.0052,
        longitudeDelta: 0.0051,
      }}
    >
      <MapView.Marker
        coordinate={{
          latitude: latNumInt,
          longitude: lngNumInt
        }}
      />
    </MapView>
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
