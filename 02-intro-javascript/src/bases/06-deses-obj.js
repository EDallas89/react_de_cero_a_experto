const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
}

const {nombre} = persona;
console.log(nombre)

const useContext = ({nombre, edad, rango = 'Capitán', clave}) => {
    
    //console.log(nombre, edad, rango)
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.545,
            lng: -12.654
        }
    }

}

const {nombreClave, anios, latlng:{lat, lng}} = useContext(persona)

console.log(nombreClave, anios)
console.log(lat, lng)