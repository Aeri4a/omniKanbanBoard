import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../..";
import { Task } from "../../../types/common";

const URL = 'http://localhost:8080/api/task';

export const getTasksByTeam = createAsyncThunk<Task[], void, { state: RootState }>(
    'task/getByTeam', (_, { rejectWithValue }) =>
        axios.get(`${URL}/allByTeam`)
            .then(res => res.data)
            .catch(err => rejectWithValue(err.response.data))
);

export const createTask = createAsyncThunk<Task, Task, { state: RootState }>(
    'task/create', (taskData, { rejectWithValue }) =>
        axios.post(`${URL}`, taskData)
            .then(res => res.data)
            .catch(err => rejectWithValue(err.response.data))
);

export const updateTask = createAsyncThunk<Task, Task, { state: RootState }>(
    'task/update', (taskData, { rejectWithValue }) =>
        axios.patch(`${URL}/${taskData.id}`, taskData)
            .then(res => res.data)
            .catch(err => rejectWithValue(err.response.data))
);

export const deleteTask = createAsyncThunk<void, number, { state: RootState }>(
    'task/delete', (id) =>
        axios.delete(`${URL}/${id}`)
);
