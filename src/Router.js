import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';

import IntroPage from './components/IntroPage';
import UserCreate from './components/UserCreate';
import UserLogin from './components/UserLogin';
import EventList from './components/EventList';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene
          hideNavBar="true"
          key="intro"
          component={IntroPage}
        />
        <Scene
          hideNavBar="true"
          key="loginUser"
          component={UserLogin}
        />
        <Scene
          hideNavBar="true"
          key="createUser"
          component={UserCreate}
        />
        <Scene
          hideNavBar="true"
          key="eventList"
          component={EventList}
          initial
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
