
import {AuthConstants} from '../constants/AuthConstants';

const initialState = {
    status: '',
    data: {
        loggedIn: false,
        user: {}
    },
    error: {},
};

export function AuthReducer(state = initialState, action) {
    switch (action.type) {
        
        default:
            return state;
    }
}
