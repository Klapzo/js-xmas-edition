const $cuadros = document.querySelectorAll(".cuadro");
let colores = ["rojo", "verde", "naranja", "amarillo", "azul", "violeta"];
let $primerCuadro = null;
let cuadrosRestantes = 12;

function reiniciarEstado(){
    	$cuadros.forEach(function (element) {
		element.className = "cuadro"
		element.classList.add("cubierto");

        cuadrosRestantes = 12;
        $primerCuadro = null;

	});
}

function pintarTodosLosCuadros() {
	cuadrosPintados = [];
	for (let i = 0; i < 6; i++) {
		let color = colores[i];

		for (let j = 0; j < 2; j++) {
			cuadroActual = Math.floor(Math.random() * 12);

			while (cuadrosPintados.includes(cuadroActual)) {
				cuadroActual = Math.floor(Math.random() * 12);
			}
			cuadrosPintados.push(cuadroActual);
			$cuadros[cuadroActual].classList.add(color);
		}
	}
}

function leerInputUsuario() {
	document.querySelector(".container").onclick = function (e) {
		comprobarInputUsuario(e);
	};
}

function mostrarCuadro($cuadro) {
	$cuadro.classList.remove("cubierto");
}
function ocultarCuadro($cuadro) {
	setTimeout(function () {
		$cuadro.classList.add("cubierto");
	}, 200);
	console.log("cuadro ocultado");
}
function deshabilitarCuadro($cuadro) {
	setTimeout(function () {
		$cuadro.classList.add("deshabilitado");
	}, 200);
}

function comprobarInputUsuario(e) {
	let $elemento = e.target;
	if ($elemento.classList.contains("cuadro")) {
		manejarInputUsuario($elemento);
	}
}

function comprobarCuadrosIguales($cuadro1, $cuadro2) {
	return $cuadro1.className === $cuadro2.className;
}

function manejarInputUsuario($cuadroActual) {
	mostrarCuadro($cuadroActual);

	if ($primerCuadro === null) {
		$primerCuadro = $cuadroActual;
	} else {
		if ($primerCuadro === $cuadroActual) {
			return;
		}

		if (comprobarCuadrosIguales($primerCuadro, $cuadroActual)) {
			setTimeout(deshabilitarCuadro($primerCuadro), 1000);
			setTimeout(deshabilitarCuadro($cuadroActual), 1000);
            cuadrosRestantes -= 2
		} else {
			ocultarCuadro($primerCuadro);
			ocultarCuadro($cuadroActual);
		}

		$primerCuadro = null;

		if (cuadrosRestantes === 0) {
            finDelJuego()
		}
	}
}

function finDelJuego() {
	document.querySelector(".container").style.display = "none";
	document.querySelector(".fin-del-juego").style.display = "block";
    setTimeout(function(){
	document.querySelector(".comenzar-juego").style.display = "block";
	document.querySelector(".fin-del-juego").style.display = "none";



    },7000)
}

function comenzarJuego() {
	document.querySelector(".comenzar-juego").style.display = "none";
	document.querySelector(".container").style.display = "block";

    reiniciarEstado()
	pintarTodosLosCuadros();
	leerInputUsuario();
}

document.querySelector(".comenzar-juego").onclick = comenzarJuego;
