
// // funcion declaracion 
// saludar();
// saludar('Pedro', 'Médico'); 
// saludar('Alejandra', 'Veterinaria');
// saludar('Laura'); 

// function saludar(nombre = 'Visitante' , trabajo = 'No Sabemos!'){
//     console.log('Hola '+ nombre + ' tu trabako es ' + trabajo);
// }

//funcion expresion 
const suma = (a=0, b=0) => {
    return a + b; 
}
const multiplicar = (a) =>{
    return a * 5;
}
let total;

let resultadoSuma =  suma(1, 3);
total = multiplicar(resultadoSuma);

console.log(total);
