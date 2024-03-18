const { getHeroeById, getHeroesByOwner } = require("../../src/base-pruebas/08-imp-exp")
const {heroe} = require("../../src/data/heroes")

describe('Pruebas en 08-imp-exp', () => { 
   test('getHeroeById debe devolver un hereo por id', () => { 
        const id = 1
        const hero = getHeroeById(id)

        expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
    })

    test('getHeroeById debe devolver undefined si el id no existe', () => { 
        const id = 100
        const hero = getHeroeById(id)

        expect(hero).toBeFalsy()
        // or
        expect(hero).toBe(undefined)
    })

    test('getHeroesByOwner debe devolver heroes de DC', () => { 
        const owner = 'DC'
        const heroes = getHeroesByOwner(owner)

        expect(heroes.length).toBe(3)
        expect(heroes).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
          ])
        
        //mejor esto
        expect(heroes).toEqual(heroes.filter((heroe) => heroe.owner === owner))
    })

    test('getHeroesByOwner debe devolver heroes de Marvel', () => { 
        const owner = 'Marvel'
        const heroes = getHeroesByOwner(owner)

        expect(heroes.length).toBe(2)        
        //mejor esto
        expect(heroes).toEqual(heroes.filter((heroe) => heroe.owner === owner))
    })
})