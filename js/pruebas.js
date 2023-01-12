
function probarValidarNombre() {
    console.assert(
        validarNombre('') === 'el nombre no puede estar vacío.',
        'La función validar nombre no validó que el nombre no sea vacío.',
    )
  
    console.assert(
        validarNombre(
            '11111111111111111111111111111111111111111111111111111') ===
        'el nombre no puede tener más de 50 caracteres.',
        'La función validar nombre no validó que el nombre sea menor a 50 caracteres.',
    )
  
    console.assert(
      validarNombre('valid') ===
      "",
      'La función validar nombre falló con un nombre válido.',
  )
  }
  probarValidarNombre()
  
  
  function probarContieneSoloLetras()
  {
      console.assert(
          validarContieneSoloLetras("12345") === false, 
          "La función validar contiene solo letras no validó que el nombre no contenga números."
      )
      
      console.assert(
          validarContieneSoloLetras("!#$%&/()=?") === false, 
          "La función validar contiene solo letras no validó que el nombre no contenga caracteres especiales."
      )
  
      console.assert(
          validarContieneSoloLetras("valid") === true, 
          "La función validar contiene solo letras no funcionó con un nombre con solo letras."
      )
  }
  probarContieneSoloLetras()
  
  
  function probarValidarCiudad()
  {
      console.assert(
          validarCiudad("") === "no puede dejar el campo de ciudad en blanco.", 
          "La función validar ciudad no validó que la ciudad no esté en blanco."
      )
  
      console.assert(
          validarCiudad("Buenos Aires") === "", 
          "La función validar ciudad no funcionó con una ciudad válida."
      )
  }
  probarValidarCiudad()
  
  
  function probarValidarComportamiento()
  {
      console.assert(
          validarComportamiento("") === "seleccioná un comportamiento.", 
          "La función validar comportamiento no validó que se haya seleccionado una opción de comportamiento."
      )
  
      console.assert(
          validarComportamiento("bueno") === "", 
          "La función validar comportamiento no funcionó al seleccionar un comportamiento válido."
      )
  }
  probarValidarComportamiento()
  
  
  function probarValidarDescripcionRegalo()
  {
      console.assert(
          validarDescripcionRegalo("") === "la descripción del regalo no puede estar vacía.", 
          "La función validar descripción regalo no validó que el campo de regalo no esté en blanco."
      )
      
      console.assert(
          validarDescripcionRegalo("11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111") === 
          "la descripción del regalo no puede exceder los 100 caracteres.", 
          "La función validar descripción regalo no validó que el campo de regalo no exceda los 100 caracteres."
      )
       
      console.assert(
          validarDescripcionRegalo("descripción válida") === 
          "", 
          "La función validar descripción regalo no funcionó al enviar una descripción válida."
      )
      
      
  }
  probarValidarDescripcionRegalo()
  