import React from 'react';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { Text } from 'react-native';
import { Content, Button } from 'native-base';

class DrawerItems extends React.Component {
  constructor(props) {
    super(props);

    this.logOut = this.logOut.bind(this);
  }

  logOut() {
    firebase.auth().signOut();
    Actions.intro({ type: 'reset' });
  };

  render() {
    return (
          <Content style={{backgroundColor:'#FFFFFF'}}>
            <Button primary rounded onPress={this.logOut}>
              <Text>Log Out</Text>
            </Button>
          </Content>
    );
  }
}

export default DrawerItems;
