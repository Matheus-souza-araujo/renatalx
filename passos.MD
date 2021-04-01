## Começando o RENATALX

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

devemos desabilitar o "strict:true" no tsconfig

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