const conexao = require('../infra/conexao')


class Pessoas {
    cadastrar(Pessoas, res) {
        const sql = 'INSERT INTO Pessoas SET ?'

        conexao.query(sql, Pessoas, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(201).json(resultados)
            }
        })
    }

    lista(res) {
        const sql = 'SELECT * FROM Pessoas'

        conexao.query(sql, (erro, resultados) => {
            if(erro) {
            res.status(400).json(erro)
            } else {
            res.status(200).json(resultados)
            }
        })       
    
    }
    
    listaPorId(id, res) {
        const sql = `SELECT * FROM Pessoas WHERE id=${id}`

        conexao.query(sql, (erro, resultados) => {
            const pessoa = resultados[0]
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(pessoa)
            }
        })
    }

    altera(id, valores, res) {
        const sql = 'UPDATE Pessoas SET ? WHERE id=?'

        conexao.query(sql, [valores, id], (erro, resultados) => {
             if(erro) {
                 res.status(400).json(erro)
             } else {
                 res.status(200).json(resultados)
             }
        })
    }
    
}

module.exports = new Pessoas