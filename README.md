
# Car Shop

Api Backend desenvolvida em TypeScript utilizando Docker, arquiteturação do código seguindo o modelo MSC e criação de APIs RESTful com CRUD completo.

## Stack utilizada

**Back-end:** Node, Express, TypeScript, MongoDB, Mongoose, Docker, JWT/Autenticação.

**Testes de Integração:** Chai, Mocha.


## Documentação da API

#### Retorna todos os cars

```http
  GET /cars
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `cars` | `string` | **Obrigatório**. A chave da sua API |

#### Retorna um car do Banco de dados

```http
  GET /cars/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `cars` | `string` | **Obrigatório**. A chave da sua API |
| `id`      | `string` | **Obrigatório**. O ID do item que você quer |

#### Cria um cars do Banco de dados

```http
  POST /cars
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `cars` | `string` | **Obrigatório**. A chave da sua API |

#### Atualiza um cars no Banco de dados

```http
  PUT /cars/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `cars` | `string` | **Obrigatório**. A chave da sua API |
| `id`      | `string` | **Obrigatório**. O ID do item que você quer |

#### Deleta um car no Banco de dados

```http
  DELETE /cars/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `cars` | `string` | **Obrigatório**. A chave da sua API |
| `id`      | `string` | **Obrigatório**. O ID do item que você quer |
