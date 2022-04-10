import livros from "../model/Livro.js";

class LivroController {

    static listarLivros = (req, res)=>{        
        livros.find()
            .populate('autor')
            .exec((err, livros) =>{
                console.log(livros)
                res.status(201).json(livros)
            })       
    }
    static listarLivroPorId = (req, res)=>{
        const id = req.params.id;        
        livros.findById(id)
            .populate('autor', 'nome')
            .exec((err, livros)=>{
                if(err){
                    res.status(400).send({messagen: `${err.message} - ID do Livro nao localizado`})
                }else{
                    res.status(200).send(livros)
                }
            })                
    }
    static cadastrarLivro = (req, res)=>{
        let livro = new livros(req.body);

        livro.save( err => {
            if(err){
                res.status(500).send({massage: `${err.massage} - Falha ao cadastrar livro.`})
            }else{
                res.status(201).send(livro.toJSON())
            }
        })
        
    }
    static atualizarLivro = (req, res)=>{
        const id = req.params.id;        
        livros.findByIdAndUpdate(id, {$set: req.body}, (err)=>{
            if(!err){
                //res.status(200).json(livros.toJSON())
                res.status(200).send({messagen: 'Livro atualizado co sucesso'})
            }else{
                res.status(500).send({message: err.message})
            }
        })
    }
    static excluirLivro = (req, res)=> {
        const id = req.params.id;
        livros.findByIdAndDelete(id, err=>{
            if(!err){
                res.status(200).send({message: 'Livro removido com sucesso'})
            }else{
                res.status(500).send({message: err.message})
            }
        })

    }

    
}
export default LivroController


