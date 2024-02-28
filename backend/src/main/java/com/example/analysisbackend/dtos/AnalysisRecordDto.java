package com.example.analysisbackend.dtos;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record AnalysisRecordDto(@NotBlank String name, @NotBlank String description, @NotNull Integer status) {


}
