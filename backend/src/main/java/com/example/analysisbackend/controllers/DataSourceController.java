package com.example.analysisbackend.controllers;

import com.example.analysisbackend.dtos.DataSourceRecordDto;
import com.example.analysisbackend.models.DataSourceModel;
import com.example.analysisbackend.services.DataSourceService;
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
public class DataSourceController {

    @Autowired
    DataSourceService dataSourceService;

    @PostMapping("/datasource")
    public ResponseEntity<DataSourceModel> create(@RequestBody @Valid DataSourceRecordDto dataSourceRecordDto) {
        DataSourceModel dataSource = dataSourceService.create(dataSourceRecordDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(dataSource);
    }

    @GetMapping("/datasource")
    public ResponseEntity<List<DataSourceModel>> getAllDataSource() {
        List<DataSourceModel> dataSourceList = dataSourceService.getAllDataSources();
        return ResponseEntity.status(HttpStatus.OK).body(dataSourceList);

    }


    @GetMapping("/datasource/{id}")
    public ResponseEntity<DataSourceModel> getByID(@PathVariable(value = "id") UUID id) {
        DataSourceModel dataSource = dataSourceService.getByID(id);
        return ResponseEntity.status(HttpStatus.OK).body(dataSource);
    }

    @PutMapping("/datasource/{id}")
    public ResponseEntity<DataSourceModel> update(@PathVariable(value = "id") UUID id,
                                                  @RequestBody @Valid DataSourceRecordDto dataSourceRecordDto) {
        DataSourceModel dataSourceUpdated = dataSourceService.update(id, dataSourceRecordDto);
        return ResponseEntity.status(HttpStatus.OK).body(dataSourceUpdated);
    }

    @DeleteMapping("/datasource/{id}")
    public ResponseEntity<String> delete(@PathVariable(value = "id") UUID id) {
        dataSourceService.delete(id);

        return ResponseEntity.status(HttpStatus.OK).body("Data Source deleted successfully");
    }
}