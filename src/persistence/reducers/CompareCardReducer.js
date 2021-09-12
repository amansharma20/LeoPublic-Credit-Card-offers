
import { CompareCardConstant } from '../constants/CompareCardConstant';

const initialState = {
    status: '',
    data: {
        cards: []
    },
    error: {},
};

export function CompareCardReducer(state = initialState, action) {
    switch (action.type) {
        case CompareCardConstant.COMPARE_CARD_CONSTANT_REQUEST:
            return {
                status: CompareCardConstant.COMPARE_CARD_CONSTANT_REQUEST,
                data: { ...state.data, ...{ cards: action.data } },
                error: {},
            };
        case CompareCardConstant.COMPARE_CARD_CONSTANT_SUCCESS:
            return {
                status: CompareCardConstant.COMPARE_CARD_CONSTANT_SUCCESS,
                data: { ...state.data, ...{ cards: action.data } },
                error: {},
            };
        case CompareCardConstant.COMPARE_CARD_CONSTANT_FAILURE:
            return {
                status: CompareCardConstant.COMPARE_CARD_CONSTANT_FAILURE,
                data: { cards: {} },
                error: action.data
            };
        default:
            return state;
    }
}
