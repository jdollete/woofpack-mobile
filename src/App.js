import React from 'react';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';
import { Container } from 'native-base';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCa_KXIpLkk10oxKWzetliwq0udgEQZH7I',
      authDomain: 'woof-pack.firebaseapp.com',
      databaseURL: 'https://woof-pack.firebaseio.com',
      projectId: 'woof-pack',
      storageBucket: 'woof-pack.appspot.com',
      messagingSenderId: '611180771378'
    }

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

    return (
      <Provider store={store}>
        <Container>
          <Router />
        </Container>
      </Provider>
    );
  }
}

export default App;
