import React from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { StyleSheet } from 'react-native';
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
  Text
} from 'native-base';

class EventCreateForm extends React.Component {
  constructor(props) {
    super(props);

    this.onCancelPress = this.onCancelPress.bind(this);
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
          <Text>
            This is Content Section
          </Text>
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
