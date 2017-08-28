import React from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { eventCreate } from '../actions';
import { StyleSheet } from 'react-native';
import EventForm from './EventForm';
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Body,
  Icon,
  Text,
  Form,
  Item,
  Label,
  Input
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
    const { eventName, street, city, zipCode, date } = this.props;

    this.props.eventCreate({ eventName, street, city, zipCode, date });
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
  const { eventName, street, city, zipCode, date } = state.eventForm;

  return { eventName, street, city, zipCode, date };
}

export default connect(mapStateToProps, { eventCreate })(EventCreate);
