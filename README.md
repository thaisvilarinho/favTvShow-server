<h1 align='center'>💻 Sobre o projeto</h1>
<p align='center'>Repositório criado como forma de trabalho para as disciplinas do 4º período do curso de Análise e Desenvolvimento de Sistemas - IFTM - Campus Ituiutaba/MG </p>

<h4 align="center"> 
	🚧  Em construção... ainda há melhorias sendo implementadas 🚧
</h4>

## 🚀 Tecnologias

- ⚡ Express — A web framework for Node.js
- 💾 Sequelize — SQL dialect ORM for Node.js

## ✋🏻 Pré-requisitos

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/pt-BR/docs/install)

## 🔥 Instalação e execução

1. Faça um clone desse repositório;
2. Entre na pasta `cd favTvShows-server-master`;
3. Rode `yarn` para instalar as dependências;
4. Altere as credencias dentro de `/src/config/database.js`;
5. Rode `yarn sequelize db:create` para criar o banco de dados;
6. Rode `yarn sequelize db:migrate` para executar as migrations;
7. Ou importe o arquivo `userfav.sql`, criado para teste.
8. Rode `yarn dev` para iniciar o servidor;

