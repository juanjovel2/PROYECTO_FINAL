

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

// COMPROBAR QUE MINIMO TIENE 4 CARACTERES
  
let  palabra = document.getElementById("nombre").value;
if(palabra.length ==0){
  return false;
}else{
if(palabra.length <4){
  var persona = document.getElementsByClassName("casilla_error")[0];
  persona.innerHTML = "* Nombre y Apellidos incorrectos: 4 caracteres minimo";
  return false;
  //sale
 }
}

// COMPROBAR LA EXPRESION REGULAR TELEFONO
let numero = document.getElementById("telefono").value;
let formato = /^[9|6|7][0-9]{8}$/;

if (formato.test(numero)) {
  var numericos = document.getElementsByClassName("casilla_error")[0];
  numericos.innerHTML = ""
} else {
  var numericos = document.getElementsByClassName("casilla_error")[0];
  numericos.innerHTML = "* Telefono incorrecto";
  return false;
}

// COMPROBAR LA EXPRESION REGULAR CORREO
 
    let correo = document.getElementById("correo").value;
    let escala = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    if (escala.test(correo)) {
      var sobre = document.getElementsByClassName("casilla_error")[0];
      sobre.innerHTML = "";  
    } else {
      var sobre = document.getElementsByClassName("casilla_error")[0];
      sobre.innerHTML = "* Correo incorrecto";
      return false;
    }
  
// COMPROBAR QUE MINIMO TIENE 400 CARACTERES

let  tex = document.getElementById("textarea").value;

if(tex.length >400){
  var area = document.getElementsByClassName("casilla_error")[0];
  area.innerHTML = "* Has sobrepasado los caracteres permitidos en la casilla ¿Que necesitas?";;
  return false;
}



}

// //SCRIPT EXTERNO (AGRANDAR IMAGEN)

// // Obtener el ventana grande
// var modal = document.getElementById("ventana");

// // // Obtenga la imagen e insértela dentro de la ventana grande
// var img = document.getElementById("imagen_chica");
// var modalImg = document.getElementById("imagen_grande");
// var captionText = document.getElementById("subtitulo");
// img.onclick = function(){
//   modal.style.display = "block";
//   modalImg.src = this.src;
//   captionText.innerHTML = this.alt;
// }

// // Obtener el elemento <span> que cierra la ventana grande
// var span = document.getElementsByClassName("cerrar")[0];

// // Cuando el usuario hace clic en <span> (x), cierra el modal
// span.onclick = function() { 
//   modal.style.display = "none";
// }