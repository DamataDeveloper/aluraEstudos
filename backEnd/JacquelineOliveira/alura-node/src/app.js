import express from "express";

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const livros = [
    {
        id: 1, "titulo":"Lord of Rings"
    },
    {
        id: 2, "titulo":"The Hobiit"
    }
]

app.get('/', (req, res)=>{
    res.status(200).send('Curso de Node')
})
app.get('/livros', (req, res)=>{
    res.status(200).json(livros)
})
app.post('/livros',(req, res)=>{
    livros.push(req.body)
    res.status(201).json(livros)
})


export default app