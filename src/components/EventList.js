import React from 'react';
import firebase from 'firebase';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { eventsFetch } from '../actions';
import EventListItem from './EventListItem'
import { StyleSheet, ListView } from 'react-native';
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

  componentWillMount() {
    this.props.eventsFetch();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.loggedIn();
    this.createDataSource(nextProps);
  }

  createDataSource({ events }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(events);
  }

  renderRow(event) {
    return <EventListItem event={event} />
  }

  onCreateEventPress() {
    Actions.eventCreate();
  }

  loggedIn() {
    const { currentUser } = firebase.auth();

    if (currentUser === null) {
      Actions.intro({ type: 'reset'});
    }
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
        <ListView
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={this.renderRow}
        />
        <Button primary rounded onPress={() => firebase.auth().signOut()}>
          <Text>Log Out</Text>
        </Button>
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

const mapStateToProps = (state) => {
  const todaysDate = new Date().getTime();

  const events = _.map(state.events, (val, uid) => {

    return { ...val, uid };

  });

  return { events };
};

export default connect(mapStateToProps, { eventsFetch })(EventList);
