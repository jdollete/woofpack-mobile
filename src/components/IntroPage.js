import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
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
    const {
      imageStyleView,
      buttonStyleView,
      viewStyle,
      viewButtonStyle,
      buttonStyle,
      textStyleSignUp,
      textStyleLogin,
      imageStyle,
      loginButton,
      signUpButton
    } = styles;
    return (
      <View style={viewStyle}>
        <View style={imageStyleView}>
          <Image
          style={imageStyle}
          resizeMode="contain"
          source={require('../images/WoofPackHome.png')}
          />
        </View>
        <View style={viewButtonStyle}>
          <Button
          bordered
          style={[buttonStyle, signUpButton]}
          onPress={this.onSignUpPress}
          >
          <Text style={textStyleSignUp}>CREATE ACCOUNT</Text>
          </Button>
          <Button
            block
            bordered
            style={[buttonStyle, loginButton]}
            onPress={this.onLoginPress}
          >
            <Text style={textStyleLogin}>SIGN IN</Text>
          </Button>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    flex:1,
    justifyContent: 'flex-end',
    backgroundColor: 'white',
  },
  buttonStyleView: {
  },
  imageStyleView: {
    flex: 1.75,
    justifyContent: 'center',
    alignItems: 'center'
  },
  viewButtonStyle: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    alignSelf: 'center',
    justifyContent: 'center',
    height: 60,
    width: 300,
    marginLeft:60,
    marginRight: 60,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 30
  },
  textStyleLogin: {
    color: '#FFFFFF',
    fontWeight: "600"
  },
  textStyleSignUp: {
    color: '#F49F0A',
    fontWeight: "600"
  },
  loginButton: {
    borderColor: '#F49F0A',
    backgroundColor: '#F49F0A',
  },
  signUpButton: {
    borderColor: '#F49F0A',
    backgroundColor: '#FFFFFF',
  },
  imageStyle: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
    height: null,
    marginTop: 60,
    marginLeft: 60,
    marginRight: 60,
    marginBottom: 0,
  }
});

export default IntroPage;
