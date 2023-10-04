const UsuarioServices = require("../services/usuarioServices");

module.exports = {
    show: async(req, res)=>{
        let json = {error:" ",result:[]}
        let usuarios = await UsuarioServices.buscarTodos()
        for(let i in usuarios){
            json.result.push({
                id: usuarios[i].id,
                nome: usuarios[i].Nome,
                Data_de_nascimento: usuarios[i].Data_de_nascimento,
                email: usuarios[i].email
            })
        }
        res.json(json)
    },
    cadastro: async (req,res) => {
        let json = {error:" ",result:{}}
        let {Pessoa_ID,Email} = req.body
        if(Pessoa_ID && Email){
            await UsuarioServices.cadastrarUsuario(Pessoa_ID, Email,Regiao_idRegiao = 1)
            json.result = {Pessoa_ID, Email}  
            return res.json(json.result)
        }
        else{
            return res.status(400).send({mensage: "Dados invalidos!"})
        }
},
    update: async(req, res) => {
        let json = {error:" ",result:{}}
        let {id} = req.params
        let {Email} = req.body
        if(Email && id){
            await UsuarioServices.updateUsuario(id, Email)
            json.result = {Email}  
            return res.json(json.result)
        }
        else{
            return res.status(400).send({mensage: "Dados invalidos!"})
        }

    },
    delete: async(req,res) =>{
        let json = {error:" ",result:{}}
        const {id} = req.params
        await UsuarioServices.deletaUsuario(id);
        res.json(json)
    }
}