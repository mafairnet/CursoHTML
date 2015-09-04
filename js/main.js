var mensaje = '';
var titleObject;


function escribe(identificador)
{
	mensaje = document.getElementById(identificador).value;
	//console.log(mensaje);
	//alert(mensaje);
	//document.write('<center>'+mensaje+'</center>');
	titleObject = document.getElementById('titulo');
	titleObject.innerHTML = titleObject.innerHTML + mensaje;
}

function imagenLoco(imagen)
{
	var imagenEditar = document.getElementById(imagen);
	var width = imagenEditar.clientWidth;
	var height = imagenEditar.clientHeight;
	var maxSize = 200;
	console.log('Tamaño imagen W['+width+']H['+height+']');
	//imagenEditar.style.height = '200%';
	//imagenEditar.style.width = '200%';
	for (var i = 100; i < 150; i++) { 
    	 imagenEditar.style.width = i+'%';
	}
	alert('me espero');
	for (var i = 150; i < 200; i++) { 
    	 imagenEditar.style.width = i+'%';
	}
}

//alert(mensaje);
//console.log(mensaje);