/* eslint-disable prettier/prettier */
import {AuthService} from '../services/AuthService';
import {AuthConstants} from '../constants/AuthConstants';
import {RequestConstant, ResponseConstant} from '../../utils/constants/CommanConstants';

export const AuthActions = {
  signIn,
};

function signIn(url, data) {
  return async dispatch => {
    dispatch(RequestConstant(AuthConstants.SIGNIN_REQUEST, data));
    const result = await AuthService.signIn(url, data);
    dispatch(
      ResponseConstant(
        AuthConstants.SIGNIN_SUCCESS,
        AuthConstants.SIGNIN_FAILURE,
        result,
      ),
    );
    return result;
  };
}

  