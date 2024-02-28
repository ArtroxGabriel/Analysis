package com.example.analysisbackend.services;

import com.example.analysisbackend.dtos.AnalysisRecordDto;
import com.example.analysisbackend.models.AnalysisModel;
import com.example.analysisbackend.repositories.AnalysisRepository;
import com.example.analysisbackend.repositories.DataSourceRepository;
import com.example.analysisbackend.services.Exceptions.AnalysisNotFoundException;
import com.example.analysisbackend.services.Exceptions.DataSourceNotFoundException;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;

@Service
public class AnalysisService {
    @Autowired
    AnalysisRepository analysisRepository;

    @Autowired
    DataSourceRepository dataSourceRepository;

    @Transactional
    public AnalysisModel create(UUID dataSourceID, AnalysisRecordDto analysisRecordDto) {
        var analise = new AnalysisModel();
        BeanUtils.copyProperties(analysisRecordDto, analise);
        return dataSourceRepository.findById(dataSourceID).map(datasource -> {
            analise.setDataSource(datasource);
            datasource.getAnalysis().add(analise);
            return analysisRepository.save(analise);
        }).orElseThrow(() -> new DataSourceNotFoundException("DataSource not found with ID: " + dataSourceID));
    }

    public List<AnalysisModel> getAllAnalysis() {
        return analysisRepository.findAll();
    }

    public AnalysisModel getByID(UUID id) {
        return analysisRepository.findById(id).orElseThrow(() -> new AnalysisNotFoundException("Analysis not found with ID: " + id));
    }

    @Transactional
    public AnalysisModel update(UUID id, AnalysisRecordDto analysisRecordDto) {
        AnalysisModel analiseUpdated = analysisRepository.findById(id).map(analise -> {
            BeanUtils.copyProperties(analysisRecordDto, analise);
            return analise;
        }).orElseThrow(() -> new AnalysisNotFoundException("Analysis not found with ID: " + id));

        return analysisRepository.save(analiseUpdated);
    }

    @Transactional
    public void delete(UUID id) {
        analysisRepository.findById(id).ifPresentOrElse(
                analysis -> analysisRepository.delete(analysis),
                () -> {
                    throw new AnalysisNotFoundException("Analysis not found with ID: " + id);
                }
        );
    }

}
