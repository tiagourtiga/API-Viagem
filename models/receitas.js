const conexao = require('../infra/conexao')


class Receitas {
    cadastrar(Receitas, res) {
        const sql = 'INSERT INTO Receitas SET ?'

        conexao.query(sql, Receitas, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(201).json(resultados)
            }
        })
    }

    lista(res) {
        const sql = 'SELECT * FROM Receitas'

        conexao.query(sql, (erro, resultados) => {
            if(erro) {
            res.status(400).json(erro)
            } else {
            res.status(200).json(resultados)
            }
        })       
    
    }
    
    listaPorId(id, res) {
        const sql = `SELECT * FROM Receitas WHERE id=${id}`

        conexao.query(sql, (erro, resultados) => {
            const receita = resultados[0]
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(receita)
            }
        })
    }

    altera(id, valores, res) {
        const sql = 'UPDATE Receitas SET ? WHERE id=?'

        conexao.query(sql, [valores, id], (erro, resultados) => {
             if(erro) {
                 res.status(400).json(erro)
             } else {
                 res.status(200).json(resultados)
             }
        })
    }

    deleta(id, res) {
        const sql = 'DELETE FROM Receitas WHERE id=?'

        conexao.query(sql, id, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultados)
            }
        })
    }
    
}

module.exports = new Receitas