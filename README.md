#  Kimóveis API

API RESTful completa para **gestão imobiliária**, desenvolvida com foco em boas práticas de **back-end com TypeScript, Express e TypeORM**.  
O sistema oferece **cadastro de imóveis, usuários, categorias, agendamentos e autenticação JWT**, com permissões distintas entre **usuários comuns e administradores**.

---

##  Deploy

A API está hospedada e funcional nos seguintes serviços:

- **Swagger (documentação completa):** [https://kimoveis-pgbl.onrender.com/api-docs/](https://kimoveis-pgbl.onrender.com/api-docs/)

> A aplicação roda na **porta 3000**.

---

##  Sobre o Projeto

O **Kimóveis API** foi desenvolvido para atender as principais necessidades de uma imobiliária, oferecendo:

- Cadastro e gerenciamento de **usuários, imóveis, endereços e categorias**.
- Sistema de **agendamento de visitas** com regras de negócio.
- **Autenticação JWT** e controle de acesso para administradores.
- **Soft Delete** e relacionamentos entre entidades.
- Deploy completo utilizando **Render** (servidor) e **Neon** (banco de dados PostgreSQL).

---

##  Tecnologias Utilizadas

- **Node.js**
- **TypeScript**
- **Express**
- **TypeORM**
- **PostgreSQL** (hospedado no [Neon.tech](https://neon.tech))
- **Zod** – validação de dados
- **BcryptJS** – criptografia de senhas
- **jsonwebtoken (JWT)** – autenticação
- **dotenv** – gerenciamento de variáveis de ambiente
- **Swagger UI Express** – documentação da API
- **Express Async Errors** – tratamento global de erros
- **PG e PG-Format** – integração com banco de dados PostgreSQL

---

##  Entidades e Relacionamentos

O sistema é composto pelas seguintes entidades:

- **User**
- **Address**
- **Category**
- **RealEstate**
- **Schedule**

 Diagrama de Entidades:

<img width="828" height="721" alt="DER" src="https://github.com/user-attachments/assets/ef9357ae-cf5c-4b37-8fdb-db8362e619b9" />


---

##  Autenticação e Autorização

- A autenticação é realizada via **JWT (JSON Web Token)**.
- Existem **dois níveis de acesso**:
  - **Administrador:** acesso total às rotas protegidas.
  - **Usuário comum:** acesso restrito.
- Algumas rotas exigem o token enviado no header:
  ```http
  Authorization: Bearer <token>
