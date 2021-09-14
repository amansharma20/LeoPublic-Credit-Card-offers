import { RequestConstant, ResponseConstant } from '../../module/api/CommanConstant';
import { CompareCardConstant } from '../constants/CompareCardConstant';

export const CompareCardAction = {
    addItem
};

function addItem(data) {
    return async dispatch => {
        dispatch(RequestConstant(CompareCardConstant.ADD_REQUEST, data));
        const result = {
            success: true,
            data: data,
        };
        dispatch(ResponseConstant(CompareCardConstant.ADD_SUCCESS, CompareCardConstant.ADD_FAILURE, result));
    };
}

function removeItem(data) {
    return async dispatch => {
        dispatch(RequestConstant(CompareCardConstant.COMPARE_CARD_CONSTANT_REQUEST, data));
        const result = {
            success: true,
            data: data,
        };
        dispatch(ResponseConstant(CompareCardConstant.COMPARE_CARD_CONSTANT_SUCCESS, CompareCardConstant.COMPARE_CARD_CONSTANT_FAILURE, result));
    };
}

function resetCart(data) {
    return async dispatch => {
        dispatch(RequestConstant(CompareCardConstant.COMPARE_CARD_CONSTANT_REQUEST, data));
        const result = {
            success: true,
            data: data,
        };
        dispatch(ResponseConstant(CompareCardConstant.COMPARE_CARD_CONSTANT_SUCCESS, CompareCardConstant.COMPARE_CARD_CONSTANT_FAILURE, result));
    };
}