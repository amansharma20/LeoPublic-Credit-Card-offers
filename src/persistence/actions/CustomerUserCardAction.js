import {RequestConstant, ResponseConstant} from '../../module/api/CommanConstant';
import {CustomerUserCardConstant} from '../constants/CustomerUserCardConstant';
import {CustomerUserCardService} from '../services/CustomerUserCardService';

export const CustomerUserCardAction = {
    getCustomerUserCard
};

function getCustomerUserCard() {
    return async dispatch => {
        dispatch(RequestConstant(CustomerUserCardConstant.CUSTOMERUSER_CARD_CONSTANT_REQUEST));
        console.log('result')
        const result = await CustomerUserCardService.getCustomerUserCard();
        console.log('result')
        console.log(result)
        console.log('result')
        dispatch(ResponseConstant(CustomerUserCardConstant.CUSTOMERUSER_CARD_CONSTANT_SUCCESS, CustomerUserCardConstant.CUSTOMERUSER_CARD_CONSTANT_FAILURE, result));
        return result;
    };
}
