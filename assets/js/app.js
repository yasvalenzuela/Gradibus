var icono = document.getElementById('containerIcono');
icono.style.display='none';
var formularioOculto = document.getElementById('formularioOculto');
formularioOculto.style.display='none';



var iniciar = document.getElementById('iconoUno');
iniciar.addEventListener('click', function(){
  document.getElementById('containerIcono').style.display='block';
  document.getElementById('formularioOculto').style.display='block';
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
})





































