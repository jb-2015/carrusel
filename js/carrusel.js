//RECUPERAMOS LAS COSAS QUE VAMOS A USAR
const visor = document.querySelector('.visor')//ES EL QUE CONTIENE LA IMAGEN
const imgV = visor.querySelector('img')//LA IMAGEN DENTRO DELVISOR
const controles = document.querySelectorAll('.flecha')//LOS CONTROLES CON LOS QUE MANEJAREMOS EL CARRUSEL
const indicadores= document.getElementById('indicadores')//EL CONTENEDOR DE LOS INDICADORES DE POSICION
//DEFINICION DE ARREGLO DE RUTAS DE IMAGENES
let imagenes = ["sources/paisaje1.jpg","sources/paisaje2.jpg","sources/paisaje3.jpg","sources/paisaje4.jpg","sources/paisaje5.jpg"]
let cantidad = imagenes.length //CANTIDAD DE RUTAS CARGADAS EN EL ARREGLO
let puntero=-1; //PUNTERO QUE VA CONTENER LA POSICION EN TODO MOMENTO

window.addEventListener('load',()=>{//CAPTURAMOS EL EVENTO LOAD DE LA VENTANA, PARA CARGAR LAS COSAS QUE SE CARGAN DESDE EL PRINCIPIO
	imgV.setAttribute('src',imagenes[0]);//AL PRINCIPIO PONEMOS LA PRIMER RUTA DEL ARREGLO COMO SRC DEL IMG EN VISOR
	puntero++;//COMO AGREGAMOS UNA IMAGEN, INCREMENTAMOS EL PUNTERO

	//CAPTURA DE EVENTOS DE LAS FLECHAS QUE ESTAN EN LOS CONTROLES (LINEA 4)
	controles[0].addEventListener('click',retroceder)//CAPTURAR EL EVENTO CLICK DE LA PRIMER FLECHA, Y SE LLAMA A LA FUNCION CORRESPONDIENTE (retroceder())
	controles[1].addEventListener('click',avanzar)//CAPTURAR EL EVENTO DE LA SEGUNDA FLECHA Y SE LLAMA A LA FUNCION CORRESPONDIENTE (avanzar())

	imagenes.forEach(()=>{//HACEMOS UNA ITERACION DE ACUERDO A LA CANTIDAD DE ELEMENTOS QUE HAYAN EN IMAGENES (LINEA 7)
		let point = document.createElement('div')//CREAR UN DIV QUE EN ESTE CASO TOMARA LA FORMA DE CIRCULO RELLENO (hoja de estilos)
		point.classList.add('ind')//APLICAR LA CLASE PARA QUE TENGA EL ESTILO DEFINIDO EN LA HOJA DE ESTILOS

		indicadores.appendChild(point)//AGREGAR EL DIV AL CONTENEDOR DE INDICADORES

	})
	indicadores.querySelector('.ind').classList.add('indActual')//AL PRINCIPIO EL PRIMER ELEMENTO TENDRA UN ESTILO DESTACADO


})

function retroceder(){
	puntero--
	if(puntero<0){
		puntero=cantidad-1
	}
	imgV.setAttribute('src',imagenes[puntero])
	actualizarIndicador(puntero)
}
function avanzar(){
	puntero++
	if(puntero>=cantidad){
		puntero=0		
	}
	imgV.setAttribute('src',imagenes[puntero])
	actualizarIndicador(puntero)

}

function actualizarIndicador(index){//ACA LE QUITAMOS LA CLASE indActual  AL PUNTO QUE LA TENGA Y SE LA AÑADIMOS A LA POSICION DEL PUNTERO
	let aux = indicadores.querySelectorAll('.ind')	
	indicadores.querySelector('.indActual').classList.remove('indActual')
	aux[index].classList.add('indActual')

}