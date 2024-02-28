package com.example.analysisbackend.models;

import jakarta.persistence.*;

import java.io.Serializable;
import java.util.UUID;

@Entity
@Table(name = "TB_ColumnDataSource")
public class ColumnDataSourceModel implements Serializable {
    private static final long serialVersionUID = 3L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID idColumnDataSource;

    @Column(name = "title")
    private String title;
    @Column(name = "typeData")
    private String typeData;

    public UUID getIdColumnDataSource() {
        return idColumnDataSource;
    }

    public void setIdColumnDataSource(UUID idColumnDataSource) {
        this.idColumnDataSource = idColumnDataSource;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getTypeData() {
        return typeData;
    }

    public void setTypeData(String typeData) {
        this.typeData = typeData;
    }
}
