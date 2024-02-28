package com.example.analysisbackend.services.Exceptions;

public class ColumnDataSourceNotFoundException extends RuntimeException {
    public ColumnDataSourceNotFoundException(String msg) {
        super(msg);
    }
}
