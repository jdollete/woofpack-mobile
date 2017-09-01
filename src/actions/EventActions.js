import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EVENT_CREATE_SUCCESS,
  EVENT_UPDATE,
} from './types';

export const eventUpdate = ({ prop, value }) => {
  return {
    type: EVENT_UPDATE,
    payload: { prop, value }
  };
};

export const eventCreate = ({ eventName, address, date, lat, lng, timeStamp }) => {

  const { currentUser } =firebase.auth();
  const author = currentUser.uid;
  const dateString = date.toString();

  return (dispatch) => {
    firebase.database().ref(`/events/`)
      .push({ eventName, address, dateString, author, lat, lng, timeStamp })
      .then(() => {
        dispatch({ type: EVENT_CREATE_SUCCESS });
        Actions.eventList({ type: 'reset' });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
