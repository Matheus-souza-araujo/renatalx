## Começando o RENATALX

    - Primeiro configuramos o eslint e o prettier conforme o link: https://www.notion.so/ESLint-e-Prettier-Trilha-Node-js-d3f3ef576e7f45dfbbde5c25fa662779#eaf6e8bdcabc4d809cdae302e29750da

    - Depois criamos nosso server com express, para não ficarmos convertendo typescript para javascript toda hora, iremos usar a biblioteca ts-node-dev:
        - $ yarn add ts-node-dev -D

        - Depois criamos um script no package.json da seguinte maneira:
            "scripts": {
                "dev": "ts-node-dev src/server.ts"
            },
        Assim quando rodarmos o comando yarn dev, irá executar nosso servidor

=====================================================================================

## Aprendendo a debugar a aplicação

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