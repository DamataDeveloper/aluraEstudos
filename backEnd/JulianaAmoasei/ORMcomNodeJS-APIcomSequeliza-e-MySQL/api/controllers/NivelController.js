class NivelController {

    static async pegaTodosOsNiveis(req, res) {
      try {
        const todosOsNiveis = await database.Niveis.findAll()
        return res.status(200).json(todosOsNiveis)
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }
    static async pegaUmNivel(req, res){
      const id = req.params.id
      console.log(id)
      try{            
          const UmaNivel = await database.Nivel.findOne({
              where:{
                  id: id 
              }
          });            
          return res.status(201).json(UmaNivel)

      }catch(error){
          return res.status(500).json(error.message)
      }
    }
    static async criaNivel(req, res){
      const novaNivel = req.body;
      try{
          const novoNivelCriada = await database.Nivel.create(novaNivel)
          return res.status(200).json(novoNivelCriada)

      }catch(error){
          return res.status(500).json(error.message)
      }
    } 
    static async atualizaNivel(req, res){
      const id = req.params.id;
      const novasInfos = req.body
      try{
          await database.Nivel.update(novasInfos, {where: {id: id}})
          const dadosDaNivel = await database.Nivel.findByPk(id)
           
          res.status(200).json(dadosDaNivel)

      }catch(error){
          res.status(500).json(error.message)

      }
    }
    static async apagaNivel(req, res){
      const id = req.params.id
      try{
          await database.Nivel.destroy({where:{id: id}})
          console.log('estou aqui')
          return res.status(200).json({message: "ok Nivel deletada com sucesso"})

      }catch(error){
          console.log('deu erro')
          res.status(500).json(error.message)
      }
    }
}   
module.exports = NivelController