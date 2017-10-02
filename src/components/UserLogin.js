import React from 'react';
import { connect } from 'react-redux';
import firebase from 'firebase';
import {
  StyleSheet,
  View,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
  AlertIOS,
  Alert
} from 'react-native';
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
    this.onForgetPress = this.onForgetPress.bind(this);
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

  onForgetPress() {
    AlertIOS.prompt(
      'Password Reset',
      'Please enter you password',
      text => {
        var auth = firebase.auth();
        var emailAddress = text;

        auth.sendPasswordResetEmail(emailAddress).then(function() {
          AlertIOS.alert(
           'Password Reset Sent',
           'Please check your email'
          );
        }).catch(function(error) {
          AlertIOS.alert(
           'Something Went Wrong',
           error.message
          );
        });
      }
    );
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
    const {
      viewStyle,
      errorTextStyle,
      imageStyleView,
      imageStyle,
      inputStyleView ,
      forgotPasswordStyle
    } = styles;
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
            <Text style={forgotPasswordStyle} onPress={this.onForgetPress}>Forgot Password?</Text>
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
    marginTop: 5
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
  forgotPasswordStyle: {
    paddingTop: 10,
    fontSize: 12,
    color: "#F49F0A",
    textAlign: 'right',
    marginRight: 10
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
