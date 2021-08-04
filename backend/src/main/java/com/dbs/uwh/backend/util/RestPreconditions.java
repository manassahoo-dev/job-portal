package com.dbs.uwh.backend.util;

import com.dbs.uwh.backend.exception.MyBadRequestException;
import com.dbs.uwh.backend.exception.MyConflictException;
import com.dbs.uwh.backend.exception.MyForbiddenException;
import com.dbs.uwh.backend.exception.MyResourceNotFoundException;

public final class RestPreconditions {

    private RestPreconditions() {
        throw new AssertionError();
    }

    public static <T> T checkNotNull(final T reference) {
        return checkNotNull(reference, null);
    }

    public static <T> T checkNotNull(final T reference, final String message) {
        if (reference == null) {
            throw new MyResourceNotFoundException(message);
        }
        return reference;
    }

    public static <T> T checkRequestElementNotNull(final T reference) {
        return checkRequestElementNotNull(reference, null);
    }

    public static <T> T checkRequestElementNotNull(final T reference, final String message) {
        if (reference == null) {
            throw new MyBadRequestException(message);
        }
        return reference;
    }

    public static void checkRequestState(final boolean expression) {
        checkRequestState(expression, null);
    }

    public static void checkRequestState(final boolean expression, final String message) {
        if (!expression) {
            throw new MyConflictException(message);
        }
    }

    public static void checkIfBadRequest(final boolean expression) {
        checkIfBadRequest(expression, null);
    }

    public static void checkIfBadRequest(final boolean expression, final String message) {
        if (!expression) {
            throw new MyBadRequestException(message);
        }
    }

    public static void checkFound(final boolean expression) {
        checkFound(expression, null);
    }

    public static void checkFound(final boolean expression, final String message) {
        if (!expression) {
            throw new MyResourceNotFoundException(message);
        }
    }

    public static <T> T checkFound(final T resource) {
        return checkFound(resource, null);
    }

    public static <T> T checkFound(final T resource, final String message) {
        if (resource == null) {
            throw new MyResourceNotFoundException(message);
        }

        return resource;
    }

    public static void checkAllowed(final boolean expression) {
        checkAllowed(expression, null);
    }

    public static void checkAllowed(final boolean expression, final String message) {
        if (!expression) {
            throw new MyForbiddenException(message);
        }
    }

}

 
