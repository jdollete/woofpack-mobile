import React from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Geocoder from 'react-native-geocoding';
import { eventCreate } from '../actions';
import { StyleSheet } from 'react-native';
import EventForm from './EventForm';
import {
  Container,
  Footer,
  FooterTab,
  Button,
  Text,
} from 'native-base';

class EventCreate extends React.Component {
  constructor(props) {
    super(props);

    this.onCancelPress = this.onCancelPress.bind(this);
    this.onCreatePress = this.onCreatePress.bind(this);
  }

  onCancelPress() {
    Actions.eventList({ type: 'reset' });
  }

  onCreatePress() {
    const { eventName, description, address, date, lng, lat } = this.props;

    this.getCoordinates(eventName, description, address, date, lng, lat);

  }

  getCoordinates(eventName, description, address, date, lng, lat) {
    Geocoder.setApiKey('AIzaSyCtnegDhFc_lIpX-sM1gvnFPayaBikL8s8');

    Geocoder.getFromLocation(address).then(
      json => {
        var location = json.results[0].geometry.location;
        var lng = location.lng.toString();
        var lat = location.lat.toString();
        var timeStamp = date.getTime();

        this.props.eventCreate({ eventName, description, address, date, lng, lat, timeStamp })
      },
      error => {
        alert("Invalid Address");
      }
    );
  }

  render() {
    return (
      <Container>
        <EventForm />
        <Footer>
          <FooterTab>
            <Button full onPress={this.onCreatePress}>
              <Text>Create</Text>
            </Button>
          </FooterTab>
          <FooterTab>
            <Button full onPress={this.onCancelPress}>
              <Text>Cancel</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  const { eventName, description, address, date, lng, lat } = state.eventForm;

  return { eventName, description, address, date, lng, lat };
}

export default connect(mapStateToProps, { eventCreate })(EventCreate);
