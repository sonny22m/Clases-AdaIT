var options = ['Cuadro Simple (20 x 40cm)','Cuadro Diptico (75 x 45cm total)','Cuadro Triptico (90 x 55cm total)'];

$(document).ready(function(){

	var select = $('#tamaño');

	for (var i = 0; i<options.length; i++){
		value = i + 1;

		var option = '<option value="'+value+'">'+options[i]+'</option>'; //para concatenar caracteres con el +

		select.append(option); 
	}
});




//Selectores
//		$(document).ready(function(){

//			$('h1,h2').hide();
//			$('p#primero').hide();
//			$('p#primero a').hide();

//			$('#segunda').parent().css({
//				background: '#000'
//			});

//			$('#segunda').parent();

//			$('#padre').children('#segunda').fadeout(500);

//			$('#segunda').siblings().fadeout();

//			$('#segunda').nextAll();
//			$('#segunda').prev().css({
//				background: '#000'	;
//			});

//			$('#segunda').filter( xid);
			
