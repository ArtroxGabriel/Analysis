package com.example.analysisbackend.services.Exceptions;

public class AnalysisNotFoundException extends RuntimeException {
    public AnalysisNotFoundException(String msg) {
        super(msg);
    }
}
