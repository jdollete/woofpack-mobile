import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Image, Keyboard, TouchableWithoutFeedback } from 'react-native';
import {
  Container,
  Button,
  Text,
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
    const {
      buttonStyle,
      textStyle,
      buttonStyleView,
      spinnerView
    } = styles;

    if (this.props.loading) {

      return (
        <View style={spinnerView}>
          <Spinner size="large" />
        </View>
      )
    }

    return (
      <View style ={buttonStyleView}>
        <Button
          block
          success
          style={buttonStyle}
          onPress={this.onLoginPress}
        >
          <Text style={textStyle}>Login</Text>
        </Button>
        <Button
          block
          danger
          style={buttonStyle}
          onPress={this.onCancelPress}
        >
          <Text style={textStyle}>Cancel</Text>
        </Button>
      </View>
    );
  }

  render() {
    const { viewStyle, errorTextStyle, imageStyleView, imageStyle, inputStyleView } = styles;
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={viewStyle}>
          <View style={imageStyleView}>
            <Image
            style={imageStyle}
            resizeMode="contain"
            source={require('../images/WoofPack_sign_in_login.png')}
            />
          </View>
          <View style={inputStyleView}>
            <View>
              <Text style={errorTextStyle}>
              {this.props.error}
              </Text>
            </View>
            <BaseInput
              autoCorrect={false}
              labelName="EMAIL:"
              keyboardType="email-address"
              // iconName="ios-mail"
              // placeHolder='pawsome@woofpack.com'
              onChangeText={this.onEmailChange}
              value={this.props.email}
            />
            <BaseInput
              secureTextEntry={true}
              // iconName="ios-key"
              // placeHolder='paaawsword'
              labelName="PASSWORD:"
              onChangeText={this.onPasswordChange}
              value={this.props.password}
            />
            {this.renderButton()}
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    flex:0.60,
    justifyContent: 'center',
  },
  imageStyleView: {
    flex: 2
  },
  buttonStyleView: {
    flex: 2,
    marginTop: 20
  },
  spinnerView: {
    flex: 2,
    marginTop: 20
  },
  inputStyleView: {
    flex: 1,
    marginRight: 20,
    marginLeft: 20,
  },
  buttonStyle: {
    borderColor: '#F49F0A',
    backgroundColor: '#F49F0A',
    height: 60,
    borderRadius: 30,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
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
  },
  imageStyle: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
    height: null,
    marginTop:50,
    marginLeft: 110,
    marginRight: 110,
    marginBottom: 0,
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
