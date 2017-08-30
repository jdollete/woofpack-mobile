import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View } from 'react-native';

class MapViewComponent extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   userPosition: {
    //     latitude: 0,
    //     longitude: 0
    //   }
    // }
  }
  //
  // watchID: ?number = null
  //
  // componentDidMount() {
  //   navigator.geolocation.getCurrentPosition((position) => {
  //     const lat = parseFloat(position.coords.latitude);
  //     const long = parseFloat(position.coords.longitude);
  //
  //     this.setState({
  //       userPosition: {
  //         latitude: lat,
  //         longitude: long
  //       }
  //     });
  //
  //   },
  //   (error) => alert(JSON.stringify(error)),
  //   {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000})
  //
  //   this.watchID = navigator.geolocation.watchPosition((position) => {
  //     const lat = parseFloat(position.coords.latitude);
  //     const long = parseFloat(position.coords.longitude);
  //
  //     this.setState({
  //       userPosition: {
  //         latitude: lat,
  //         longitude: long
  //       }
  //     });
  //   });
  // };
  //
  // componentWillUnmount() {
  //   navigator.geolocation.clearWatch(this.watchID);
  // }

  render() {
    const { latNum, lngNum } = this.props;
    const latNumInt = parseFloat(latNum);
    const lngNumInt = parseFloat(lngNum);

    return (
      <MapView
        showsUserLocation
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
  }
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    height: 300,
    margin: 10
  },
  // radius: {
  //   height: 50,
  //   width: 50,
  //   borderRadius: 50 / 2,
  //   overflow: 'hidden',
  //   backgroundColor: 'rgba(11, 18, 255, 0.1)',
  //   borderWidth: 1,
  //   borderColor: 'rgba(11, 18, 255, 0.3)',
  //   alignItems: 'center',
  //   justifyContent: 'center'
  // },
  // marker: {
  //   height: 20,
  //   width: 20,
  //   borderRadius: 20 / 2,
  //   overflow: 'hidden',
  //   backgroundColor: '#0B12FF',
  //   borderWidth: 3,
  //   borderColor: 'white'
  // }
});

export { MapViewComponent };
