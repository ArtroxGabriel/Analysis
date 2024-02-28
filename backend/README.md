# Analysis - Backend

Este é o repositório do backend da aplicação Analysis, desenvolvido em Java 17 com Spring Boot. A aplicação consiste em uma API REST que gerencia análises, fontes de dados e colunas de fontes de dados em um banco de dados PostgreSQL. 
> O projeto foi criado com o propósito de estudo do framework Java Spring Boot.

## Tecnologias Utilizadas

- Java 17
- Spring Boot
- Spring Data JPA
- Spring Validation

## Estrutura do Projeto

O projeto segue uma arquitetura típica de uma aplicação Spring Boot, incluindo os seguintes componentes:

- Controllers: Responsáveis por mapear e tratar as requisições HTTP.
- Services: Contêm a lógica de negócio da aplicação.
- DTOs (Data Transfer Objects): Utilizados para transferir dados entre a camada de controle e serviço.
- Repositórios: Interfaces que definem métodos para interagir com o banco de dados.
- Model: Representa as entidades do domínio da aplicação.

## Modelagem de Banco de Dados

O banco de dados da aplicação consiste em três tabelas:

1. Tabela "analise": Armazena informações sobre as análises.
2. Tabela "fonte_de_dados": Mantém registros das fontes de dados.
3. Tabela "coluna_fonte_de_dados": Contém informações das colunas das fontes de dados.

Relacionamentos:
- Uma fonte de dados pode ter várias análises.
- Uma análise só pode ter uma fonte de dados.
- Uma coluna de fonte de dados pertence a apenas uma fonte de dados.

## Instalação e Execução

1. Clone o repositório: `git clone https://github.com/seu-usuario/analysis-backend.git`
2. Navegue até o diretório do projeto: `cd analysis-backend`
3. Configure as propriedades do banco de dados no arquivo `application.properties`.
4. Execute a aplicação: `./mvnw spring-boot:run`.

## Frontend

O código-fonte do frontend correspondente a esta aplicação está disponível no repositório [Analysis-Frontend](https://github.com/ArtroxGabriel/Analysis-Frontend).

## Contribuição

Contribuições são bem-vindas! Se você deseja contribuir para este projeto, siga estas etapas:

1. Fork o projeto.
2. Crie um branch para a sua feature (`git checkout -b feature/nova-feature`).
3. Faça commit das suas alterações (`git commit -am 'Adicionando nova feature'`).
4. Faça push para o branch (`git push origin feature/nova-feature`).
5. Crie um novo Pull Request.

## Licença

Este projeto é licenciado sob a [MIT License](LICENSE).
