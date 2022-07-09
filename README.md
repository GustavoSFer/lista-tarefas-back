# API - Lista de tarefas

### Bem vindo a aplicação Lista de tarefas

<h2>Descrição:</h2>
<p>
  Implementar uma API que realize o cadastro, atualiza, e deleta uma tarefa. 
</p>

## TECNOLOGIAS UTILIZADOS
<ul>
  <li>Node.js</li>
  <li>Express</li>
  <li>Dotenv</li>
  <li>MondoDB</li>
  <li>Mocha | Chai | Sinon.js </li>
</ul>

# Instruções para iniciar o projeto

1. Clone o repositório
  * Chave SSH
    * `git clone https://github.com/GustavoSFer/lista-tarefas-back.git`
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd lista-tarefas-back`

2. Instale as dependências e inicialize o projeto
  * Instale as dependências:
    * `npm install`
  * Inicialize o projeto:
    * `npm start`

## Utilizando o projeto com o Docker

1. Crie a imagem no docker
  * docker build -t <'NomeDaImagem'> .
2. Crie o container no docker
  * docker container run -p 3000:3000 <'NomeDaImagem'>

## Consumindo a API, Cadastrando tarefas

<p>
  Buscando tarefas no banco de dados:
</p>
    *endipoint: '/' - "GET"
  [
    {
      "_id": "62ba29b7534b9c5db8f5651b",
      "task": "Crir uma API",
      "status": "Em andamento"
    },
    {
      "_id": "62ba2b9a534b9c5db8f56528",
      "task": "Realizar testes",
      "status": "Pendente"
    },
    {
      "_id": "62ba2bda534b9c5db8f56534",
      "task": "Estudar",
      "status": "Pendente"
    }
  ]

<p>
  Adicionando tarefas no banco de dados:
</p>
    *Body:
  {
    "task": "Nova tarefa",
    "status": "Pendente"
  }

<p>
  Atualizando tarefas no banco de dados:
</p>
  {
    "id": "62aa290bc663a6d60439ee51",
    "task": "Testando G123",
    "status": "Andamento"
  }

<p>
  Deletando tarefas no banco de dados: 
  Para deletar o ID da tarefa ter que ser passado como parametro da URL.
    *Exemplo: http://localhost:3001/62aa290bc663a6d60439ee51
</p>