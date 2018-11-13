//selección de elementos de html
let boton = document.getElementById('btn-p');
let color = document.getElementById('body-app');

//alert("JavaScript is runnig!");

boton.style.opacity = '0';

const socket = io();

//colores
var rojo = '#ff471a';
var azul = '#00ccff';
var azulFuerte = '#80ced6';
var naranja = '#ff944d';
//bandera
var bandera = 'play';
//pausado, play



socket.on('volts', function(data){

	//visualización de datos por consola
	console.log(data);
	//console.log(typeof(data));
	//condicionales
	filtro(data);
	
});

function filtro(data){
	
	//asignaciones
	if(parseInt(data) == 1){
		//lejos: color azul fuerte, botón escondido, alarma pausada, bandera apagada
		color.style.backgroundColor = azulFuerte;
		boton.style.opacity = '0';
		pauseAudio();
	}else if(parseInt(data) == 2){
		//medio: color naranja, botón escondido, alarma pausada, bandera apagada
		console.log("naranja");
		color.style.backgroundColor = naranja;
		boton.style.opacity = '0';
		pauseAudio();
	} else if(parseInt(data) == 3){
		//cerca: color rojo, botón mostrado, alarma activada, bandera encendida
		color.style.backgroundColor = rojo;
		boton.style.opacity = '1';
		playAudio();
	} else {
		console.log("Nada de lo anterior");
		color.style.backgroundColor = azul;
		boton.style.opacity = '0';
		pauseAudio();
	}
	
}

function playAudio() { 
	let alarma = document.getElementById('alarma');
	if(bandera == 'play'){
		alarma.play().catch(() => void 0);  
	}
} 

function pauseAudio() { 
	let alarma = document.getElementById('alarma');
	bandera = 'pausado';
    alarma.pause(); 
}