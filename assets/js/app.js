var icono = document.getElementById('containerIcono');
icono.style.display='none';
var formularioOculto = document.getElementById('formularioOculto');
formularioOculto.style.display='none';

var iniciar = document.getElementById('iconoUno');
iniciar.addEventListener('click', function(){
  document.getElementById('containerIcono').style.display='block';
  document.getElementById('formularioOculto').style.display='block';
});



var categoria = document.getElementById('categoria');
categoria.style.display='none';
var seccionTres = document.getElementById('seccionTres');
seccionTres.style.display='none';
var seccionCuatro = document.getElementById('seccionCuatro');
seccionCuatro.style.display='none';
var seccionCinco =document.getElementById('seccionCinco');
seccionCinco.style.display='none';
var sesion = document.getElementById('btnOculto');
sesion.addEventListener('click', function(){
  document.getElementById('segundoHeader').style.display='inline-block';
  document.getElementById('categoria').style.display='block';
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







































