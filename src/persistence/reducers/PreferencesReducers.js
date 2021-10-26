
import { PreferencesConstants } from '../constants/PreferencesConstants';
import _ from 'lodash';

const initialState = {
    status: '',
    data: {
        cards: []
    },
    error: {},
};

export function PreferencesReducer(state = initialState, action) {
    switch (action.type) {
        case PreferencesConstants.P_REQUEST:
            return {
                status: PreferencesConstants.P_REQUEST,
                data: {...state.data},
                error: {},
            };
        case PreferencesConstants.P_SUCCESS:
          
            return {
                status: CompareCardConstant.P_SUCCESS,
                data: { ...state.data, ...{ cards: oldcard } },
                error: {},
            };
        case PreferencesConstants.P_FAILURE:
            return {
                status: PreferencesConstants.P_FAILURE,
                data: {...state.data},
                error: action.data
            };
        default:
            return state;
    }
}
