package com.example.analysisbackend.controllers;

import com.example.analysisbackend.dtos.ColumnDataSourceRecordDto;
import com.example.analysisbackend.models.ColumnDataSourceModel;
import com.example.analysisbackend.services.ColumnDataSourceService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;


@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class ColumnDataSourceController {

    @Autowired
    ColumnDataSourceService columnDataSourceService;

    @PostMapping("/datasource/{dataSourceID}/columndatasource")
    public ResponseEntity<ColumnDataSourceModel> create(@PathVariable(value = "dataSourceID") UUID dataSourceID, @RequestBody @Valid ColumnDataSourceRecordDto columnDataSourceRecordDto) {
        ColumnDataSourceModel columnDataSource = columnDataSourceService.create(dataSourceID, columnDataSourceRecordDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(columnDataSource);
    }

    @GetMapping("/datasource/{dataSourceID}/columndatasource")
    public ResponseEntity<List<ColumnDataSourceModel>> getAllColumnDataSource(@PathVariable(value = "dataSourceID") UUID dataSourceID) {
        List<ColumnDataSourceModel> columnDataSourceList = columnDataSourceService.getAllColumns(dataSourceID);
        return ResponseEntity.status(HttpStatus.OK).body(columnDataSourceList);
    }

    @GetMapping("/columndatasource/{id}")
    public ResponseEntity<ColumnDataSourceModel> getByID(@PathVariable(value = "id") UUID id) {
        ColumnDataSourceModel columnDataSource = columnDataSourceService.getByID(id);
        return ResponseEntity.status(HttpStatus.OK).body(columnDataSource);
    }

    @PutMapping("/columndatasource/{id}")
    public ResponseEntity<Object> updated(@PathVariable(value = "id") UUID id, @RequestBody @Valid ColumnDataSourceRecordDto columnDataSourceRecordDto) {
        ColumnDataSourceModel columnDataSourceUpdated = columnDataSourceService.update(id, columnDataSourceRecordDto);
        return ResponseEntity.status(HttpStatus.OK).body(columnDataSourceUpdated);
    }

    @DeleteMapping("/columndatasource/{id}")
    public ResponseEntity<Object> delete(@PathVariable(value = "id") UUID id) {
        columnDataSourceService.delete(id);
        return ResponseEntity.status(HttpStatus.OK).body("Column Data Source deleted successfully");
    }
}
