import livros from "../model/Livro.js";

class LivroController {

    static listarLivros = (req, res)=>{
        console.log("estou no livrosController")
        livros.find((err, livros) =>{
            res.status(200).json(livros)    
        })
    }
}
export default LivroController

