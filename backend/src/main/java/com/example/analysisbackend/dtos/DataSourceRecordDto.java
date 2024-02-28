package com.example.analysisbackend.dtos;

import jakarta.validation.constraints.NotBlank;

public record DataSourceRecordDto(@NotBlank String name, @NotBlank String description) {
}
