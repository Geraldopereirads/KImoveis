# 🏡 Kimóveis API

Sistema completo de gerenciamento imobiliário desenvolvido para atender às necessidades da imobiliária **Kimóveis**. A aplicação permite o cadastro de imóveis, usuários interessados, categorias, agendamento de visitas e autenticação com base em permissões de acesso.

## 🚀 Tecnologias Utilizadas

- **Node.js**
- **TypeScript**
- **Express**
- **TypeORM**
- **PostgreSQL**
- **Zod**
- **bcryptjs**
- **jsonwebtoken**
- **dotenv**


## 🔐 Autenticação e Autorização

- A autenticação é feita via JWT.
- Existem dois níveis de acesso: **usuários comuns** e **administradores**.
- Algumas rotas são exclusivas para administradores.

## 🧠 Regras de Negócio

- Não é possível cadastrar dois usuários com o mesmo e-mail.
- Apenas administradores podem deletar ou atualizar qualquer usuário.
- Soft delete implementado para usuários.
- Endereços e categorias são únicos.
- Um mesmo horário e data não pode ser agendado para diferentes usuários no mesmo imóvel.
- Horários permitidos para agendamento: segunda a sexta, entre 08:00 e 18:00.


## 🛠️ Entidades

- **User**
- **Address**
- **Category**
- **RealEstate**
- **Schedule**

As entidades e seus relacionamentos estão mapeados conforme o diagrama exportados via `src/entities/index.ts`.

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/kimoveis-api.git

# Instale as dependências
npm install

# Configure o banco de dados no arquivo .env
DATABASE_URL=postgres://usuario:senha@localhost:5432/kimoveis

# Rode as migrations
npm run typeorm migration:run

# Inicie a aplicação
npm run dev
