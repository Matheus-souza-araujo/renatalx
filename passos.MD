## Começando o RENTALX

    - Primeiro configuramos o eslint e o prettier conforme o link: https://www.notion.so/ESLint-e-Prettier-Trilha-Node-js-d3f3ef576e7f45dfbbde5c25fa662779#eaf6e8bdcabc4d809cdae302e29750da

    - Depois criamos nosso server com express, para não ficarmos convertendo typescript para javascript toda hora, iremos usar a biblioteca ts-node-dev:
        - $ yarn add ts-node-dev -D

        - Depois criamos um script no package.json da seguinte maneira:
            "scripts": {
                "dev": "ts-node-dev --inspect --transpile-only --ignore-watch node_modules --respawn src/server.ts"
            },
        Assim quando rodarmos o comando yarn dev, irá executar nosso servidor
--transpile-only: não irá ficar dando erro enquanto estamos desenvolvendo, só irá dar erro no momento de buildar
--ignore-watch node_modules: para não ficar verificando as mudanças na pasta de node_modules
--respawn: nossa aplicação sempre irá dar reload sempre que tiver alteração no código
--inspect: Para nossa aplicação se conectar com o Debuggie do Vscode
=====================================================================================

devemos desabilitar o "strict:true" no tsconfig, ele é  uma opção do javascript que checa os erros da aplicação, porém não precisamos dele, pois o typescript já aponta os erros também

=====================================================================================
## Aprendendo a debugar a aplicação

- Devemos usar o debugger do Vscode

-Configurando o debugger:

{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "attach", // Isso encapsula nosso debugge dentro do nosso servidor que já está rodando
            "name": "Launch Program",
            "skipFiles": ["<node_internals>/**"],
            "outFiles": ["${workspaceFolder}/**/*.js"]
        }
    ]
}

para fazer o debbuger se conectar com a nossa aplicação colocamos no nosso scripts a flag --inspect


=====================================================================================

## Criando nossas tabelas na aplicação
    - Cada tabela terá uma rota na nossa pasta routes

=====================================================================================

## O que são repósitórios?

    A camada ou classe, reponsável por fazer toda a manipulação de dados da nossa aplicação. São responsáveis por:
        - Fazer o acesso ao banco de dados
        - Fazer o cadastro
        - Fazer os selects
        - Toda a manipulação com o banco

=====================================================================================
Docker

## Criando nosso DockerFile
FROM node // de qual imagem vamos estar pegando

WORKDIR  /usr/app //onde queremos que fica nossas informações

COPY package.json ./ //iremos copiar o nosso package.json para o diretório setado no workdir

RUN npm install //para baixar as dependência no container

COPY . . //irá copiar tudo pra dentro da nossa pasta raiz, a workdir

EXPOSE 3333 //porta que estamos utilizando dentro do container

CMD ["npm", "run". "dev"] //irá rodar nosso comando

comando buildar nosso container: docker build -t rentx .

para rodar nosso container: docker run -p 3333:3333 rentx 
                                          local/docker/nome da image


//docker compose: orquestrar containers                       

com docker compose basta rodar o comando docker-compose up

//comandos docker:
docker ps: mostra todos os nossos containers de pé

docker ps -a: mostra todos, ativos e inativos

docker rm <id-container>: remove o container desejado

docker start <id-container>: inicia nosso container

docker stop <id-container>: para nosso container

docker exec -it rentx bin/bash: para acessar o container

docker logs rentx -f: mostra os logs em tempo real

//comandos docker-compose:

docker-compose up -d: Roda container em background

docker-compose stop:Para o container 

docker-compose down: remove tudo de dentro do compose

docker-compose start: inicia
