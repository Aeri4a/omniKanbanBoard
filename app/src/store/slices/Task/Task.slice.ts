import { createSlice } from '@reduxjs/toolkit';
import * as taskThunks from './Task.thunks';
import buildExtraReducers from './Task.extraReducers';
import { RootState } from '../..';
import TaskState from './Task.state';

const initialState: TaskState = {
    loading: false,
    tasks: []
};

const slice = createSlice({
    name: 'task',
    initialState,
    reducers: {},
    extraReducers: buildExtraReducers
});

export const taskReducer = slice.reducer;
export const taskSelector = (state: RootState) => state.task;
export const taskActions = { ...slice.actions, ...taskThunks };