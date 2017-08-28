import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAIL,
  LOGIN_USER
} from './types';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
  // redux-thunk will do asynchronous dispatch
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(()=> {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => loginUserSuccess(dispatch, user))
          .catch(() => loginUserFail(dispatch));
      });
  }
};

export const createUser = ({ email, password }) => {
  return(dispatch) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(user => createUserSuccess(dispatch, user))
      .catch((error) => createUserFail(dispatch, error));
  }
}

const createUserFail = (dispatch, error) => {
  console.log(error);
  dispatch({
    type: CREATE_USER_FAIL,
    payload: error.message
  });
}

const createUserSuccess = (dispatch, user) => {
  console.log("User Create Success");
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });
}
