import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EventFormReducer from './EventFormReducer';
import EventsReducer from './EventsReducer';

export default combineReducers({
  auth: AuthReducer,
  eventForm: EventFormReducer,
  events: EventsReducer
});
