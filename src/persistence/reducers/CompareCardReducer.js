
import { CompareCardConstant } from '../constants/CompareCardConstant';
import _ from 'lodash';

const initialState = {
    status: '',
    data: {
        cards: []
    },
    error: {},
};

export function CompareCardReducer(state = initialState, action) {
    switch (action.type) {
        case CompareCardConstant.ADD_REQUEST:
            return {
                status: CompareCardConstant.ADD_REQUEST,
                data: {...state.data},
                error: {},
            };
        case CompareCardConstant.ADD_SUCCESS:
            const oldcard = [...state.data.cards];
            const newCard = { ...action.data };
            const isUpdateOrInsert = _.findIndex(oldcard, function (item) {
                return item.Id === newCard.Id;
            });

            console.log(isUpdateOrInsert)

            if (-1 === isUpdateOrInsert) {
                oldcard.push(newCard);
            } else {
                oldcard.splice(isUpdateOrInsert, 1, newCard);
            }

            return {
                status: CompareCardConstant.ADD_SUCCESS,
                data: { ...state.data, ...{ cards: oldcard } },
                error: {},
            };
        case CompareCardConstant.ADD_FAILURE:
            return {
                status: CompareCardConstant.ADD_FAILURE,
                data: {...state.data},
                error: action.data
            };
        default:
            return state;
    }
}
