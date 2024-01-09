import { createSlice } from '@reduxjs/toolkit';
import * as userThunks from './User.thunks';
import buildExtraReducers from './User.extraReducers';
import { RootState } from '../..';
import UserState from './User.state';
import userReducers from './User.reducers';

const initialState: UserState = {
    user: {
        loading: false,
        isAuthenticated: false,
        
        id: null,
        username: null,
        team: null
    },
    users: null
};

const slice = createSlice({
    name: 'user',
    initialState,
    reducers: { ...userReducers },
    extraReducers: buildExtraReducers
});

export const userReducer = slice.reducer;
export const userSelector = (state: RootState) => state.user;
export const userActions = { ...slice.actions, ...userThunks };