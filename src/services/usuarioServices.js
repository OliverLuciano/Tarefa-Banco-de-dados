const db = require("../db")

module.exports = {
    buscarTodos: () => {
        return new Promise((aceito, rejeitado)=>{
            db.query('select usuário.email, pessoa.id, pessoa.Data_de_nascimento, pessoa.Nome from pessoa left join usuário on ID where pessoa.ID = usuário.Pessoa_id;'
            , (error, results) => {
                if(error) { rejeitado(error); return;}
                aceito(results)
            })
        })
    },
    
    cadastrarUsuario: (Pessoa_ID, email,Regiao_idRegiao) => {
        return new Promise((aceito,rejeitado) => {
            db.query("Insert Into usuário (Pessoa_ID,Email, Regiao_idRegiao) Values(?, ?, ?) ", 
                [Pessoa_ID, email,Regiao_idRegiao], 
                (error, results) => {
                    if(error) { rejeitado(error); return;}
                    aceito(results)
            })
        })
    },
    updateUsuario:(id, Email) => {
        return new Promise((aceito,rejeitado) => {
            db.query("UPDATE usuário SET email = ? where Pessoa_ID = ?", 
                [Email, id], 
                (error, results) => {
                    if(error) { rejeitado(error); return;}
                    aceito(results)
            })
        })

    },
    deletaUsuario:(id)=>{
        return new Promise((aceito, rejeitado)=>{
            db.query('DELETE FROM usuário where Pessoa_ID = ?', [id], (error, results) => {
                if(error) { rejeitado(error); return;}
                aceito(results)
            })
        })
    }

}