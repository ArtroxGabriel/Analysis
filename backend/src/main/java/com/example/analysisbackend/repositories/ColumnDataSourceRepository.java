package com.example.analysisbackend.repositories;

import com.example.analysisbackend.models.ColumnDataSourceModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface ColumnDataSourceRepository extends JpaRepository<ColumnDataSourceModel, UUID> {
}
