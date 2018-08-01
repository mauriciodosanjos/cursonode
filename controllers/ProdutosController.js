module.exports = () => {
    return {

        formNovo: (req, res) => {
            res.render('produtos/form')
        },

        formLista: (req, res) => {

            const conn = require('../infra/connectionFactory')()
            const ProdutosDAO = require('../infra/ProdutosDAO') //classe
            const produtosDAO = new ProdutosDAO(conn) //obj    

            produtosDAO.listarTodos(function (err, result, fields) {

                res.format({
                    html: function () {
                        res.render('produtos/lista', {
                            produtos: result
                        })
                    },
                    json: function () {
                        res.json(result)
                    }
                })
            })

            conn.end()
        },

        formListaUm: (req, res) => {

            const idDoProduto = req.params.id

            const conn = require('../infra/connectionFactory')()
            const ProdutosDAO = require('../infra/ProdutosDAO') //classe
            const produtosDAO = new ProdutosDAO(conn) //obj    

            produtosDAO.listarUm(idDoProduto)
                .then(function (results) {
                    res.json(results)
                })

            conn.end()
        },

        formSalvar: (req, res) => {

            const conn = require('../infra/connectionFactory')()
            const ProdutosDAO = require('../infra/ProdutosDAO') //classe
            const produtosDAO = new ProdutosDAO(conn) //obj    

            const produto = req.body

            //validações
            req.assert('titulo', 'Titulo obrigatório').notEmpty()
            req.assert('preco', 'Preço obrigatório').notEmpty()
            req.assert('preco', 'Preço precisa ser numerico').isFloat()

            const errors = req.validationErrors()

            //console.log(errors)

            if (errors) {

                res.status(400).format({
                    html: () => {
                        res.render('produtos/form', {
                            validationErrors: errors
                        })
                    },
                    json: () => {
                        res.json(errors)
                    }
                })

            } else {

                produtosDAO.salvar(produto)
                    .then(function (results) {

                        res.format({
                            html: () => {
                                res.redirect('/produtos')
                            },
                            json: () => {
                                res.status(201).json({
                                    msg: 'Produto criado com sucesso'
                                })
                            }
                        })

                    })
                    .catch((erroGeral) => {
                        res.send(erroGeral)
                    })

                conn.end()
            }

        }
    }
}