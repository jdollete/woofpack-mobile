import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Container,
  Content,
  Button,
  Text,
  InputGroup,
  Input
} from 'native-base';
import { Actions } from 'react-native-router-flux';

import { BaseInput } from './common';

class UserLogin extends React.Component {
  constructor(props) {
    super(props);

    this.onLoginPress = this.onLoginPress.bind(this);
    this.onCancelPress = this.onCancelPress.bind(this);
  }

  onLoginPress() {
    console.log("Login");
  }

  onCancelPress() {
    Actions.intro({type: "reset"});
  }

  render() {
    const { inputContainerStyle, buttonStyle } = styles;
    return (
      <Container>

        <Content>
          <Container style={inputContainerStyle}>
            <BaseInput
              autoCorrect={false}
              iconName="ios-mail"
              placeHolder='pawsome@woofpack.com'
            />
            <BaseInput
              secureTextEntry={true}
              iconName="ios-key"
              placeHolder='paaawsword'
            />
            <Button
              block
              success
              style={buttonStyle}
              onPress={this.onLoginPress}
            >
              <Text>Login</Text>
            </Button>
            <Button
              block
              danger
              style={buttonStyle}
              onPress={this.onCancelPress}
            >
              <Text>Cancel</Text>
            </Button>
          </Container>
        </Content>

      </Container>
    );
  }
}

const styles = StyleSheet.create({
  inputContainerStyle: {
    padding: 15,
    justifyContent: 'center'
  },
  buttonStyle: {
    marginTop: 5,
    marginBottom: 5
  }
});

export default UserLogin;
