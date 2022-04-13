const bodyParser = require('body-parser')
const pessoas = require('./pessoasRoute')
const niveis = require('./niveisRoute')
const turmas = require('./turmasRouter')

/*
module.exports = app =>{
    app.use(bodyParser.json())
    app.use(pessoas)
    niveis,
   turmas
}*/
module.exports = app => {
    app.use(
      bodyParser.json(),
      pessoas,
      niveis,
      turmas
    )
}