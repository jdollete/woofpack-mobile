import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAIL,
  USER_LOAD,
  CLEAR_ERROR
} from './types';

export const clearError = () => {
  return {
    type: CLEAR_ERROR
  }
};

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
    dispatch({ type: USER_LOAD });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(() => loginUserFail(dispatch));
  }
};

export const createUser = ({ email, password }) => {
  return(dispatch) => {
    dispatch({ type: USER_LOAD });

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(user => createUserSuccess(dispatch, user))
      .catch((error) => createUserFail(dispatch, error));
  }
};

const createUserFail = (dispatch, error) => {
  dispatch({
    type: CREATE_USER_FAIL,
    payload: error.message
  });
};

const createUserSuccess = (dispatch, user) => {
  var user = firebase.auth().currentUser;
  user.sendEmailVerification();

  dispatch({
    type: CREATE_USER_SUCCESS,
    payload: user
  });

  Actions.eventList({ type: 'reset' });

};

const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
};

const sendUserVerification = (dispatch, user) => {

  dispatch({
    // user.sendEmailVerification().then(function() {
    // }).catch((error) => createUserFail(dispatch, error));
  });
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });

  Actions.eventList({ type: 'reset' });

};
