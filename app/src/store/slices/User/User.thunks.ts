import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../..";
import { InviteCodeDTO, JwtToken, LoginPayload, Team, User } from "../../../types/common";

const URL = 'http://localhost:8080';

export const getAuthenticate = createAsyncThunk<JwtToken, LoginPayload, { state: RootState }>(
    'user/auth', (loginData, { rejectWithValue }) =>
        axios.post(`${URL}/auth/login`, loginData)
            .then(res => res.data)
            .catch(err => rejectWithValue(err.response.data))
);

export const getCurrentUser = createAsyncThunk<User, void, { state: RootState }>(
    'user/getCurrent', (_, { rejectWithValue }) =>
        axios.get(`${URL}/api/user`)
            .then(res => res.data)
            .catch(err => rejectWithValue(err.response.data))
);

export const getUsersByTeam = createAsyncThunk<User[], void, { state: RootState }>(
    'user/getByTeam', (_, { rejectWithValue }) =>
        axios.get(`${URL}/api/user/allByTeam`)
            .then(res => res.data)
            .catch(err => rejectWithValue(err.response.data))
);

export const joinTeam = createAsyncThunk<Team, InviteCodeDTO, { state: RootState }>(
    'user/joinTeam', (payload, { rejectWithValue }) =>
        axios.post(`${URL}/api/user/joinTeam`, payload)
            .then(res => res.data)
            .catch(err => rejectWithValue(err.response.data))
);

export const createTeam = createAsyncThunk<Team, { name: string; }, { state: RootState }>(
    'user/createTeam', (payload, { rejectWithValue }) =>
        axios.post(`${URL}/api/team`, payload)
            .then(res => res.data)
            .catch(err => rejectWithValue(err.response.data))
);