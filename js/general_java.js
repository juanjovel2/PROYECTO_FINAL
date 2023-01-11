

//HAMBURGESA
document.addEventListener('DOMContentLoaded',function() {
    evento();

})

function evento(){
    const pulsar = document.querySelector('#icono_menu');
    pulsar.addEventListener("click",accion);
}

function accion(){
    const menu = document.querySelector('.no_desplegar')

    menu.classList.toggle('desplegar')

}
//----------------------------------------------------------------
//VALIDACION DE CUESTIONARIO


//1.CAPTURO EL EVENTO SUBMIT 

document.addEventListener("DOMContentLoaded", function() {
document.getElementById("formulario").addEventListener('submit', validarFormulario); 
});

// 2.FUNCION QUE VALIDA EL FORMULARIO

function validarFormulario(evento) {
//nota:El objeto "evento" detener el comportamiento por defecto de un evento
//nota:el envío del formulario,se detiene con la instrucción:

evento.preventDefault();


//casilla para escribir el mns de error
var persona = document.getElementsByClassName("casilla_error")[0]; 

// COMPROBAR QUE MINIMO TIENE 4 CARACTERES

let  palabra = document.getElementById("nombre").value;
let letras = /^[A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]{3}$/;


if(palabra == ""){
  persona.innerHTML = '*El campo "Nombre y Apellidos" esta vacio ';
  return false;
}else{

if(letras.test(palabra) ){
 persona.innerHTML = "";

}else{
  
persona.innerHTML = '* El campo "Nombre y Apellidos" no contiene el formato correcto, debe empezar por mayúscula y contener 4 digitos como mínimo';
return false;
  //sale
 }
}

// COMPROBAR LA EXPRESION REGULAR TELEFONO
let numero = document.getElementById("telefono").value;
let formato = /^[9|6|7][0-9]{8}$/;

if(numero == ""){
  persona.innerHTML = "*El campo Teléfono esta vacio ";
  return false;

} else {

if(formato.test(numero) ){
 persona.innerHTML = "";

}else{

persona.innerHTML = 'El campo "Teléfono" no contiene el formato correcto, debe contener 6 digitos y empezar por 6 o 7';
return false;
  //sale
}

// COMPROBAR LA EXPRESION REGULAR CORREO
 
    let correo = document.getElementById("correo").value;
    let escala = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;


    if(correo == ""){
      persona.innerHTML = '*El campo "Email" esta vacio ';
      return false;
    
    } else {
    
    if(escala.test(correo) ){
     persona.innerHTML = "";
    
    }else{
    
    persona.innerHTML = 'El campo "Email" no contiene el formato correcto';
    return false;
      //sale
    }
  }
  
// COMPROBAR QUE MINIMO TIENE 400 CARACTERES

let  tex = document.getElementById("textarea").value;

if(tex.length >400){
  var area = document.getElementsByClassName("casilla_error")[0];
  area.innerHTML = '* Has sobrepasado los caracteres permitidos en la casilla "¿Que necesitas?"';;
  return false;
}

  
//-------RELLENA TODOS LOS CAMPOS


    //Creo los mns
    let alerta = "Por favor, complete los siguientes campos: <br>";
    let mns = "";
  //Creo la primera condicion y cambio el valor mns
    if (document.getElementById("nombre").value == "")    {mns = mns + '\n - Nombre y Apellidos <br>';}
   //Creo la segunda condicion y añado una cadena de texto mas en mns
    if (document.getElementById("telefono").value == "") {mns = mns + '\n - Teléfono <br>';}
    //Creo la tercera condicion y añado una cadena de texto mas en mns
    if (document.getElementById("correo").value == "")  {mns = mns + '\n - Email <br>';}
    if (document.getElementById("textarea").value == "")  {mns = mns + '\n - ¿Que necesitas?';}
    if (mns != "") {
      // alert(alerta + mns);
      var completo = document.getElementsByClassName("casilla_error")[0];
      completo.innerHTML = alerta + mns;
    } else {
      document.formulario.submit()
  
    }
}

}
