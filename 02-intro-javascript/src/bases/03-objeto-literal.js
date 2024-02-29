const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 5465464,
        lat: 14.6546,
        lng: 85.3565,
    }
}

//console.table( {persona} );

//const persona2 = persona; Se está copiando la referencia, no el objeto

const persona2 = {...persona} // ... operador spread
persona2.nombre = 'Peter';

console.log(persona2)
console.log(persona)