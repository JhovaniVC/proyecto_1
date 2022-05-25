
//function declaration 
saludar('Alex', 'Desarrollador Web');
saludar('Gael');
saludar('José', 'Medico');
saludar();

function saludar(nombre = 'Visitante', trabajo = 'No Sabemos!'){
    console.log('Hola '+ nombre + ' tu trabajo es ' +trabajo);
}



// function expression 

const suma = function(a = 0, b = 0){
    console.log(a + b);
}
suma(10, 20);
suma(30, 50);
suma(100, 200);

//IIFE
(function(tecnologia){
    console.log('AQUI ESTOY!! aprendiendo ' + tecnologia);
})('JavaScript');