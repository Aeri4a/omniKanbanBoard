import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../..";
import { InviteCodeDTO, JwtToken, LoginPayload, Team, User } from "../../../types/common";

const URL = 'http://localhost:8080';

export const getAuthenticate = createAsyncThunk<JwtToken, LoginPayload, { state: RootState }>(
    'user/auth', (loginData, { rejectWithValue }) =>
        axios.post<JwtToken>(`${URL}/auth/login`, loginData)
            .then(res => {
                const { token } = res.data;
                if (token) {
                    localStorage.setItem('jwt-token', token);
                    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
                } else {
                    localStorage.removeItem('jwt-token');
                    delete axios.defaults.headers.common.Authorization;
                    console.log('xxx');
                    throw Error("dada");
                }

                return res.data;
            })
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
