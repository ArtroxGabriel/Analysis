package com.example.analysisbackend.repositories;

import com.example.analysisbackend.models.AnalysisModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface AnalysisRepository extends JpaRepository<AnalysisModel, UUID> {

}
