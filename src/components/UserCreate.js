import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Image } from 'react-native';
import {
  Container,
  Content,
  Button,
  Text,
  InputGroup,
  Input
} from 'native-base';
import { BaseInput, Spinner } from './common';
import { Actions } from 'react-native-router-flux';
import { emailChanged, passwordChanged, createUser, userLoad, clearError } from '../actions';


class UserCreate extends React.Component {
  constructor(props) {
    super(props);

    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onSignUpPress = this.onSignUpPress.bind(this);
    this.onCancelPress = this.onCancelPress.bind(this);
  }

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  };

  onSignUpPress() {
    const { email, password } = this.props
    this.props.createUser({ email, password });
  }

  onCancelPress() {
    this.props.clearError();
    Actions.intro({type: "reset"});
  }

  renderButton() {
    const { buttonStyle, textStyle } = styles;

    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <Container>
        <Button
          block
          success
          style={buttonStyle}
          onPress={this.onSignUpPress}
        >
          <Text style={textStyle}>Sign-Up</Text>
        </Button>
        <Button
          block
          danger
          style={buttonStyle}
          onPress={this.onCancelPress}
        >
          <Text style={textStyle}>Cancel</Text>
        </Button>
      </Container>
    );
  }

  render() {
    const { errorTextStyle, viewStyle } = styles;
    return (
          <View style={viewStyle}>
            <View>
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
            </View>
          </View>

    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    flex:1,
    justifyContent: 'center',
  },
  buttonStyle: {
    borderColor: '#F49F0A',
    backgroundColor: '#F49F0A',
    marginLeft: 30,
    marginRight:30,
    marginTop: 5,
    marginBottom: 5
  },
  errorTextStyle: {
    fontSize: 10,
    alignSelf: 'center',
    color: 'red'
  },
  textStyle: {
    color: 'white',
    fontWeight: "600"
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

export default connect(mapStateToProps, { emailChanged, passwordChanged, createUser, userLoad, clearError })(UserCreate);
