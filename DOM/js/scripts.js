console.log("1"); 

(function(){
  'use strict';
  document.addEventListener('DOMContentLoaded', function(){
    
    // // getElementaryById
    // var logo = document.getElementById('logo');
    // var navegacion = document.getElementById('navegacion');
    // navegacion.style.display = "none";

    var navegacion = document.getElementsByClassName('navegacion');
    console.log(navegacion[0]);

    var contenido = document.getElementsByClassName('contenido');
    console.log(contenido[0]); 

    contenido[0].style.display = 'none';
    


  });
  
})();
console.log("3"); 