import { pathReducer } from './pathReducer';
import { combineReducers } from 'redux';

export const rootReducer=combineReducers({
  path: pathReducer
})