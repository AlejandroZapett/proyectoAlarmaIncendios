let boton = document.getElementById('btn-p');
boton.style.opacity = '0';

const socket = io();

//colores
var rojo = '#ff471a';
var azul = '#00ccff';
var naranja = '#ff944d';
//bandera
var bandera = 'apagada'; //apagada, encendida


socket.on('volts', function(data){

	//visualización de datos por consola
	console.log(data);
	console.log(typeof(data));
	//condicionales
	filtro(data);
	
});

function filtro(data){

	//selección de elementos de html
	let color = document.getElementById('body-app');
	let alarma = document.getElementById('alarma');
	//asignaciones
	if(data == '1'){
		//lejos: color azul, botón escondido, alarma pausada, bandera apagada
		color.style.backgroundColor = azul;
		boton.style.opacity = '0';
		bandera = 'apagada';
		pauseAudio();
	} else if(data == '2'){
		//medio: color naranja, botón escondido, alarma pausada, bandera apagada
		color.style.backgroundColor = naranja;
		boton.style.opacity = '0';
		bandera = 'apagada';
		pauseAudio();
	} else if(data == '3'){
		//cerca: color rojo, botón mostrado, alarma activada, bandera encendida
		color.style.backgroundColor = rojo;
		boton.style.opacity = '1';
		playAudio(bandera);
		bandera = 'encendida';
	}
	
}

function playAudio(b) { 
	if (bandera == 'apagada'){
		alarma.play(); 
	}  
} 

function pauseAudio() { 
    alarma.pause(); 
}