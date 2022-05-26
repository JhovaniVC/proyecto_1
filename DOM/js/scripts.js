// console.log("1"); 

(function(){
  'use strict';
  document.addEventListener('DOMContentLoaded', function(){
    
    // // getElementaryById
    // var logo = document.getElementById('logo');
    // var navegacion = document.getElementById('navegacion');
    // navegacion.style.display = "none";

    //getElementsByClassName
    // var navegacion = document.getElementsByClassName('navegacion');
    // console.log(navegacion[0]);

    // var contenido = document.getElementsByClassName('contenido');
    // console.log(contenido[0]); 

    // contenido[0].style.display = 'none';

    //getElementsByTagName
    // var enlaces = document.getElementsByTagName('a');
    // console.log(enlaces.length);
    
    // for(var i = 0; i < enlaces.length; i++ ){
    //   enlaces[i].setAttribute('tarjet', '_blank');
    // }

    // var enlacesSidebar = document.getElementById('sidebar').getElementsByTagName('a');
    // console.log(enlacesSidebar);

    // for(var i = 0; i < enlacesSidebar.length; i++){
    //   enlacesSidebar[i].setAttribute('href', 'http://www.google.com');
    // }
/*
    var logo = document.querySelector('.logo');
    console.log(logo); 

    var encabezado = document.querySelectorAll('h2, footer p '); 
    console.log(encabezado); 

    var enlaces = document.querySelector('a');
    console.log(enlaces);
*/

/*
    var enlace = document.querySelectorAll('a');
    
    for(var i = 0; i < enlace.length; i++){
      console.log(enlace[i].innerText);
    }
*/
    var enlaces = document.querySelectorAll('#menu ul li a')[0];
    console.log(enlaces.nodeType);
    console.log(enlaces.nodeName);
    console.log(enlaces.attributes);
    console.log(enlaces.firstChild);
    console.log(enlaces.firstChild.nodeValue);

    enlaces.firstChild.nodeValue = "Home";
    enlaces.id = "mi_id";
    

  });
  
})();
// console.log("3"); 