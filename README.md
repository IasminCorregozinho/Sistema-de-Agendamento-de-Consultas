#  Sistema de agendamento de Consultas
Repositório para o sistema de agendamento de consultas feito em TS.

<br>

## ✒️ Autores
* **Iasmin Corregozinho** <br>

## 📜 Descrição
Este é um sistema simples de agendamento de consultas desenvolvido em TypeScript, que roda diretamente no terminal (CLI - *Command Line Interface*). O projeto permite gerenciar o ciclo de vida de uma consulta, desde o agendamento até o cancelamento ou conclusão, de forma interativa.

<br>

## ✨ Funcionalidades
- **Agendar Nova Consulta:** Permite o cadastro de novas consultas com ID, nome do paciente, data e observações.
- **Cancelar Consulta:** Altera o status de uma consulta para "cancelada" e registra a data do cancelamento.
- **Listar Todas as Consultas:** Exibe uma lista completa de todas as consultas registradas.
- **Filtrar Consultas por Status:** Permite visualizar apenas as consultas que correspondem a um status específico (`agendada`, `concluída` ou `cancelada`).

<br>

## 🛠️ Tecnologias Utilizadas
- **TypeScript:** Superset do JavaScript que adiciona tipagem estática.
- **Node.js:** Ambiente de execução para o JavaScript no lado do servidor.
- **readline-sync:** Biblioteca para receber inputs do usuário de forma síncrona no terminal.

<br>

## 🚀 Como Rodar o Projeto

Siga os passos abaixo para executar o sistema em sua máquina local.

### Pré-requisitos
Antes de começar, você vai precisar ter instalado em sua máquina:
- [Node.js](https://nodejs.org/en/) (versão 16 ou superior)
- [Git](https://git-scm.com/)

### Passos para Execução
1. Clone o repositório:
```bash
git clone [https://github.com/IasminCorregozinho/Sistema-de-Agendamento-de-Consultas.git](https://github.com/IasminCorregozinho/Sistema-de-Agendamento-de-Consultas.git)
```

2. Acesse a pasta do projeto no terminal:
```bash
cd Sistema-de-Agendamento-de-Consultas
```

3. Instale as dependências necessárias:
```bash
npm install
```

4. Compile o código TypeScript para JavaScript:
```bash
npx tsc
```

5. Execute o sistema:
```bash
node dist/atividade.js
```
*(**Nota:** O nome do arquivo pode variar. Se seu arquivo `.ts` se chama `index.ts`, o comando será `node dist/index.js`)*.

<br>

### Alternativa com `ts-node`
Para um ambiente de desenvolvimento, você pode usar o `ts-node` para executar o arquivo TypeScript diretamente, sem a etapa de compilação.

1. Instale o `ts-node` (caso ainda não o tenha):
```bash
npm install -g ts-node
```

2. Execute o projeto diretamente:
```bash
ts-node atividade.ts
```

<br>

## 📝 Estrutura de Dados
A principal estrutura de dados utilizada no projeto é a interface `Consulta`, que define o formato dos objetos de agendamento:

```typescript
interface Consulta {
  id: string;
  paciente: string;
  data: Date;
  status: "agendada" | "concluída" | "cancelada";
  observacoes?: string;
  dataCancelamento?: Date | null;
}
```
