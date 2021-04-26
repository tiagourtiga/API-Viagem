const Pessoas = require('../models/pessoas')

module.exports = app => {
    app.get('/api/pessoas', (req, res) => {
        Pessoas.lista(res)
    })

    app.get('/api/pessoas/:id', (req, res) => {
        const id  = parseInt(req.params.id)

        Pessoas.listaPorId(id, res)
        
    })

    app.post('/api/pessoas', (req, res) => {
        const pessoas = req.body 
        
        Pessoas.cadastrar(pessoas, res)
    })

    app.put('/api/pessoas/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const valores = req.body

        Pessoas.altera(id, valores, res)
    })
}
