const DispositivoServices = require("../services/dispositivoService");

module.exports = {
    show: async(req, res)=>{
        let json = {error:" ",result:[]}
        let dispositivos = await DispositivoServices.buscarTodos()
        for(let i in dispositivos){
            json.result.push({
                id: dispositivos[i].idDispositivo,
                nome: dispositivos[i].Nome,
                Tipo: dispositivos[i].Tipo
            })
        }
        res.json(json)
    },
    cadastro: async (req,res) => {
        let json = {error:" ",result:{}}
        let {id, nome, tipo} = req.body
        if(id && nome && tipo){
            await DispositivoServices.cadastraDispositivo(id, nome, tipo)
            json.result = {nome, tipo}  
            return res.json(json.result)
        }
        else{
            return res.status(400).send({mensage: "Dados invalidos!"})
        }
},
    update: async(req, res) => {
        let json = {error:" ",result:{}}
        let {id} = req.params
        let {nome, tipo} = req.body
        if(nome && tipo && id){
            console.log(`${nome}, ${tipo}, ${id}`)
            await DispositivoServices.updateDispositivo(id, nome, tipo)
            json.result = {nome, tipo}  
            return res.json(json.result)
        }
        else{
            return res.status(400).send({mensage: "Dados invalidos!"})
        }

    },
    delete: async(req,res) =>{
        let json = {error:" ",result:{}}
        const {id} = req.params
        await DispositivoServices.deletaDispositivo(id);
        res.json(json)
    }
}