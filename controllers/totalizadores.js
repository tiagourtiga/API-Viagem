const tota = require('../models/totalizadores')

module.exports = app => {
    app.get('/api/totalizadores', (req, res) => {
        Totalizadores.lista(res)
    })
}