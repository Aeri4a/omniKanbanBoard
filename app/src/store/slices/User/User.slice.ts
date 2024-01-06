import { createSlice } from '@reduxjs/toolkit';
import * as userThunks from './User.thunks';
import buildExtraReducers from './User.extraReducers';
import { RootState } from '../..';
import UserState from './User.state';

const initialState: UserState = {
    user: {
        loading: false,
        authenticated: false,
        
        id: null,
        username: null,
        team: null
    },
    users: null
};

const slice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: buildExtraReducers
});

export const userReducer = slice.reducer;
export const userSelector = (state: RootState) => state.user;
export const userActions = { ...slice.actions, ...userThunks };