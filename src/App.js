import React from 'react';
import firebase from 'firebase';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCa_KXIpLkk10oxKWzetliwq0udgEQZH7I',
      authDomain: 'woof-pack.firebaseapp.com',
      databaseURL: 'https://woof-pack.firebaseio.com',
      projectId: 'woof-pack',
      storageBucket: 'woof-pack.appspot.com',
      messagingSenderId: '611180771378'
    }

    firebase.initializeApp(config);
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
            <Title>Header</Title>
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
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default App;
