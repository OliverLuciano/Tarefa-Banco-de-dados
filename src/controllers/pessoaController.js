const PessoaServices = require("../services/pessoaServices");

module.exports = {
    show: async(req, res)=>{
        let json = {error:" ",result:[]}
        let pessoas = await PessoaServices.buscarTodos()
        for(let i in pessoas){
            json.result.push({
                id: pessoas[i].ID,
                nome: pessoas[i].Nome,
                Data_de_nascimento: pessoas[i].Data_de_nascimento
            })
        }
        res.json(json)
    },
    cadastro: async (req,res) => {
        let json = {error:" ",result:{}}
        let {nome, Data_de_nascimento} = req.body
        if(nome && Data_de_nascimento){
            await PessoaServices.cadastrarPessoa(nome, Data_de_nascimento)
            json.result = {nome, Data_de_nascimento}  
            return res.json(json.result)
        }
        else{
            return res.status(400).send({mensage: "Dados invalidos!"})
        }
},
    update: async(req, res) => {
        let json = {error:" ",result:{}}
        let {id} = req.params
        let {nome, Data_de_nascimento} = req.body
        if(nome && Data_de_nascimento && id){
            console.log(`${nome}, ${Data_de_nascimento}, ${id}`)
            await PessoaServices.updatePessoa(id, nome, Data_de_nascimento)
            json.result = {nome, Data_de_nascimento}  
            return res.json(json.result)
        }
        else{
            return res.status(400).send({mensage: "Dados invalidos!"})
        }

    },
    delete: async(req,res) =>{
        let json = {error:" ",result:{}}
        const {id} = req.params
        await PessoaServices.deletaPessoa(id);
        res.json(json)
    }
}