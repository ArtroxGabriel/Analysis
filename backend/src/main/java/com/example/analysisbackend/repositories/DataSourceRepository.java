package com.example.analysisbackend.repositories;

import com.example.analysisbackend.models.DataSourceModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface DataSourceRepository extends JpaRepository<DataSourceModel, UUID> {

    DataSourceModel findByName(String name);
}
