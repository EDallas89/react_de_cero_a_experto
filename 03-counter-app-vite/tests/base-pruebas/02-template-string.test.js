const { getSaludo } = require("../../src/base-pruebas/02-template-string")

describe('Pruebas en 02-template-string', () => { 
    test('getSaludo debe devolver "Hola EDallas', () => { 
        const name = 'EDallas'
        const message = getSaludo(name)

        expect(message).toBe(`Hola ${name}`)
     })
 })