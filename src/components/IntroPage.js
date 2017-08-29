import React from 'react';
import { StyleSheet, View } from 'react-native';
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
    const { viewStyle, viewButtonStyle, buttonStyle, textStyle } = styles;
    return (
      <View style={viewStyle}>

          <View style={viewButtonStyle}>
            <Button
              bordered
              style={buttonStyle}
              onPress={this.onLoginPress}
            >
              <Text style={textStyle}>Login</Text>
            </Button>
            <Button
              bordered
              style={buttonStyle}
              onPress={this.onSignUpPress}
            >
              <Text style={textStyle}>Sign-Up</Text>
            </Button>
          </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    flex:1,
    justifyContent: "flex-end",
    backgroundColor: "#F49F0A"
  },
  viewButtonStyle: {
    flexDirection: 'row',
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 20
  },
  buttonStyle: {
    borderColor: "#00A6A6",
    backgroundColor: "#00A6A6",
    flex: 1,
    justifyContent: 'center',
    marginLeft: 5,
    marginRight: 5
  },
  textStyle: {
    color: "#F49F0A"
  }

});

export default IntroPage;
