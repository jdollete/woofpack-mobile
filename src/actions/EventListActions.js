import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EVENTS_FETCH_SUCCESS
} from './types';

export const eventsFetch = () => {
  const todaysDate = new Date().getTime();

  return (dispatch) => {
    firebase.database().ref(`/events/`)
      .orderByChild('timeStamp')
      .startAt(todaysDate)
      .on('value', snapshot => {
        dispatch({
          type: EVENTS_FETCH_SUCCESS,
          payload: snapshot.val()
        });
      });
  };
};
