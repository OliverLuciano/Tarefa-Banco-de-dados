const db = require("../db")

module.exports = {
    buscarTodos: () => {
        return new Promise((aceito, rejeitado)=>{
            db.query("select usuário.email as Email,pessoa.Nome,dispositivo.nome as Marca, dispositivo.tipo as Modelo from usuário_has_dispositivo left join usuário on usuário_has_dispositivo.Usuário_Pessoa_ID = usuário.Pessoa_id left join dispositivo on usuário_has_dispositivo.Dispositivo_idDispositivo = dispositivo.idDispositivo left join pessoa on pessoa.ID = usuário.Pessoa_ID;"
            , (error, results) => {
                if(error) { rejeitado(error); return;}
                aceito(results)
            })
        })
    },
    
    cadastrarUsuarioDispositivo: (Usuário_Pessoa_ID, Dispositivo_idDispositivo) => {
        return new Promise((aceito,rejeitado) => {
            db.query("Insert Into usuário_has_dispositivo (Usuário_Pessoa_ID, Dispositivo_idDispositivo) Values(?, ?) ", 
                [Usuário_Pessoa_ID, Dispositivo_idDispositivo], 
                (error, results) => {
                    if(error) { rejeitado(error); return;}
                    aceito(results)
            })
        })
    },

    deletaUsuarioDispositivo:(Usuário_Pessoa_ID,Dispositivo_idDispositivo)=>{
        return new Promise((aceito, rejeitado)=>{
            db.query('DELETE FROM usuário_has_dispositivo where Usuário_Pessoa_ID = ? and Dispositivo_idDispositivo = ?',
            [Usuário_Pessoa_ID,Dispositivo_idDispositivo ], 
            (error, results) => {
                if(error) { rejeitado(error); return;}
                aceito(results)
            })
        })
    }

}