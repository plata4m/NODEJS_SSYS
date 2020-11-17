## ssys-api - SSYS Employee Manager
Rest API desenvolvida com NodeJS, express e mongodb. O mongodb roda dentro do docker. Api simples de um crud de Emplyee com um range para salary e age. 

**Requerimentos para executar/rodar a aplicação**
- Docker
- NodeJS

**Configurando a aplicação para rodar**

Após instalar o NodeJS e o Docker, adicione o projeto ao VScode (é um bom editor). Abra o prompt de comando e vá até o diretório do projeto. 

```cd:/projeto``` 

Caso ainda não tenha o mongodb no Docker, baixe a imagem do mongodb para instalar nele.

```docker pull mongo```

Criando a nossa base de dados no mongodb dentro do Docker

```docker run --name mongodb -p 27017:27017 -d mongo```

O comando acima irá criar a base de dados ```mongodb``` utilizando a imagem ```mongo``` baixada. A porta padrão é 27017.
Na parte onde definimos ```-p``` significa que a primeira porta é nosso endereço local da máquina e a segunda é a porta dentro do docker para se comuncar como mongosb.

Após criar a base, execute o comando abaixo. Para verificar se a base foi levantada.  

```docker ps -a```

Por fim, basta ridar a aplicação

```npm run dev```

Pronto, o projeto já está rodando no endereço ```http://localhost:3001/api/employees/```.

