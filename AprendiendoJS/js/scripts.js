// Destructuring

const cliente = {
    nombre: 'Alejandra',
    tipo: 'Premium'
}

console.log(cliente); 

// crear la variable 
const nombreCliente = cliente.nombre;

let {nombre} = cliente;

console.log(nombre);