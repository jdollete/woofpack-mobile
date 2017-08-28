import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EventReducer from './EventReducer';

export default combineReducers({
  auth: AuthReducer,
  eventForm: EventReducer,
  events: EventReducer
});
