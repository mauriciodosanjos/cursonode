const produtosController = require('../controllers/ProdutosController')()

module.exports = function (app) {

    app.get('/produtos/form', produtosController.formNovo)
    app.get('/produtos', produtosController.formLista)    
    app.get('/produtos/:id', produtosController.formListaUm)
    app.post('/produtos', produtosController.formSalvar)
     
}