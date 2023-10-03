const db = require("../db")

module.exports = {
    buscarTodos: () => {
        return new Promise((aceito, rejeitado)=>{
            db.query('SELECT * FROM pessoa', (error, results) => {
                if(error) { rejeitado(error); return;}
                aceito(results)
            })
        })
    },
    
    cadastrarPessoa: (nome, data_de_nascimento) => {
        return new Promise((aceito,rejeitado) => {
            db.query("INSERT INTO pessoa (nome, data_de_nascimento) Values(?, ?) ", 
                [nome, data_de_nascimento], 
                (error, results) => {
                    if(error) { rejeitado(error); return;}
                    aceito(results)
            })
        })
    },
    updatePessoa:(id, nome, data_de_nascimento) => {
        return new Promise((aceito,rejeitado) => {
            db.query("UPDATE pessoa SET nome = ?, data_de_nascimento = ? where ID = ?", 
                [nome, data_de_nascimento, id], 
                (error, results) => {
                    if(error) { rejeitado(error); return;}
                    aceito(results)
            })
        })

    },
    deletaPessoa:(id)=>{
        return new Promise((aceito, rejeitado)=>{
            db.query('DELETE FROM pessoa where ID = ?', [id], (error, results) => {
                if(error) { rejeitado(error); return;}
                aceito(results)
            })
        })
    }

}