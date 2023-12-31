package com.omniKanbanBoard.utils;

public enum TaskStatus {
    ASSIGNED("ASSIGNED"),
    IN_PROGRESS("IN_PROGRESS"),
    CODE_REVIEW("CODE_REVIEW"),
    TESTING("TESTING"),
    DONE("DONE");

    private final String value;

    TaskStatus(String value) {
        this.value = value;
    }

    public String getValue() {
        return this.value;
    }
}