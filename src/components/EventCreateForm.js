import React from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { StyleSheet, DatePickerIOS } from 'react-native';
import { BaseInput, FloatingInput } from './common';
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  Form,
  Item,
  Label,
  Input
} from 'native-base';

class EventCreateForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
      timeZoneOffsetInHours: (-1) * (new Date()).getTimezoneOffset() / 60
    };

    this.onDateChange = this.onDateChange.bind(this);
    this.onCancelPress = this.onCancelPress.bind(this);
  }

  onDateChange(date) {
    this.setState({date: date});
  }

  onCancelPress() {
    Actions.eventList({ type: 'reset' });
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Create Event</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <Form>
            <FloatingInput>
              Event Name
            </FloatingInput>
            <FloatingInput>
              Street Address
            </FloatingInput>
            <FloatingInput>
              City
            </FloatingInput>
            <FloatingInput>
              Zip-Code
            </FloatingInput>
          </Form>
          <DatePickerIOS
            date={this.state.date}
            mode="datetime"
            timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
            onDateChange={this.onDateChange}
          />
        </Content>

        <Footer>
          <FooterTab>
            <Button full>
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

export default EventCreateForm;
