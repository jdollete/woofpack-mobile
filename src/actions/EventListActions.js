import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EVENTS_FETCH_SUCCESS
} from './types';

export const eventsFetch = () => {

  return (dispatch) => {
    firebase.database().ref(`/events`)
      .on('value', snapshot => {
        console.log(snapshot.val());
        dispatch({
          type: EVENTS_FETCH_SUCCESS,
          payload: snapshot.val()
        });
      });
  };
};
