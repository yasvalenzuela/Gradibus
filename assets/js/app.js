document.getElementById('containerIcono').style.display='none';
document.getElementById('formularioOculto').style.display='none';




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

/*sección Post*/
  $('.btn').click(function(){
        var post = $('#postea').value();
        $('#postea').value('');
      
      });
    
  $('#myCarousel').carousel({
      interval: 5000
          });
   
          //Handles the carousel thumbnails
          jQuery(document).ready(function($) {
   
          $('#myCarousel').carousel({
                  interval: 5000
          });
   
          //Handles the carousel thumbnails
          $('[id^=carousel-selector-]').click(function () {
          var id_selector = $(this).attr("id");
          try {
              var id = /-(\d+)$/.exec(id_selector)[1];
              console.log(id_selector, id);
              jQuery('#myCarousel').carousel(parseInt(id));
          } catch (e) {
              console.log('Regex failed!', e);
          }
      });
          // When the carousel slides, auto update the text
          $('#myCarousel').on('slid.bs.carousel', function (e) {
                   var id = $('.item.active').data('slide-number');
                  $('#carousel-text').html($('#slide-content-'+id).html());
          });
  });





























