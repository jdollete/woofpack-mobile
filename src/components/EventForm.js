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
  Form,
} from 'native-base';

class EventForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
      timeZoneOffsetInHours: (-1) * (new Date()).getTimezoneOffset() / 60,
      todaysDate: new Date(),
      timeZoneOffsetInHours: (-1) * (new Date()).getTimezoneOffset() / 60
    };

    this.onDateChange = this.onDateChange.bind(this);
  }

  componentWillMount() {
    const date = this.state.date;
    this.props.eventUpdate({ prop: 'date', value: date });
  }

  onDateChange(date) {
    this.setState({date: date});

    this.props.eventUpdate({ prop: 'date', value: date });
  }

  render() {
    console.log(this.props);
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
              maxLength={35}
              onChangeText={ value => this.props.eventUpdate({ prop: 'eventName', value: value })}
            >
            </FloatingInput>
            <FloatingInput
            label="Address (Street, City, State, Zip)"
            value={this.props.street}
            onChangeText={ value => this.props.eventUpdate({ prop: 'address', value: value })}
            >
            </FloatingInput>
            <FloatingInput
            label="Description"
            value={this.props.street}
            onChangeText={ value => this.props.eventUpdate({ prop: 'description', value: value })}
            >
            </FloatingInput>
          </Form>
          <DatePickerIOS
            date={this.state.date}
            minimumDate={this.state.todaysDate}
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
  const { eventName, address, date, description } = state.eventForm;

  return { eventName, address, date, description };
}

export default connect(mapStateToProps, { eventUpdate })(EventForm);
