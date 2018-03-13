$(document).ready(function() {
	$('#msj').hide(); //oculta el div

	$('#ingresar').on('click',function(){

		user = $('#username').val();
		pass = $('#password').val();

		if(user == "pepe" && pass == "123456"){
			$('#msj').show();
			$('#msj').append('<p>Welcome!</p>');

		}else{
			$('#msj').show();
			$('#msj').append('<p>Failed Login.</p>');
		}
	});
});

/*
					sintaxis Jquery:

							$('selector').accion();
							$('tag')/$('#id')/$('.class').accion();