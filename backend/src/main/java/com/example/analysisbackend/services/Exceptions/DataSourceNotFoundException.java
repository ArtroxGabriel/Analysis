package com.example.analysisbackend.services.Exceptions;

public class DataSourceNotFoundException extends RuntimeException {
    public DataSourceNotFoundException(String msg) {
        super(msg);
    }
}
