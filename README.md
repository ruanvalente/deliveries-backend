<h1 align="center">
  Projeto Entregas Backend
</h1>

<h2 align="center">
  Desafio do curso de node.js da <strong><a href="https://www.rocketseat.com.br/" target="_blank">Rocketseat</a></strong>
</h2>

<blockquote align="center">“Não espere para plantar, apenas tenha paciência para colher”!</blockquote>

<div align="center">
</div>

## 🚀 Sobre o desafio

O objetivo deste projeto é desenvolver uma API REST (Representational State Transfer) para um serviço de entregas. A API permitirá que os usuários acessem e gerenciem informações relacionadas a entregas, como rastreamento de pedidos, detalhes de entrega, informações do cliente e muito mais. A construção da API REST envolverá a definição de endpoints, métodos HTTP, autenticação, e a implementação de funcionalidades que atendam às necessidades do serviço de entregas.

## 🚧 Organização do projeto

O projeto está organizado no seguinte formato:

```
.
├── README.md
├── package-lock.json
├── package.json
├── prisma
│   ├── migrations
│   │   ├── 20231017230815_create_deliveryman
│   │   │   └── migration.sql
│   │   ├── 20231017230954_update_table_name
│   │   │   └── migration.sql
│   │   ├── 20231017231225_create_client
│   │   │   └── migration.sql
│   │   ├── 20231017232040_create_deliveries
│   │   │   └── migration.sql
│   │   ├── 20231023180532_alter_table_deliveries
│   │   │   └── migration.sql
│   │   ├── 20231023183216_alter_field_end_at
│   │   │   └── migration.sql
│   │   └── migration_lock.toml
│   └── schema.prisma
├── src
│   ├── @types
│   │   └── express
│   │       └── index.d.ts
│   ├── config
│   │   └── database
│   │       ├── db.sqlite
│   │       └── prisma
│   │           └── prisma-client.ts
│   ├── index.ts
│   ├── middlewares
│   │   ├── ensure-authenticate-client-middleware.ts
│   │   ├── ensure-authenticate-deliveryman-middleware.ts
│   │   └── exception-middleware.ts
│   ├── modules
│   │   ├── account
│   │   │   └── use-cases
│   │   │       ├── client
│   │   │       │   ├── authenticate-client-controller.ts
│   │   │       │   └── authenticate-client-use-case.ts
│   │   │       └── deliveryman
│   │   │           ├── authenticate-deliveryman-controller.ts
│   │   │           └── authtenticate-deliveryman-use-case.ts
│   │   ├── clients
│   │   │   └── use-cases
│   │   │       ├── create-client
│   │   │       │   ├── create-client-controller.ts
│   │   │       │   └── create-cliente-use-case.ts
│   │   │       └── find-all-deliveries
│   │   │           ├── find-all-deliveries-controller.ts
│   │   │           └── find-all-deliveries-use-case.ts
│   │   ├── deliveries
│   │   │   └── use-cases
│   │   │       ├── create-deliveries
│   │   │       │   ├── create-delivery-controller.ts
│   │   │       │   └── create-delivery-use-case.ts
│   │   │       ├── find-all-available
│   │   │       │   ├── find-all-available-controller.ts
│   │   │       │   └── find-all-available-use-case.ts
│   │   │       ├── update-deliveryman
│   │   │       │   ├── update-deliveryman-controller.ts
│   │   │       │   └── update-deliveryman-use-case.ts
│   │   │       └── update-end-date
│   │   │           ├── update-end-date-controller.ts
│   │   │           └── update-end-date-use-case.ts
│   │   └── deliveryman
│   │       └── use-cases
│   │           ├── create-deliveryman
│   │           │   ├── create-deliveryman-controller.ts
│   │           │   └── create-deliveryman-use-case.ts
│   │           └── find-all-deliveries-deliveryman
│   │               ├── find-all-deliveries-deliveryman-controller.ts
│   │               └── find-all-deliveries-deliveryman-use-case.ts
│   ├── routes
│   │   ├── authenticate-client
│   │   │   └── authenticate-client-routes.ts
│   │   ├── clients
│   │   │   └── clients-routes.ts
│   │   ├── deliveries
│   │   │   └── deliveries-routes.ts
│   │   └── deliveryman
│   │       └── deliveryman-routes.ts
│   ├── server.ts
│   └── shared
│       └── implements
│           ├── controllers
│           │   └── controllers.ts
│           ├── routes
│           │   └── index.ts
│           └── use-cases
│               └── use-cases.ts
└── tsconfig.json
```

- @types
  - Arquivo de tipagems globais
- config
  - configurações da aplicação como: banco de dados etc..
- middleware
  - middlewares globais da aplicação
- modules
  - onde ficam os arquvios referente à use-case e controllers da aplicação
- routes
  - rotas da aplicação
- shared
  - interfaces para implementação que são compartihadas
- server.ts
  - arquivo com as configurações do servidor
- index.ts
  - arquivo de início da aplicação

## 🔨 Tecnologias:

- [Nodejs][nodejs]
- [TypeScript][typescript]
- [Prisma][prisma]
- [jsonwebtoken][jsonwebtoken]
- [bcrypt][bcrypt]

## 🚀 Como rodar este projeto

Para clonar e executar este aplicativo, você precisará de [Git](https://git-scm.com), [NodeJs][nodejs] Instalado em seu computador.

### 🌀 Clonando o repositório

```bash
# Clone este repositório
$ git clone https://github.com/ruanvalente/deliveries-backend

# Acesse a pasta do projeto no terminal/cmd
$ cd deliveries-backend
```

### 🧭 Rodando a aplicação web

```bash
# Instale as dependências
$ npm start ou yarn


# Execute o teste da Aplicação
$ npm test ou yarn test

# http://localhost:3001/api/deliveries

```

## 🛠 Funcionalidades da aplicação

- Permitir que um usuário consiga criar uma conta na aplicação.
- Permitir que um usuário consiga logar na aplicação. Seja ele cliente ou entregador.
- Permitir que o usuário consiga criar um pedido.
- Permitir que o usuário consiga visualizar o seu pedido.
- Permitir que um entegador consiga criar uma conta na aplicação.
- Permitir que um entregador consiga visualizar os pedidos criados na aplicação.
- Permitir que um entregador consiga selecionar uma entrega para ser feita.
- Permitir que um entregador consiga concluir a sua entrega.

# TODO: A fazer 😳

Criação de testes utilizando Jest e configuração do swagger para documentação da API.

<p align="center">
Feito com ❤️ por Ruan Valente 👋🏽
</p>

[nodejs]: https://nodejs.org/en/
[typescript]: https://www.typescriptlang.org/
[prisma]: https://www.prisma.io/
[jsonwebtoken]: https://www.npmjs.com/package/jsonwebtoken
[bcrypt]: https://www.npmjs.com/package/bcrypt
