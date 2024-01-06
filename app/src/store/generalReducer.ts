import { combineReducers } from '@reduxjs/toolkit';
import { userReducer as user } from './slices/User';

const generalReducer = combineReducers({ user });

export default generalReducer;