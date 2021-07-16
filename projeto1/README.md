# Projeto 1 - Back-end do Auxiliar de Jogo GUILDS - Tópicos Especiais em Engenharia de Software

## Proposta:
* O projeto servirá como um auxiliar para um jogo de tabuleiro chamado GUILDS, onde os usuários poderão se cadastrar, e então registrar suas unidades e tropas do jogo.

## Grupo:
* Lucas Cafieiro Bittencourt Lima - 20190169286 - Ciência da Computação
* Néfi Coelho Leite - 20190030796 - Engenharia da Computação

## Pré-requisitos:
* Ter instalado o NodeJS (versão 10+), o NPM e o Yarn.
* Ter instalado o Postgres, de preferência através do Docker, com o seguinte comando: *$ docker run --name projeto-topicos -e POSTGRES_PASSWORD=postgres -e POSTGRES_USER=postgres -e POSTGRES_DB=projeto-topicos -p 5432:5432 -d postgres:latest*

## Instalação e excução:
* Na pasta do projeto executar o comando: *$ yarn*
* Na pasta do projeto, executar o comando: *$ yarn typeorm migration:run*
* Na pasta do projeto, executar o comando: *$ yarn dev:server*

## Anexos:
* Em anexo está o arquivo que será utilizado no Insomnia para fazer as requisições
