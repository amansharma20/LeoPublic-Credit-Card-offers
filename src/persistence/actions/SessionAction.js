/* eslint-disable prettier/prettier */
import { SessionConstant } from '../constants/SessionConstant';
import { SessionService } from '../services/SessionService';
import {
  RequestConstant,
  ResponseConstant,
} from '../../utils/constants/CommanConstants';

export const SessionAction = { getSession, setSession };

function getSession() {
  return async dispatch => {
    dispatch(RequestConstant(SessionConstant.SESSION_REQUEST, {}));
    var result = await SessionService.getSession();
    dispatch(
      ResponseConstant(
        SessionConstant.SESSION_SUCCESS,
        SessionConstant.SESSION_FAILURE,
        result,
      ),
    );
  };
}


function setSession(data) {
  return async dispatch => {
    dispatch(RequestConstant(SessionConstant.SET_SESSION_REQUEST, {}));
    var result = await SessionService.setSession(data);
    dispatch(
      ResponseConstant(
        SessionConstant.SET_SESSION_SUCCESS,
        SessionConstant.SET_SESSION_FAILURE,
        result,
      ),
    );
  };
}
