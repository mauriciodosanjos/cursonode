const request = require('supertest')
const app = require('../custom_express')

describe('# ProdutosController', () => {

    it('Lista de produtos HTML', (done) => {
        request(app)
            .get('/produtos')
            .expect('Content-Type', /html/)
            .expect(200, done)
    })

    it('Lista de produtos JSON', (done) => {
        request(app)
            .get('/produtos')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
    })

    it('Cadastro de produtos JSON', (done) => {
        request(app)
            .post('/produtos')
            .send({
                "titulo": "Teste via supertest",
                "preco": 9.99,
                "descricao": "teste teste teste"
               })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(201, done)
    })


})