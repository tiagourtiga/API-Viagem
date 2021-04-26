const mysql = require('mysql')

const conexao = mysql.createConnection({
  host: 'localhost',
  porta: 3306,
  user: 'root',
  password: '1990090urt',
  database: 'planejamento-viagem'

})

module.exports = conexao