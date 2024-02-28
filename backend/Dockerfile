# Use uma imagem base que tenha o Maven e o JDK instalados, como maven
FROM maven:3.8.4-openjdk-17 AS build

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie o arquivo pom.xml para o contêiner
COPY pom.xml .

# Baixe as dependências do Maven
RUN mvn dependency:go-offline

# Copie o restante dos arquivos da sua aplicação
COPY src/ ./src/

# Compile sua aplicação
RUN mvn package -DskipTests

# Use uma imagem base que tenha o JDK instalado, como openjdk
FROM openjdk:17

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie o arquivo JAR da fase de compilação
COPY --from=build /app/target/analysis-backend.jar .

# Comando para executar a aplicação quando o contêiner for iniciado
CMD ["java", "-jar", "analysis-backend.jar"]
