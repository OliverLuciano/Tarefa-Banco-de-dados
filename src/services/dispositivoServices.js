const db = require("../db")

module.exports = {
    buscarTodos: () => {
        return new Promise((aceito, rejeitado)=>{
            db.query('SELECT * FROM dispositivo', (error, results) => {
                if(error) { rejeitado(error); return;}
                aceito(results)
            })
        })
    },
    
    cadastraDispositivo: (id,nome, tipo) => {
        return new Promise((aceito,rejeitado) => {
            db.query("INSERT INTO dispositivo (idDispositivo,nome, tipo) Values(?,?, ?) ", 
                [id, nome, tipo], 
                (error, results) => {
                    if(error) { rejeitado(error); return;}
                    aceito(results)
            })
        })
    },
    updateDispositivo:(id, nome, tipo) => {
        return new Promise((aceito,rejeitado) => {
            db.query("UPDATE dispositivo SET nome = ?, tipo = ? where idDispositivo = ?", 
                [nome, tipo, id], 
                (error, results) => {
                    if(error) { rejeitado(error); return;}
                    aceito(results)
            })
        })

    },
    deletaDispositivo:(id)=>{
        return new Promise((aceito, rejeitado)=>{
            db.query('DELETE FROM dispositivo where idDispositivo = ?', [id], (error, results) => {
                if(error) { rejeitado(error); return;}
                aceito(results)
            })
        })
    }

}