$(function(){
  'use strict';

  $('div.logo img').addClass('activo');

  $('.navegacion').show();
  $('main article:first').addClass('activo');

  $('.navegacion ul li a').on('click', function(e){
    $('.navegacion ul li a').removeClass('activo');
    e.preventDefault();
    $(this).addClass('activo');
  });

  /*
  $('#menu') .on('click', function(){
    $('#navegacion').show();
  });
*/
  /*
  $('div.logo img').on('mouseenter', function(){
    console.log("Sobre el logo");
  });
  $('div.logo img').on('mouseleave', function(){
    console.log("Fuera del logo");
  });
  */
  /*
  $('div.logo img').on('click', function(){
    $(this).remove();
  });
*/
  /*
  $('div.logo img').on('click', function(){
    console.log("Haz hecho click en el logo");
  });
*/

  /**
  $('main article:first').hide();
  /*
  var copia = $('main article:last').clone();
  $('main').prepend(copia);

  var copia = $('main article:last').clone();
  $(copia).prependTo('main');
   */
  


});