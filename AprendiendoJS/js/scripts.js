
const musica = {
    reproducir: function(cancion){
        console.log('Reproduciendo la cancion: ' + cancion);
    },
    pausar: function(){
        console.log('Paused...');
    }
}
//los metodos tambien pueden ir por fuera 
musica.borrar = function(id){
    console.log('Borrando la cancion con el ID : ' + id)
}

musica.reproducir('No idea');
musica.pausar();
musica.reproducir('Otra Noche'); 
musica.borrar(121);