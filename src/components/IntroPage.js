import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Button,
  Container,
  Content,
  Text
} from 'native-base';
import { Actions } from 'react-native-router-flux';

class IntroPage extends React.Component {
  constructor(props) {
    super(props);

    this.onLoginPress = this.onLoginPress.bind(this);
    this.onSignUpPress = this.onSignUpPress.bind(this);
  }

  onLoginPress() {
    Actions.loginUser();
  }

  onSignUpPress() {
    Actions.createUser();
  }

  render() {
    const { containerStyle, contentStyle, buttonStyle } = styles;
    return (
      <Container>
        <Content>
          <Container style={containerStyle}>
            <Button
              bordered
              style={buttonStyle}
              onPress={this.onLoginPress}
            >
              <Text>Login</Text>
            </Button>
            <Button
              bordered
              style={buttonStyle}
              onPress={this.onSignUpPress}
            >
              <Text>Sign-Up</Text>
            </Button>
          </Container>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    justifyContent: 'flex-end',
    flex: 1,
    flexDirection: 'row',
    padding: 5
  },
  buttonStyle: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 5,
    marginRight: 5

  }
});

export default IntroPage;
