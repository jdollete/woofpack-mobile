import React from 'react';
import {Container, Header, Content, Footer, Title, Button, Icon, InputGroup, Input} from 'native-base';

class LoginForm2 extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Button transparent>
              <Icon name="ios-arrow-back" />
          </Button>

          <Title>Header</Title>

          <Button transparent>
              <Icon name="ios-menu" />
          </Button>
        </Header>

        <Content>
          <InputGroup borderType="underline">
            <Icon name="ios-mail" style={{color:'#384850'}}/>
            <Input
              style={{color: '#00c497'}}
              placeHolder="email@gmail.com"
            />
          </InputGroup>

          <InputGroup borderType="rounded">
            <Icon name="ios-key" style={{color:'#384850'}}/>
            <Input style={{color: '#00c497'}} />
          </InputGroup>
        </Content>

        <Footer>
        <Button transparent>
          <Icon name="ios-call" />
        </Button>

        <Title>Footer</Title>

        <Button transparent >
          <Icon name="ios-chatbubbles" />
        </Button>
        </Footer>
      </Container>
    );
  }
}

export default LoginForm2;
