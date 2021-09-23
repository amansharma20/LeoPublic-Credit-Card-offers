/* eslint-disable prettier/prettier */
import { SessionConstant } from '../constants/SessionConstant';

const initialState = {
  data: {
    loggedIn: false,
    user: {},
    isSignedup: false
  },
};

export function SessionReducer(state = initialState, action) {
  switch (action.type) {
    case SessionConstant.SESSION_REQUEST:
      return {
        status: SessionConstant.SESSION_REQUEST,
        data: { ...state.data },
        code: {},
      };
    case SessionConstant.SESSION_SUCCESS:
      return {
        status: SessionConstant.SESSION_SUCCESS,
        data: { ...state.data, loggedIn: action.data.loggedIn, isSignedup: action.data.loggedIn, ...{ user: action.data } },
        code: {},
      };
    case SessionConstant.SESSION_FAILURE:
      return {
        status: SessionConstant.SESSION_FAILURE,
        data: { ...state.data, ...{ loggedIn: false, user: {} } },
        code: {},
      };

      case SessionConstant.SET_SESSION_REQUEST:
        return {
          status: SessionConstant.SET_SESSION_REQUEST,
          data: { ...state.data },
          code: {},
        };
      case SessionConstant.SET_SESSION_SUCCESS:
        return {
          status: SessionConstant.SET_SESSION_SUCCESS,
          data: { ...state.data, loggedIn: action.data.loggedIn, isSignedup: action.data.loggedIn, ...{ user: action.data } },
          code: {},
        };
      case SessionConstant.SET_SESSION_FAILURE:
        return {
          status: SessionConstant.SET_SESSION_FAILURE,
          data: { ...state.data, ...{ loggedIn: false, user: {} } },
          code: {},
        };
        
    default:
      return state;
  }
}