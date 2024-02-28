package com.example.analysisbackend.services;

import com.example.analysisbackend.dtos.ColumnDataSourceRecordDto;
import com.example.analysisbackend.models.ColumnDataSourceModel;
import com.example.analysisbackend.repositories.ColumnDataSourceRepository;
import com.example.analysisbackend.repositories.DataSourceRepository;
import com.example.analysisbackend.services.Exceptions.ColumnDataSourceNotFoundException;
import com.example.analysisbackend.services.Exceptions.DataSourceNotFoundException;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class ColumnDataSourceService {
    @Autowired
    ColumnDataSourceRepository columnDataSourceRepository;

    @Autowired
    DataSourceRepository dataSourceRepository;

    @Transactional
    public ColumnDataSourceModel create(UUID id, ColumnDataSourceRecordDto columnDataSourceRecordDto) {
        var columnDataSource = new ColumnDataSourceModel();
        BeanUtils.copyProperties(columnDataSourceRecordDto, columnDataSource);
        return dataSourceRepository.findById(id).map(dataSource -> {
            dataSource.getColumnDataSource().add(columnDataSource);
            return columnDataSourceRepository.save(columnDataSource);
        }).orElseThrow(() -> new DataSourceNotFoundException("DataSource not found with ID: " + id));
    }

    public List<ColumnDataSourceModel> getAllColumns(UUID id) {
        var dataSource = dataSourceRepository.findById(id).orElseThrow(
                () -> new DataSourceNotFoundException("Data Source not found with ID: " + id)
        );
        return new ArrayList<ColumnDataSourceModel>(dataSource.getColumnDataSource());
    }

    public ColumnDataSourceModel getByID(UUID id) {
        return columnDataSourceRepository.findById(id).orElseThrow(() -> new ColumnDataSourceNotFoundException("Column data source not found with ID: " + id));
    }

    @Transactional
    public ColumnDataSourceModel update(UUID id, ColumnDataSourceRecordDto columnDataSourceRecordDto) {
        ColumnDataSourceModel columnDataSource = columnDataSourceRepository.findById(id).map(column -> {
            BeanUtils.copyProperties(columnDataSourceRecordDto, column);
            return column;
        }).orElseThrow(
                () -> new ColumnDataSourceNotFoundException("Column data source not found with ID: " + id)
        );
        return columnDataSourceRepository.save(columnDataSource);
    }

    @Transactional
    public void delete(UUID id) {
        columnDataSourceRepository.findById(id).ifPresentOrElse(
                column -> columnDataSourceRepository.delete(column),
                () -> {
                    throw new ColumnDataSourceNotFoundException("Column data source not found with ID: " + id);
                }
        );
    }
}
