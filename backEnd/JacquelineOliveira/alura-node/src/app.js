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
app.get('/livros/:id',(req, res)=>{
    let index =  buscaLivro(req.params.id);    
    res.status(200).json(livros[index])
})
app.post('/livros',(req, res)=>{
    livros.push(req.body)
    res.status(201).json(livros)
})
app.put('/livros/:id',(req, res)=>{
    let index =  buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).json(livros[index])
})
app.delete('/livros/:id',(req, res)=>{
    let {id} = req.params; //atribuicao via disestruturacao
    let index =  buscaLivro(id);
    livros.splice(index, 1);
    res.status(200).send(`Livro ${id} excluido com sucesso`)
})


function buscaLivro(id){
    
    return livros.findIndex(livro => livro.id == id)
}


export default app