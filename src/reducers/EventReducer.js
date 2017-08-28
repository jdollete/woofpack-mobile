import {
  EVENT_CREATE_SUCCESS,
  EVENT_UPDATE
} from '../actions/types';

const INITIAL_STATE = {
  eventName: '',
  street: '',
  city: '',
  zipCode: '',
  date: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EVENT_CREATE_SUCCESS:
      return INITIAL_STATE;
    case EVENT_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
};
