const express = require('express');
const routers = require('./routes/index')


const app = express();

const porta = 3000;


routers(app)

app.listen(porta,()=>console.log(`servidor rodando na porta ${porta}`));

//module.exports = app
