import express from "express";

const app = express();
const porta = 3000;
app.use(express.json());




app.get('/teste', (req, res)=>{
    res.status(200).send({menssagem: "boas vindas a API"});
})

app.listen(porta,()=>console.log(`servidor rodando na porta ${porta}`));
