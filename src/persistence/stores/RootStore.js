/* eslint-disable prettier/prettier */
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import {AuthReducer} from '../reducers/AuthReducer';
import {CustomerUserCardReducer} from '../reducers/CustomerUserCardReducer';
import {SessionReducer} from '../reducers/SessionReducer';
import {CompareCardReducer} from '../reducers/CompareCardReducer';

const allReducers = combineReducers({
  AuthReducer,
  CustomerUserCardReducer,
  SessionReducer,
  CompareCardReducer
});
const applicationStore = createStore(
  allReducers,
  applyMiddleware(thunkMiddleware),
);
export default applicationStore;
