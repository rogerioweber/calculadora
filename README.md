# Calculadoras em Node.js

Este projeto contém três versões de uma calculadora desenvolvidas em Node.js, utilizando diferentes abordagens para entrada de dados e interação com o usuário.

## Pré-requisitos

Antes de executar qualquer calculadora, faça o clone do repositório:

```bash
git clone <URL_DO_REPOSITORIO>
```

Acesse a pasta do projeto:

```bash
cd nome-do-projeto
```

Instale as dependências necessárias:

```bash
npm install
```

> **Importante:** O projeto utiliza módulos externos, portanto o comando `npm install` deve ser executado antes da utilização.

---

## 1. Calculadora com Readline

Versão simples utilizando o módulo nativo `readline` do Node.js.

### Como executar

```bash
node calc_readline
```

### Funcionamento

O programa solicitará:

1. Primeiro número
2. Operação desejada (`+`, `-`, `*`, `/`)
3. Segundo número

Após informar os dados, o resultado será exibido no terminal.

---

## 2. Calculadora com Promises

Versão mais robusta utilizando Promises para controlar o fluxo da aplicação.

### Como executar

```bash
node calc_promise
```

### Funcionamento

- Valida se os valores informados são números válidos.
- Valida se a operação escolhida é permitida.
- Continua solicitando os dados até que as entradas sejam válidas.
- Exibe o resultado da operação ao final.

---

## 3. Calculadora Interativa com @clack/prompts

Versão com interface interativa no terminal utilizando o módulo externo `@clack/prompts`.

### Como executar

```bash
npm start
```

### Funcionamento

Ao iniciar a aplicação, será exibido um menu interativo onde o usuário poderá:

- Escolher a operação desejada;
- Informar os números;
- Visualizar o resultado de forma mais amigável.

Esta versão oferece uma melhor experiência de uso em comparação às demais.

---

## Tecnologias Utilizadas

- Node.js
- Readline
- Promises
- @clack/prompts

---

## Estrutura do Projeto

calculadoras
├── calc_readline.js
├── calc_promise.js
├── calculadora_clack.js
├── package.json
├── README.md
└── calcs/
    └── calcs.js
```
