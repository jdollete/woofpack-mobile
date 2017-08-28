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
import { BaseInput } from './common';
import { Actions } from 'react-native-router-flux';

class UserCreate extends React.Component {
  constructor(props) {
    super(props);

    this.onSignUpPress = this.onSignUpPress.bind(this);
    this.onCancelPress = this.onCancelPress.bind(this);
  }

  onSignUpPress() {
    console.log("signup");
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
              onPress={this.onSignUpPress}
            >
              <Text>Sign-Up</Text>
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

export default UserCreate;
