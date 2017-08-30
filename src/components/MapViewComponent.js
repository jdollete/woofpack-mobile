import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet } from 'react-native';

class MapViewComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userPosition: {
        latitude: 0,
        longitude: 0
      }
    }
  }

  watchID: ?number = null

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = parseFloat(position.coords.latitude);
      const long = parseFloat(position.coords.longitude);

      this.setState({
        userPosition: {
          latitude: lat,
          longitude: long
        }
      });

    },
    (error) => alert(JSON.stringify(error)),
    {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000})

    this.watchID = navigator.geolocation.watchPosition((position) => {
      const lat = parseFloat(position.coords.latitude);
      const long = parseFloat(position.coords.longitude);

      this.setState({
        userPosition: {
          latitude: lat,
          longitude: long
        }
      });
    });
  };

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  render() {
    const { latNum, lngNum } = this.props;
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
        <MapView.Marker
          coordinate={this.state.userPosition}
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
  }
});

export { MapViewComponent };
