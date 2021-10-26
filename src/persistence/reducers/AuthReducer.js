/* eslint-disable prettier/prettier */
import { AuthConstants } from '../constants/AuthConstants';

const initialState = {
  status: '',
  data: {
    loggedIn: false,
    user: {},
    isSignedup: false
  },
  error: {},
};

export function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case AuthConstants.SIGNIN_REQUEST:
      return {
        status: AuthConstants.SIGNIN_REQUEST,
        data: { ...state.data, loggedIn: false, isSignedup: false, ...{ user: action.data } },
        error: {},
      };
    case AuthConstants.SIGNIN_SUCCESS:
      return {
        status: AuthConstants.SIGNIN_SUCCESS,
        data: { ...state.data, loggedIn: true, isSignedup: false, ...{ user: action.data } },
        error: {},
      };
    case AuthConstants.SIGNIN_FAILURE:
      return {
        status: AuthConstants.SIGNIN_FAILURE,
        data: { loggedIn: false, isSignedup: false, user: {} },
        error: action.data,
      };

    case AuthConstants.SIGNUP_REQUEST:
      return {
        status: AuthConstants.SIGNUP_REQUEST,
        data: { ...state.data, ...{ user: action.data } },
        error: {},
      };
    case AuthConstants.SIGNUP_SUCCESS:
      return {
        status: AuthConstants.SIGNUP_SUCCESS,
        data: { ...state.data, loggedIn: true, isSignedup: true, ...{ user: action.data } },
        error: {},
      };
    case AuthConstants.SIGNUP_FAILURE:
      return {
        status: AuthConstants.SIGNUP_FAILURE,
        data: { loggedIn: false, user: {}, isSignedup: false },
        error: action.data,
      };

    default:
      return state;
  }
}
