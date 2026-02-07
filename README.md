# EasyTask — Gerenciador de Tarefas (Angular)

Um app de **gerenciamento de tarefas** construído com **Angular + TypeScript**, pensado para praticar e demonstrar na prática um fluxo completo de front-end: **listar, criar e remover tarefas**, com uma interface simples, organizada e fácil de manter.

A ideia aqui foi criar um projeto que não é só “tela bonita”: ele tem **estrutura**, **boas separações**, e conceitos essenciais de Angular aplicados do jeito certo.

---

## 💡 O que esse projeto entrega

- Lista de tarefas por usuário
- Criação de tarefa com formulário (título, descrição e data)
- Remoção de tarefa com **modal de confirmação**
- Marcar tarefa como concluída
- Persistência no navegador com **localStorage** (suas tarefas continuam lá mesmo após recarregar)

---

## 🧱 Por que esse projeto é bem estruturado

Este projeto foi organizado para ficar fácil de evoluir:

- Componentes pequenos e com responsabilidade clara
- Separação por módulos (reuso e organização)
- Lógica centralizada em **Service** (estado e persistência)
- Comunicação entre componentes com `@Input` / `@Output`
- Composição de UI usando `ng-content` (reutilização real)

---

## 🧠 Aprendizados consolidados

Durante o desenvolvimento, eu consolidei principalmente:

- Estruturação de projeto Angular e organização por módulos
- Criação de componentes reutilizáveis e composição de layout
- Comunicação pai → filho e filho → pai (Input/Output e EventEmitter)
- Injeção de dependências e boas práticas de Services
- Persistência de dados no front (localStorage) e gerenciamento de estado
- Formulários com `FormsModule` + `ngModel`
- Renderização moderna de templates com control flow (`@if`, `@for`) — quando aplicável no Angular atual

---

## 🛠️ Tecnologias utilizadas

- Angular
- TypeScript
- HTML / CSS
- Template-driven forms (FormsModule)
- localStorage (persistência)
- Testes via `ng test` (quando configurado no projeto)

---

## 🚀 Como rodar o projeto

### Pré-requisitos

Você precisa ter instalado:

- **Node.js** (recomendado: **LTS / Node 20+**)
- **npm** (vem junto com o Node)

> Não é obrigatório instalar Angular CLI globalmente. O projeto pode rodar com as dependências instaladas via `npm`.

### Passos

1) Clone o repositório:
```bash
git clone <URL_DO_REPO>
cd task-management-project-main
```

2) Instale as dependências:
```bash
npm install
```

3) Rode o projeto:
```bash
npm start
```

4) Acesse:
- `http://localhost:4200`

---

## ✅ Testes

Se o projeto estiver com testes configurados:
```bash
npm test
```

---

## 📦 Build de produção

Gerar build otimizado:
```bash
npm run build
```

---

## 📌 Próximas melhorias (ideias)

- Integração com API (CRUD real)
- Filtros por status/data + busca
- Melhorias de acessibilidade e navegação por teclado
- Cobertura de testes para fluxo de criação/remoção
