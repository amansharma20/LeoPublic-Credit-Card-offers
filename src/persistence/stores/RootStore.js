/* eslint-disable prettier/prettier */
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import {AuthReducer} from '../reducers/AuthReducer';
import {CustomerUserCardReducer} from '../reducers/CustomerUserCardReducer';

const allReducers = combineReducers({
  AuthReducer,
  CustomerUserCardReducer
});
const applicationStore = createStore(
  allReducers,
  applyMiddleware(thunkMiddleware),
);
export default applicationStore;
