import express from "express";
import db from "./config/dbConnect.js";
import livros from "./model/Livro.js";
import routes from "./routes/index.js";


db.on("error", console.log.bind(console, 'Erro de conexao'))
db.once("open", () => {
    console.log("Conexao com banco feito com sucesso")
})



const app = express();

app.use(express.json());
//app.use(express.urlencoded({extended:true}))

routes(app);






app.get('/', (req, res)=>{
    livros.find((err, livros) =>{
    })
    res.status(200).send('Curso de Node')
})

app.get('/livros/:id',(req, res)=>{
    let index =  buscaLivro(req.params.id);    
    res.status(200).json(livros[index])
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