const db = require("../db")

module.exports = {
    buscarTodos: () => {
        return new Promise((aceito, rejeitado)=>{
            db.query('SELECT * FROM usuario', (error, results)=>{
                if(error) { rejeitado(error); return;}
                aceito(results)
            })
        })
    },
    
    buscaUsuario: (id) => {
        return new Promise((aceito,rejeitado) => {
            db.query("SELECT * FROM usuario WHERE id = ?", [id], (error, results)=>{
                if(error) { rejeitado(error); return;}
                if(results ){
                    aceito(results[0])}
            })
        })
    },

    cadastraUsuario: (cpf, nome, data_nascimento) => {
        return new Promise((aceito,rejeitado) => {
            db.query("INSERT INTO usuario (cpf, nome, data_nascimento) Values(?, ?, ?) ", 
                [cpf, nome, data_nascimento], 
                (error, results) => {
                    if(error) { rejeitado(error); return;}
                    aceito(results)
            })
        })
    }

}