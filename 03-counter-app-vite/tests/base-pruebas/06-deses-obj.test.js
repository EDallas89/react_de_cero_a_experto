import { usContext }  from "../../src/base-pruebas/06-deses-obj"

describe('Pruebas en 06-deses-obj', () => { 
    test('usContext debe devolver un objeto', () => { 
        const clave = 'Spiderman'
        const edad = 23
        const nombre= 'Peter'

        const testContext = {
            nombreClave: clave,
            anios: edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        }

        const context = usContext({clave, nombre, edad})
        expect(testContext).toEqual(context)
     })

 })