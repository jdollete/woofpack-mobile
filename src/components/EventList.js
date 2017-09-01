import React from 'react';
import firebase from 'firebase';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { eventsFetch } from '../actions';
import EventListItem from './EventListItem'
import { Drawer } from 'native-base';
import DrawerItems from './DrawerItems';
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
    this.closeDrawer = this.closeDrawer.bind(this);
    this.openDrawer = this.openDrawer.bind(this);
  }

  componentWillMount() {
    this.props.eventsFetch();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.loggedIn();
    this.createDataSource(nextProps);
  }

  orderEvents(events) {
    const todaysDate = new Date().getTime();
    const orderEvents = _.sortBy(events, 'timeStamp');

    return orderEvents;
  }

  createDataSource({ events }) {
    const sortedEvents = this.orderEvents(events);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(sortedEvents);
  }

  renderRow(event) {
    return <EventListItem event={event} />
  }

  onCreateEventPress() {
    Actions.eventCreate();
  }

  closeDrawer() {
    this.drawer._root.close()
  };

  openDrawer() {
    this.drawer._root.open()
  };

  loggedIn() {
    const { currentUser } = firebase.auth();

    if (currentUser === null) {
      Actions.intro({ type: 'reset'});
    }
  }

  render() {
    return (
      <Drawer
        ref={(ref) => { this.drawer = ref; }}
        content={<DrawerItems />}
        onClose={() => this.closeDrawer()} >

        <Container>
          <Header>
            <Left>
              <Button transparent onPress={this.openDrawer}>
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
          </Content>
          <Footer>
            <FooterTab>
              <Button full onPress={this.onCreateEventPress}>
                <Text>Create Event</Text>
              </Button>
            </FooterTab>
          </Footer>
        </Container>

      </Drawer>
    );
  }
}

const mapStateToProps = (state) => {
  const events = _.map(state.events, (val, uid) => {

    return { ...val, uid };

  });

  return { events };
};

export default connect(mapStateToProps, { eventsFetch })(EventList);
