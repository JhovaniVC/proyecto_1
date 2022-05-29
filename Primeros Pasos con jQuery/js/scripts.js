$(function(){
  'use strict';
  
  $('main article:first').hide();
  /*
  var copia = $('main article:last').clone();
  $('main').prepend(copia);
  */
  var copia = $('main article:last').clone();
  $(copia).prependTo('main');
});