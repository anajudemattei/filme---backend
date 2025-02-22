# Meu Projeto de Filmes
Este é um projeto de backend para gerenciar filmes.

## Diagrama de Classes
O diagrama a seguir mostra as entidades e seus relacionamentos dentro do sistema:

![Logo do Projeto](./img/Captura%20de%20tela%202025-02-13%20134835.png)
- Filme: Entidade principal, contendo atributos como id, nome, gênero, diretor e ano.
- FilmeList: Responsável por gerenciar a lista de filmes e realizar operações CRUD.

## Estrutura MVC
O projeto está estruturado de acordo com o padrão MVC:
```json
src/
├── controllers/
│   ├── filmeController.js
├── models/
│   ├── filme.js
│   ├── filmeList.js
├── routes/
│   ├── filmeRoutes.js
├── server.js
```
- Models: Contém as classes e a lógica de manipulação de dados.
- Controllers: Gerencia as funções responsáveis pelas requisições e respostas da API.
- Routes: Define e organiza as rotas da aplicação.

## Dependências
O projeto utiliza as seguintes dependências:
```json
{
  "dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^16.4.7",
    "express": "^1.0.2",
    "uuid": "^11.0.5"
  },
  "devDependencies": {
    "nodemon": "^3.1.9"
  }
}
```

## Formato JSON
```json
{
  "title": "Diário de uma Paixão",
  "genre": "Romance",
  "classification": 14,
  "plays": 65
}
```

## Formato XML
```json
<filme>
  <title>Diário de uma Paixão</title>
  <genre>Romance</genre>
  <classification>14</classification>
  <plays>65</plays>
</filme>
```

## Endpoints
- **Adicionar um filme:** POST `/filmes`
- **Obter todos os filmes:** GET `/filmes`
- **Obter um filme por ID:** GET `/filmes/:id`
- **Atualizar um filme:** PUT `/filmes/:id`
- **Deletar um filme:** DELETE `/filmes/:id`
