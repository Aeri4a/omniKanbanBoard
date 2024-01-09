import { PayloadAction } from "@reduxjs/toolkit";
import UserState from "./User.state";
import { getTokenFromLS } from "../../../utils/localStorageUtil";
import { jwtDecode } from "jwt-decode";

export const verifyToken = (state: UserState, action: PayloadAction<UserState>) => {
    const token = getTokenFromLS();
    if (token === '') {
        state.user.isAuthenticated = false;
        return;
    }

    const decoded = jwtDecode(token);
    const currentTime = Date.now() / 1000;

    state.user.isAuthenticated = decoded.exp > currentTime;
}

export default {
    verifyToken
}