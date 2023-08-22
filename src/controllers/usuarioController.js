const UsuarioService = require("../services/usuariosService")

module.exports = {
    show : async (req,res)=>{
        let json = {error:" ",result:[]}
        let usuarios = await UsuarioService.buscarTodos()
        for(let i in usuarios){
            json.result.push({
                id: usuarios[i].id,
                cpf: usuarios[i].cpf,
                nome: usuarios[i].nome,
                data_nascimento: usuarios[i].data_nascimento
            })
        }
        res.json(json)
},
    index: async (req,res) => {
        let {id} = req.params
        let usuario = await UsuarioService.buscaUsuario(id)
        if(usuario){
            return res.json(usuario)  
        }
        else{
            return res.status(404).send({mensage: "Usuário não cadastrado!"})
        }
    },

    cadastro: async (req,res) => {
        let json = {error:" ",result:{}}
        let cpf = req.body.cpf
        let nome = req.body.nome
        let data_nascimento = req.body.data_nascimento
        console.log(cpf, nome, data_nascimento)
        if(cpf && nome && data_nascimento){
            let Usuario = await UsuarioService.cadastraUsuario(cpf, nome, data_nascimento)
            json.result = {
                cpf,
                nome,
                data_nascimento
            }  
            return res.json(json.result)
        }
        else{
            return res.status(400).send({mensage: "Dados invalidos!"})
        }
    },
}