import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  USERNAME_CHANGED,
  REPEAT_PASSWORD_CHANGED,
  NAME_CHANGED,
  LAST_NAME_CHANGED,
  PHONE_CHANGED,
  WEBSITE_CHANGED,
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  username: '',
  password: '',
  repeatPassword: '',
  firstName: '',
  lastName: '',
  phone: '',
  website: '',
  user: null,
  error: '',
  loading: false,
  role: 'user'
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USERNAME_CHANGED:
      return { ...state, username: action.payload };
    case REPEAT_PASSWORD_CHANGED:
      return { ...state, repeatPassword: action.payload };
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case NAME_CHANGED:
      return { ...state, firstName: action.payload };
    case LAST_NAME_CHANGED:
      return { ...state, lastName: action.payload };
    case PHONE_CHANGED:
      return { ...state, phone: action.payload };
    case WEBSITE_CHANGED:
      return { ...state, website: action.payload };
    case REGISTER_USER:
      return { ...state, loading: true, error: '' };
    case REGISTER_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };
    case REGISTER_USER_FAIL:
      return {
        ...state,
        error: 'Registration Failed.', //get messages from another file
        password: '',
        loading: false
      };
    default:
      return state;
  }
};
