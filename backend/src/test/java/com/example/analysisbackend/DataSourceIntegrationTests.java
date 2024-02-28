package com.example.analysisbackend;

import com.example.analysisbackend.dtos.DataSourceRecordDto;
import com.example.analysisbackend.models.DataSourceModel;
import com.example.analysisbackend.repositories.DataSourceRepository;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import java.util.UUID;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.hamcrest.Matchers.hasSize;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@ExtendWith(SpringExtension.class)
@SpringBootTest
@AutoConfigureMockMvc
public class DataSourceIntegrationTests {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @Autowired
    private DataSourceRepository dataSourceRepository;

    @AfterEach
    void cleanUp() {
        dataSourceRepository.deleteAll();
    }


    @Test
    @DisplayName("Deve criar uma fonte de dados")
    void createDataSource() throws Exception {
        DataSourceRecordDto dataSource = new DataSourceRecordDto("Gabriel", "descricao");

        mockMvc.perform(post("/api/datasource")
                        .contentType("application/json")
                        .content(objectMapper.writeValueAsString(dataSource)))
                .andExpect(status().isCreated());

        DataSourceModel dataSourceEntity = dataSourceRepository.findByName("Gabriel");
        assertThat(dataSourceEntity.getDescription()).isEqualTo("descricao");
    }

    @Test
    @DisplayName("Deve listar todas as fonte de dados existentes")
    void getAllDataSource() throws Exception {

        DataSourceRecordDto dataSource = new DataSourceRecordDto("Gabriel", "descricao");

        mockMvc.perform(post("/api/datasource")
                .contentType("application/json")
                .content(objectMapper.writeValueAsString(dataSource)));

        mockMvc.perform(get("/api/datasource"))
                .andExpect(status().isOk())
                .andExpect(content().contentType("application/json"))
                .andExpect(jsonPath("$").isArray())
                .andExpect(jsonPath("$", hasSize(1)));
    }

    @Test
    @DisplayName("Deve mostrar a fonte de dados pelo ID dela")
    void getByIDDataSource() throws Exception {
        DataSourceRecordDto dataSource = new DataSourceRecordDto("Gabriel", "Descricao");
        MvcResult result =  mockMvc.perform(post("/api/datasource")
                .contentType("application/json")
                .content(objectMapper.writeValueAsString(dataSource)))
                .andReturn();

        String content = result.getResponse().getContentAsString();
        JsonNode responseNode = objectMapper.readTree(content);
        UUID id = UUID.fromString(responseNode.get("id").asText());

        mockMvc.perform(get("/api/datasource/" + id))
                .andExpect(status().isOk())
                .andExpect(content().contentType("application/json"))
                .andExpect(jsonPath("$[0].name").value("Gabriel"))
                .andExpect(jsonPath("$[0].description").value("Descricao"));


    }
}
