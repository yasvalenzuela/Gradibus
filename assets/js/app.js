$(document).ready(function(){
  /*
  *formulario desplegable comience oculto
  */
  $('#containerIcono').hide();
  $('#formularioOculto').hide();
  /*
  *evento de click al icono
  *que esta al lado de iniciar sesion
  */
	$('#iconoUno').click(function(){
    $('#containerIcono').show();
    $('#formularioOculto').show();
  })
  /*
  *desahibilitar el boton
  *del formulario desplegable oculto
  */
  $('#btnOculto').attr('disabled', true);


});