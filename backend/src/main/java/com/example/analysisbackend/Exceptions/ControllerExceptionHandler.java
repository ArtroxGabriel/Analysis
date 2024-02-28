package com.example.analysisbackend.Exceptions;

import com.example.analysisbackend.services.Exceptions.AnalysisNotFoundException;
import com.example.analysisbackend.services.Exceptions.ColumnDataSourceNotFoundException;
import com.example.analysisbackend.services.Exceptions.DataSourceNotFoundException;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.time.Instant;

@ControllerAdvice
public class ControllerExceptionHandler {

    @ExceptionHandler(AnalysisNotFoundException.class)
    public ResponseEntity<StandardError> analysisNotFoundException(AnalysisNotFoundException ae, HttpServletRequest request) {
        StandardError err = new StandardError(
                Instant.now(),
                HttpStatus.NOT_FOUND.value(),
                "Analysis not found",
                ae.getMessage(),
                request.getRequestURI()
        );

        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(err);
    }

    @ExceptionHandler(DataSourceNotFoundException.class)
    public ResponseEntity<StandardError> dataSourceNotFoundException(DataSourceNotFoundException ae, HttpServletRequest request) {
        StandardError err = new StandardError(
                Instant.now(),
                HttpStatus.NOT_FOUND.value(),
                "Data source not found",
                ae.getMessage(),
                request.getRequestURI()
        );

        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(err);
    }

    @ExceptionHandler(ColumnDataSourceNotFoundException.class)
    public ResponseEntity<StandardError> columnDataSourceNotFoundException(ColumnDataSourceNotFoundException ae, HttpServletRequest request) {
        StandardError err = new StandardError(
                Instant.now(),
                HttpStatus.NOT_FOUND.value(),
                "Column data source not found",
                ae.getMessage(),
                request.getRequestURI()
        );

        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(err);
    }

}
