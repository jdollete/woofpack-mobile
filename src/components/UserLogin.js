import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import {
  Container,
  Content,
  Button,
  Text,
  InputGroup,
  Input
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import { BaseInput, Spinner } from './common';
import { emailChanged, passwordChanged, loginUser, userLoad, clearError } from '../actions';

class UserLogin extends React.Component {
  constructor(props) {
    super(props);

    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onLoginPress = this.onLoginPress.bind(this);
    this.onCancelPress = this.onCancelPress.bind(this);
  }

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  };

  onLoginPress() {
    const { email, password } = this.props
    this.props.loginUser({ email, password });
  }

  onCancelPress() {
    this.props.clearError();
    Actions.intro({type: "reset"});
  }

  renderButton() {
    const { buttonStyle } = styles;

    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <Container>
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
    );
  }

  render() {
    const { inputContainerStyle, buttonStyle, errorTextStyle } = styles;
    return (
      <Container>

        <Content>
          <Container style={inputContainerStyle}>
            <View>
              <Text style={errorTextStyle}>
              {this.props.error}
              </Text>
            </View>
            <BaseInput
              autoCorrect={false}
              iconName="ios-mail"
              placeHolder='pawsome@woofpack.com'
              onChangeText={this.onEmailChange}
              value={this.props.email}
            />
            <BaseInput
              secureTextEntry={true}
              iconName="ios-key"
              placeHolder='paaawsword'
              onChangeText={this.onPasswordChange}
              value={this.props.password}
            />
            {this.renderButton()}
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
  },
  errorTextStyle: {
    fontSize: 10,
    alignSelf: 'center',
    color: 'red'
  }
});

const mapStateToProps = state => {
  const { email, password, error, loading } = state.auth
  return {
    email,
    password,
    error,
    loading
  };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser, userLoad, clearError })(UserLogin);
