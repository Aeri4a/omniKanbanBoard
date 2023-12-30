package com.omniKanbanBoard.errors;

import org.zalando.problem.AbstractThrowableProblem;
import org.zalando.problem.Status;

import java.net.URI;

public class BadRequestInfoException extends AbstractThrowableProblem {

    private static final URI TYPE = URI.create("http://localhost:8080");

    public BadRequestInfoException(String errorMessage, String errorKey) {
        super(TYPE, errorMessage, Status.BAD_REQUEST, errorKey);
    }
}
