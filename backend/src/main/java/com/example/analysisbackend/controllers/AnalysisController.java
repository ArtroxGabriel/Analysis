package com.example.analysisbackend.controllers;

import com.example.analysisbackend.dtos.AnalysisRecordDto;
import com.example.analysisbackend.models.AnalysisModel;
import com.example.analysisbackend.services.AnalysisService;
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
public class AnalysisController {

    @Autowired
    AnalysisService analysisService;


    @PostMapping("/datasource/{dataSourceID}/analysis")
    public ResponseEntity<AnalysisModel> create(@PathVariable(value = "dataSourceID") UUID dataSourceID, @RequestBody @Valid AnalysisRecordDto analysisRecordDto) {
        var analiseModel = analysisService.create(dataSourceID, analysisRecordDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(analiseModel);
    }

    @GetMapping("/analysis")
    public ResponseEntity<List<AnalysisModel>> getAllAnalysis() {
        var list = analysisService.getAllAnalysis();
        return ResponseEntity.ok().body(list);
    }

    @GetMapping("/analysis/{id}")
    public ResponseEntity<AnalysisModel> getByID(@PathVariable(value = "id") UUID id) {
        var analysis = analysisService.getByID(id);
        return ResponseEntity.ok().body(analysis);

    }

    @PutMapping("/analysis/{id}")
    public ResponseEntity<AnalysisModel> update(@PathVariable(value = "id") UUID id,
                                                @RequestBody @Valid AnalysisRecordDto analysisRecordDto) {

        var analise = analysisService.update(id, analysisRecordDto);
        return ResponseEntity.ok().body(analise);

    }

    @DeleteMapping("/analysis/{id}")
    public ResponseEntity<String> delete(@PathVariable(value = "id") UUID id) {

        analysisService.delete(id);
        return ResponseEntity.status(HttpStatus.OK).body("Analysis deleted successfully");

    }
}
