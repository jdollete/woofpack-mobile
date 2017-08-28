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


class EventList extends React.Component {
  constructor(props) {
    super(props);

    this.onCreateEventPress = this.onCreateEventPress.bind(this);
  }

  onCreateEventPress() {
    Actions.eventCreate();
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
            <Title>Woof Pack</Title>
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
            <Button full onPress={this.onCreateEventPress}>
              <Text>Create Event</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default EventList;
