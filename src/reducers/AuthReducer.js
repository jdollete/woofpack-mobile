import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAIL,
  USER_LOAD,
  CLEAR_ERROR
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case USER_LOAD:
      return { ...state, loading: true, error: '' };
    case LOGIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };
    case LOGIN_USER_FAIL:
      return { ...state, loading: false, error: 'Invalid Email/Password', password: '' };
    case CREATE_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };
    case CREATE_USER_FAIL:
      return { ...state, loading: false, error: action.payload, password: '' };
    case CLEAR_ERROR:
      return { ...state, error: '' };
    default:
      return state;
  }
};
