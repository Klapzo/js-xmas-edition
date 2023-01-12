const $formulario = document.querySelector("#carta-a-santa");
$formulario.onsubmit = validarFormulario;

function validarNombre(nombre) {
	if (nombre.length === 0) {
		return "el nombre no puede estar vacío.";
	}

	if (nombre.length >= 50) {
		return "el nombre no puede tener más de 50 caracteres.";
	}

	if (!validarContieneSoloLetras(nombre)) {
		return "el nombre debe contener únicamente letras.";
	}

	return "";
}

function validarContieneSoloLetras(nombre) {
	const contieneSoloLetras = /^[A-z]+$/.test(nombre);

	if (!contieneSoloLetras) {
		return false;
	}
	return true;
}

function validarCiudad(ciudad) {
	if (ciudad.length === 0) {
		return "no puede dejar el campo de ciudad en blanco.";
	}

	return "";
}

function validarComportamiento(comportamiento) {
	if (comportamiento == 0) {
		return "seleccioná un comportamiento.";
	}

	return "";
}

function validarDescripcionRegalo(descripcionRegalo) {
	if (descripcionRegalo.length === 0) {
		return "la descripción del regalo no puede estar vacía.";
	}

	if (descripcionRegalo.length >= 100) {
		return "la descripción del regalo no puede exceder los 100 caracteres.";
	}

	return "";
}

function validarFormulario(event) {
	const nombre = $formulario.nombre.value;
	const ciudad = $formulario.ciudad.value;
	const comportamiento = $formulario.comportamiento.value;
	const descripcionRegalo = $formulario["descripcion-regalo"].value;

	const erroresNombre = validarNombre(nombre);
	const erroresCiudad = validarCiudad(ciudad);
	const erroresComportamiento = validarComportamiento(comportamiento);
	const erroresDescripcionRegalo =
		validarDescripcionRegalo(descripcionRegalo);

	const errores = {
		nombre: erroresNombre,
		ciudad: erroresCiudad,
		comportamiento: erroresComportamiento,
		"descripcion-regalo": erroresDescripcionRegalo,
	};

	noHayErrores = manejarErrores(errores) === 0;

	if (noHayErrores) {
		document.querySelector("#exito").className = "";
		$formulario.className = "oculto";

        setTimeout(function(){
            window.location.href = "wishlist.html"},5000)
	}

	event.preventDefault();
}

function manejarErrores(errores) {
	const keys = Object.keys(errores);
	const $errores = document.querySelector("#errores");
	$errores.innerHTML = "";

	let cantErrores = 0;

	keys.forEach(function (key) {
		const error = errores[key];

		if (error) {
			$formulario[key].className = "error";
			const $error = document.createElement("li");

			$error.innerText = error;
			$errores.appendChild($error);

			cantErrores += 1;
		} else {
			$formulario[key].className = "";
		}
	});

	return cantErrores;
}

