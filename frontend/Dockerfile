# Use a imagem base do node na versão específica
FROM node:21.5.0 AS build

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos do diretório local para o diretório de trabalho no container
COPY . .

# Instala as dependências utilizando o Yarn
RUN yarn install

# Executa o comando de build
RUN yarn build

# Configuração do servidor Nginx
FROM nginx:latest

# Copia os arquivos gerados pela construção da aplicação para o diretório padrão do Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Exponha a porta 80 para tráfego da web
EXPOSE 80

# O Nginx é iniciado automaticamente pela imagem base do Nginx
