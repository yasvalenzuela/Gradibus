var registrar = document.getElementById('btn');
registrar.addEventListener('click', function(){
  /*console.log('diste un click');*/
  var nombre = document.getElementById('nombre').value;
  var correo = document.getElementById('correo').value;
  var contraseña = document.getElementById('contraseña').value;

  console.log(nombre);
  console.log(correo);
  console.log(contraseña);
})



































/*
$(document).ready(function(){
  /*
  *formulario desplegable comience oculto
  */

/*
  $('#containerIcono').hide();
  $('#formularioOculto').hide();

  *evento de click al icono
  *que esta al lado de iniciar sesion
  */
/*
	$('#iconoUno').click(function(){
    $('#containerIcono').show();
    $('#formularioOculto').show();
  })
  /*
  *desahibilitar el boton
  *del formulario desplegable oculto
  */
  /*$('#btnOculto').attr('disabled', true);*/
  /*
  $('#btnOculto').click(function(){
    $('#primerHeader').hide();
    $('#fondo').hide();
  })
});
*/


/*
*var correo = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
*if($('#correo').val()===""){
*$('#correo').focus().after("<span class='error'>Ingrese correo electrónico correcto</span>");
*}
*
*
*
*/