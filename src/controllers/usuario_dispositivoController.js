const Usuario_dispositivoServices = require("../services/usuario_dispositivoServices");

module.exports = {
    show: async(req, res)=>{
        let json = {error:" ",result:[]}
        let Informacoes = await Usuario_dispositivoServices.buscarTodos()
        for(let i in Informacoes){
            json.result.push({
                Email: Informacoes[i].Email,
                Nome: Informacoes[i].Nome,
                Marca: Informacoes[i].Marca,
                Modelo: Informacoes[i].Modelo
            })
        }
        res.json(json)
    },
    cadastro: async (req,res) => {
        let json = {error:" ",result:{}}
        let {Usuário_Pessoa_ID,Dispositivo_idDispositivo} = req.body
        if(Usuário_Pessoa_ID && Dispositivo_idDispositivo){
            await Usuario_dispositivoServices.cadastrarUsuarioDispositivo(Usuário_Pessoa_ID, Dispositivo_idDispositivo)
            json.result = {Usuário_Pessoa_ID, Dispositivo_idDispositivo}  
            return res.json(json.result)
        }
        else{
            return res.status(400).send({mensage: "Dados invalidos!"})
        }
    },
    delete: async(req,res) =>{
        let json = {error:" ",result:{}}
        const {Usuário_Pessoa_ID, Dispositivo_idDispositivo} = req.query
        console.log(`${Usuário_Pessoa_ID} e ${Dispositivo_idDispositivo}`)
        await Usuario_dispositivoServices.deletaUsuarioDispositivo(Usuário_Pessoa_ID,Dispositivo_idDispositivo );
        res.json(json)
    }
}