class TurmaController {
    static async pegaTodasAsTurmas(req, res) {
      try {
        const todasAsTurmas = await database.Turmas.findAll()
        return res.status(200).json(todasAsTurmas)
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }

    static async pegaUmaTurma(req, res){
      const id = req.params.id
      console.log(id)
      try{            
          const UmaTurma = await database.Turmas.findOne({
              where:{
                  id: id 
              }
          });            
          return res.status(201).json(UmaTurma)

      }catch(error){
          return res.status(500).json(error.message)
      }
    }
    static async criaTurma(req, res){
      const novaTurma = req.body;
      try{
          const novaTurmaCriada = await database.Turmas.create(novaTurma)
          return res.status(200).json(novaTurmaCriada)

      }catch(error){
          return res.status(500).json(error.message)
      }
    }
    static async atualizaTurma(req, res){
      const id = req.params.id;
      const novasInfos = req.body

      try{
          await database.Turmas.update(novasInfos, {where: {id: id}})
          const dadosDaTurma = await database.Turmas.findByPk(id)
           
          res.status(200).json(dadosDaTurma)

      }catch(error){
          res.status(500).json(error.message)

      }
    }
    static async apagaTurma(req, res){
      const id = req.params.id
      try{
          await database.Turmas.destroy({where:{id: id}})
          console.log('estou aqui')
          return res.status(200).json({message: "ok Turma deletada com sucesso"})

      }catch(error){
          console.log('deu erro')
          res.status(500).json(error.message)
      }
  }
  
    
    

}
module.exports = TurmaController