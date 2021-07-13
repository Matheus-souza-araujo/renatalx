#imagem do docker
FROM node

#diretório onde ficará nossas informações
WORKDIR  /usr/app 

#iremos copiar nosso package.json para nosso diretório
COPY package.json ./

#baixa nossas dependencias no nosso container
RUN npm install

#copia tudo para nosso workdir
COPY . .

#porta que iremos usar no nosso container
EXPOSE 3333

#irá exucutar nossa aplicação
CMD ["npm", "run", "dev"]
