import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';


class EventView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      region: {
      latitude: 40.720524,
      longitude: -74.043169,
      latitudeDelta: 0.0032,
      longitudeDelta: 0.0011,
      }
    }

    this.onRegionChange = this.onRegionChange.bind(this);
  }

  onRegionChange(region) {
    this.setState({ region });
  }

  render() {
    console.log(this.state.region);
    const { eventName, city, dateString, street, zipCode } = this.props.event
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <MapView
            style={styles.map}
            initialRegion={this.state.region}
          />
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
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
