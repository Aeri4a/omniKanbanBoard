import { PayloadAction } from "@reduxjs/toolkit";
import UserState from "./User.state";
import { getTokenFromLS, removeTokenFromLS } from "../../../utils/localStorageUtil";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

export const verifyToken = (state: UserState, action: PayloadAction<UserState>) => {
    const token = getTokenFromLS();
    if (token === '') {
        state.user.isAuthenticated = false;
        return;
    }

    const decoded = jwtDecode(token);
    const currentTime = Date.now() / 1000;

    state.user.isAuthenticated = decoded.exp > currentTime;
    if (decoded.exp > currentTime)
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export const logout = (state: UserState, action: PayloadAction<UserState>) => {
    state.user.isAuthenticated = false;
    removeTokenFromLS();
    delete axios.defaults.headers.common.Authorization;
}

export default {
    verifyToken,
    removeTokenFromLS
}