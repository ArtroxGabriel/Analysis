package com.example.analysisbackend.services;

import com.example.analysisbackend.dtos.DataSourceRecordDto;
import com.example.analysisbackend.models.DataSourceModel;
import com.example.analysisbackend.repositories.DataSourceRepository;
import com.example.analysisbackend.services.Exceptions.DataSourceNotFoundException;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;

@Service
public class DataSourceService {
    @Autowired
    DataSourceRepository dataSourceRepository;

    @Transactional
    public DataSourceModel create(DataSourceRecordDto dataSourceRecordDto) {
        var dataSource = new DataSourceModel();
        BeanUtils.copyProperties(dataSourceRecordDto, dataSource);
        return dataSourceRepository.save(dataSource);
    }

    public List<DataSourceModel> getAllDataSources() {
        return dataSourceRepository.findAll();
    }

    public DataSourceModel getByID(UUID id) {
        return dataSourceRepository.findById(id).orElseThrow(() -> new DataSourceNotFoundException("Data Source not found with id: " + id));
    }

    @Transactional
    public DataSourceModel update(UUID id, DataSourceRecordDto dataSourceRecordDto) {
        DataSourceModel dataSource = dataSourceRepository.findById(id).map(fonteDado -> {
            BeanUtils.copyProperties(dataSourceRecordDto, fonteDado);
            return fonteDado;
        }).orElseThrow(() -> new DataSourceNotFoundException("Data Source not found with id: " + id));

        return dataSourceRepository.save(dataSource);
    }

    @Transactional
    public void delete(UUID id) {
        dataSourceRepository.findById(id).ifPresentOrElse(
                fonteDado -> dataSourceRepository.delete(fonteDado),
                () -> {
                    throw new DataSourceNotFoundException("Data Source not found with ID: " + id);
                }
        );
    }

}
