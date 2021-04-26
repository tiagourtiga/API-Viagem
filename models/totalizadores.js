const totalizadores = require('../controllers/totalizadores')
const conexao = require('../infra/conexao')


class Totalizadores {
    lista(Totalizadores, res) {
        const sql = 'SELECT * FROM Totalizadores'

        conexao.query(sql, Totalizadores, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(201).json(resultados)
            }
        })
    }
}

module.exports = new Totalizadores