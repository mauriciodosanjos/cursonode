// module.exports = function (conn) {
//     return {
//         listarTodos: function (callback) {
//             conn.query('SELECT * from livros', callback)
//         },
//         listarUm: function (idDoProduto, callback) {
//             conn.query('SELECT * from livros where id = ?', idDoProduto, callback)
//         }
//     }
// }

class ProdutosDAO {

    constructor(conn) {
        this._conn = conn
    }

    listarTodos(callback) {
        this._conn.query('SELECT * from livros', callback)
    }

    listarUm(idDoProduto, callback) {
        return new Promise((resolve, reject) => {
            this._conn
                .query('SELECT * FROM livros WHERE id = ?',
                    idDoProduto,
                    function (erros, result) {
                        resolve(result)
                        reject(erros)
                    })
        })
    }

    salvar(produto, callback) {
        return new Promise((resolve, reject) => {
            this._conn
                .query('INSERT INTO livros SET ?',
                    produto,
                    function (err, result) {
                        if (err) {
                            reject(err)
                        }
                        resolve(result)
                    })
        })
    }

}
module.exports = ProdutosDAO