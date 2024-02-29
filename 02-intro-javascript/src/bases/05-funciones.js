
//const saludar = function(nombre){
//    return `Hola, ${nombre}`;
//}
//const saludar2 = (nombre) => {
//    return `Hola, ${nombre}`;
//}
const saludar3 = (nombre) => `Hola, ${nombre}`;

console.log(saludar3('EDallas'));

const getUser = () => 
    ({
        uid: 'ABC123',
        username: 'EDallas'
    })

console.log(getUser())

const getUsuarioActivo = (nombre) => ({
    uid: 'AMF953',
    username: nombre
})

const usuarioActivo = getUsuarioActivo('Arixka');
console.log(usuarioActivo);