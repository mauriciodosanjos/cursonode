const assert = require('assert')
const soma = require('./soma')


describe('# Testando Soma', function () {
    it('2 + 2 deve retornar 4', function () {
        assert.equal(soma(2, 2), 4, 'Deu erro soma')
    })
})