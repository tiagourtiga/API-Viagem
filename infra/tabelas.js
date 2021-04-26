class Tabelas {
    init(conexao) {
        this.conexao = conexao

        this.cadastrarPessoas()
        this.cadastrarReceitas()
    }

    cadastrarPessoas(){
        const sql = 'CREATE TABLE IF NOT EXISTS Pessoas (id int NOT NULL AUTO_INCREMENT, nome varchar(50) NOT NULL, dataNAscimento DATE NOT NULL, cpf varchar(14), ativo boolean NOT NULL, meta int NOT NULL, PRIMARY KEY(id))'

        this.conexao.query(sql, (erro => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('Tabela pessoas criada com sucesso')
            }
        }))
    }

    cadastrarReceitas(){
        const sql = 'CREATE TABLE IF NOT EXISTS Receitas (id int NOT NULL AUTO_INCREMENT, data DATETIME NOT NULL, valor int NOT NULL, PRIMARY KEY(id))'

        this.conexao.query(sql, (erro => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('Tabela receitas criadas com sucesso.')
            }
        }))
    }

    totalizadores(){
        const sql = 'CREATE TABLE IF NOT EXISTS Totalizadores (total int NOT NULL)'

        this.conexao.query(sql, (erro => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('Tabela totalizador criada com sucesso.')
            }
        }))
    }
}


module.exports = new Tabelas