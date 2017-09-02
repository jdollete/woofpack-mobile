import React from 'react';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { StyleSheet, View, Alert } from 'react-native';
import { MapViewComponent } from './MapViewComponent';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';


class EventView extends React.Component {
  constructor(props) {
    super(props);

    this.onBackPress = this.onBackPress.bind(this);
    this.onPressEditEvent = this.onPressEditEvent.bind(this);
    this.onPressDeleteEvent = this.onPressDeleteEvent.bind(this);
  }

  onBackPress() {
    Actions.eventList({ type: 'reset' })
  }

  onPressEditEvent() {
    alert("Event Edit");
  }

  onPressDeleteEvent() {
    Alert.alert(
      'Delete Event Confirmation',
      'Are you sure you want to cancel this event?',
      [
        {text: 'YES', onPress: () => console.log('OK Pressed')},
        {text: 'CANCEL'},
      ],
      { cancelable: false }
    )
  }

  renderFooter(author) {
    const { currentUser } =firebase.auth();
    const currentUserId = currentUser.uid

    if (author === currentUserId) {
      return (
        <Footer>
          <FooterTab>
            <Button full onPress={this.onPressEditEvent}>
              <Text>Edit</Text>
            </Button>
          </FooterTab>
          <FooterTab>
            <Button full onPress={this.onPressDeleteEvent}>
              <Text>Delete</Text>
            </Button>
          </FooterTab>
        </Footer>
      );
    } else {
      return (
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Join Event</Text>
            </Button>
          </FooterTab>
        </Footer>
      );
    }
  }

  render() {
    const { eventName, dateString, address, lat, lng, author } = this.props.event

    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={this.onBackPress}>
              <Icon name='ios-arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <View style={{ flex: 1 }}>
            <MapViewComponent
              latNum={lat}
              lngNum={lng}
            />
          </View>
        </Content>
        {this.renderFooter(author)}
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
    height: 300,
    margin: 10
  }
});

export default EventView;
