import {BASE_URL} from '../urls/types';
import {
  USERNAME_CHANGED,
  REPEAT_PASSWORD_CHANGED,
  NAME_CHANGED,
  LAST_NAME_CHANGED,
  PHONE_CHANGED,
  WEBSITE_CHANGED,
  REGISTER_USER,
  REGISTER_USER_FAIL,
  REGISTER_USER_SUCCESS,
} from './types';

export const usernameChanged = text => {
  return {
    type: USERNAME_CHANGED,
    payload: text,
  };
};

export const repeatPwdChanged = text => {
  return {
    type: REPEAT_PASSWORD_CHANGED,
    payload: text,
  };
};

export const nameChanged = text => {
  return {
    type: NAME_CHANGED,
    payload: text,
  };
};

export const lastNameChanged = text => {
  return {
    type: LAST_NAME_CHANGED,
    payload: text,
  };
};

export const phoneChanged = text => {
  return {
    type: PHONE_CHANGED,
    payload: text,
  };
};

export const websiteChanged = text => {
  return {
    type: WEBSITE_CHANGED,
    payload: text,
  };
};
