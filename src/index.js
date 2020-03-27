var bodyParser = require('body-parser');

const express = require('express');
const routes = require('./routes');

const app = express();

app.use(bodyParser.json());
app.use(routes);

app.listen(3333);




// 
/* 
        Rota e Recurso
    
        Metodos HTTP
        GET: Buscar/listar uma informação no back-end
        POST: Criar uma informação no back-end
        PUT: Alterar uma informação no back-end  
        DELETE: Deleter uma informação no back-end 

        Tipo de parâmetros:

    Query Params: parâmetros nomeados enviados na rota apos o "?" ("filtos", "Pages")
    Route Params: parâmetros utilizados para indentificar recursos
    Request Body: corpo da requisição, utilizado para criar ou alterar recursos

    */