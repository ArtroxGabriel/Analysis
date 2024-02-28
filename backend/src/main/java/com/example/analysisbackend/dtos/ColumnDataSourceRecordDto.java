package com.example.analysisbackend.dtos;

import jakarta.validation.constraints.NotBlank;

public record ColumnDataSourceRecordDto(@NotBlank String title, @NotBlank String typeData) {
}
