import { combineReducers } from '@reduxjs/toolkit';
import { userReducer as user } from './slices/User';
import { taskReducer as task } from './slices/Task';

const generalReducer = combineReducers({ user, task });

export default generalReducer;