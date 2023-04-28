# API RESTful utilizando Adonis.js e SQLite

Esta é uma API RESTful desenvolvida em Adonis.js com o objetivo de oferecer um ambiente de estudo para a criação e manipulação de dados utilizando uma base de dados SQLite.

## Rotas

- `GET|HEAD /uploads/*`: Rota utilizada para acessar arquivos estáticos (imagens, por exemplo) que foram enviados para o servidor.
- `GET|HEAD /api`: Rota utilizada para verificar se a API está funcionando corretamente.
- `GET|HEAD /api/moments`: Rota utilizada para listar todos os momentos cadastrados na base de dados.
- `GET|HEAD /api/moments/:id`: Rota utilizada para buscar um momento específico na base de dados através do seu ID.
- `PUT|PATCH /api/moments/:id`: Rota utilizada para atualizar um momento específico na base de dados.
- `DELETE /api/moments/:id`: Rota utilizada para deletar um momento específico da base de dados.
- `POST /api/momments/:momentId/comments`: Rota utilizada para cadastrar um comentário em um momento específico.

## Tecnologias utilizadas

- [Adonis.js](https://adonisjs.com/): Framework utilizado para o desenvolvimento da API.
- [SQLite](https://www.sqlite.org/index.html): Banco de dados utilizado para armazenar os dados da aplicação.

## Como executar a aplicação

1. Clone o repositório para a sua máquina.
2. Instale as dependências utilizando o comando `npm install`.
3. Execute as migrações do banco de dados utilizando o comando `node ace migration:run`.
4. Inicie a aplicação utilizando o comando `npm start`.
5. Acesse a aplicação através do endereço `http://localhost:3333`.

## Considerações finais

Esta API foi desenvolvida com o objetivo de ser utilizada como um ambiente de estudo para a criação de aplicações web utilizando Adonis.js e SQLite. Sinta-se à vontade para utilizá-la como base para seus próprios projetos ou para aprofundar seus conhecimentos nessas tecnologias.
