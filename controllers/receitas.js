const Receitas = require('../models/receitas')

module.exports = app => {
    app.get('/api/receitas', (req, res) => {
        Receitas.lista(res)
    })

    app.get('/api/receitas/:id', (req, res) => {
        const id  = parseInt(req.params.id)

        Receitas.listaPorId(id, res)
        
    })

    app.post('/api/receitas', (req, res) => {
        const receita = req.body 
        
        Receitas.cadastrar(receita, res)
    })

    app.put('/api/receitas/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const valores = req.body

        Receitas.altera(id, valores, res)
    })

    app.delete('/api/receitas/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Receitas.deleta(id, res)
    })
}
