var icono = document.getElementById('containerIcono');
icono.style.display='none';
var formularioOculto = document.getElementById('formularioOculto');
formularioOculto.style.display='none';

var iniciar = document.getElementById('iconoUno');
iniciar.addEventListener('click', function(){
  document.getElementById('containerIcono').style.display='block';
  document.getElementById('formularioOculto').style.display='block';
});


var segundoHeader=document.getElementById('segundoHeader');
segundoHeader.style.display='none';
var categoria = document.getElementById('categoria');
categoria.style.display='none';
var seccionUno = document.getElementById('seccionUno');
seccionUno.style.display='none';
var seccionDos =document.getElementById('seccionDos');
seccionDos.style.display='none';
var seccionTres = document.getElementById('seccionTres');
seccionTres.style.display='none';


var sesion = document.getElementById('btnOculto');
sesion.addEventListener('click', function(){
  document.getElementById('primerHeader').style.display='none';
  document.getElementById('seccion').style.display='none';
  document.getElementById('segundoHeader').style.display='inline-block';
  document.getElementById('seccionUno').style.display='block';
  document.getElementById('categoria').style.display='block';
  document.getElementById('seccionDos').style.display='block';
  document.getElementById('seccionTres').style.display='block';
  console.log('funciona');
})


var registrar = document.getElementById('btn');
registrar.addEventListener('click', function(){
  /*console.log('diste un click');*/
  var correo = document.getElementById('email').value;
  var contrasena = document.getElementById('password').value;

  firebase.auth().signInWithEmailAndPassword(correo, contrasena).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
  });
  console.log(correo);
  console.log(contrasena);
});


var boton = document.getElementById('boton');
boton.addEventListener('click', function(){
  //texto ingresado
  var posteo = document.getElementById('post').value;
  //limpiar el textarea
  document.getElementById('post').value = '';
  //contenedor que esta en el html
  var cont = document.getElementById('cont');
  //el div que contiene cada comentario
  var nuevoPost = document.createElement('div');

  //creo un nodo tipo texto 
  var textoNuevoPost = document.createTextNode(posteo);
  //creo un parrafo
  var elementoContenedor = document.createElement('p');
  elementoContenedor.appendChild(textoNuevoPost);
  nuevoPost.appendChild(elementoContenedor);

  cont.appendChild(nuevoPost);
})






























