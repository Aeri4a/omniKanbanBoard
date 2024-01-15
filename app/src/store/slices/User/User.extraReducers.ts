import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import UserState from "./User.state";

import {
    getAuthenticate,
    getCurrentUser,
    getUsersByTeam,
    joinTeam,
    createTeam,
    leaveTeam
} from "./User.thunks";

const buildUserExtraReducers = (builder: ActionReducerMapBuilder<UserState>) => {
    builder
        .addCase(getAuthenticate.pending, (state) => {
            state.user.loading = true;
        })
        .addCase(getAuthenticate.fulfilled, (state) => {
            state.user.loading = false;
            state.user.isAuthenticated = true;
        })
        .addCase(getAuthenticate.rejected, (state) => {
            state.user.loading = false;
            state.user.isAuthenticated = false;
        })

        .addCase(getCurrentUser.pending, (state) => {
            state.user.loading = true;
        })
        .addCase(getCurrentUser.fulfilled, (state, action) => {
            state.user.loading = false;
            const { id, username, team } = action.payload;
            state.user.id = id;
            state.user.username = username;
            state.user.team = team;
        })
        .addCase(getCurrentUser.rejected, (state) => {
            state.user.loading = false;
            state.user.isAuthenticated = false;
        })

        .addCase(getUsersByTeam.fulfilled, (state, action) => {
            state.users = action.payload;
        })

        .addCase(joinTeam.pending, (state) => {
            state.user.loading = true;
        })
        .addCase(joinTeam.fulfilled, (state, action) => {
            state.user.loading = false;
            state.user.team = action.payload;
        })
        .addCase(joinTeam.rejected, (state) => {
            state.user.loading = false;
        })

        .addCase(createTeam.pending, (state) => {
            state.user.loading = true;
        })
        .addCase(createTeam.fulfilled, (state, action) => {
            state.user.loading = false;
            state.user.team = action.payload;
        })
        .addCase(createTeam.rejected, (state) => {
            state.user.loading = false;
        })

        .addCase(leaveTeam.fulfilled, (state) => {
            state.user.team = null;
        })
};

export default buildUserExtraReducers;