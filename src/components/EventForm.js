import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, DatePickerIOS } from 'react-native';
import { eventUpdate } from '../actions';
import { BaseInput, FloatingInput } from './common';
import {
  Container,
  Header,
  Title,
  Content,
  Body,
  Icon,
  Text,
  Form,
  Item,
  Label,
  Input
} from 'native-base';

class EventForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
      timeZoneOffsetInHours: (-1) * (new Date()).getTimezoneOffset() / 60
    };

    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date) {
    this.setState({date: date});

    const updatedDate = this.state.date
    this.props.eventUpdate({ prop: 'date', value: updatedDate });
  }

  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Create Event</Title>
          </Body>

        </Header>

        <Content>
          <Form>
            <FloatingInput
              label="Event Name"
              value={this.props.eventName}
              onChangeText={value => this.props.eventUpdate({ prop: 'eventName', value: value })}
            >
            </FloatingInput>
            <FloatingInput
            label="Street Address"
            value={this.props.name}
            onChangeText={value => this.props.eventUpdate({ prop: 'street', value: value })}
            >
            </FloatingInput>
            <FloatingInput
            label="City"
            value={this.props.name}
            onChangeText={value => this.props.eventUpdate({ prop: 'city', value: value })}
            >
            </FloatingInput>
            <FloatingInput
            label="Zip-Code"
            value={this.props.name}
            onChangeText={value => this.props.eventUpdate({ prop: 'zipCode', value: value })}
            >
            </FloatingInput>
          </Form>
          <DatePickerIOS
            date={this.state.date}
            mode="datetime"
            timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
            onDateChange={this.onDateChange}
          />
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  const { eventName, street, city, zipCode, date } = state.eventForm;

  return { eventName, street, city, zipCode, date };
}

export default connect(mapStateToProps, { eventUpdate })(EventForm);
