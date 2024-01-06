import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import TaskState from "./Task.state";

import {
    getTasksByTeam,
    createTask,
    updateTask,
    deleteTask
} from './Task.thunks';

const buildTaskExtraReducers = (builder: ActionReducerMapBuilder<TaskState>) => {
    builder
        .addCase(getTasksByTeam.pending, (state) => {
            state.loading = true;
        })
        .addCase(getTasksByTeam.fulfilled, (state, action) => {
            state.loading = false;
            state.tasks = action.payload;
        })
        .addCase(getTasksByTeam.rejected, (state) => {
            state.loading = false;
        })

        .addCase(createTask.pending, (state) => {
            state.loading = true;
        })
        .addCase(createTask.fulfilled, (state, action) => {
            state.loading = false;
            state.tasks.push(action.payload);
        })
        .addCase(createTask.rejected, (state) => {
            state.loading = false;
        })

        .addCase(updateTask.pending, (state) => {
            state.loading = true;
        })
        .addCase(updateTask.fulfilled, (state, action) => {
            state.loading = false;
            const { id } = action.payload;
            state.tasks = state.tasks.map(task =>
                task.id === id ? action.payload : task
            );
        })
        .addCase(updateTask.rejected, (state) => {
            state.loading = false;
        })

        .addCase(deleteTask.pending, (state) => {
            state.loading = true;
        })
        .addCase(deleteTask.fulfilled, (state, action) => {
            state.loading = false;
            state.tasks = state.tasks.filter((task) => task.id !== action.meta.arg);
        })
        .addCase(deleteTask.rejected, (state) => {
            state.loading = false;
        })
};

export default buildTaskExtraReducers;
