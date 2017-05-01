/* 
 * iSoon v1.0 - Coming Soon HTML5/CSS3 Template
 * Copyright (C) 2014 Mohammadi El Youzghi <mo.elyouzghi@gmail.com>
 */

jQuery(function($) {
	// Countdown
	$(function() {
		clock = $('#clock');
		var eventDate = clock.attr('data-launching');
		clock.countdown(eventDate)
			.on('update.countdown finish.countdown', function(event) {
				$(this).html(event.strftime(''
					+ '<div class="panel"><span class="number">%w</span>semana%!w</div>'
					+ '<div class="panel"><span class="number">%d</span>día%!d</div>'
					+ '<div class="panel"><span class="number">%H</span>hora%!H</div>'
					+ '<div class="panel"><span class="number">%M</span>minuto%!M</div>'
					+ '<div class="panel"><span class="number">%S</span>segundo%!S</div>'
				));
			});
			
	});

	// Contact Form
	var form = $('#isoon-contact-form');
	form.submit(function () {
		$this = $(this);

		var name=$("#name").val();
		var email=$("#email").val();
		var message=$("#message").val();

		$.post($(this).attr('action'),'name='+name+'&email='+email+'&message='+message, function(data) {
			if (data.type === 'success'){
				$("#name").val("");
				$("#email").val("");
				$("#message").val("");
				$this.prev().prev().text(data.message).fadeIn().delay(2000).fadeOut();
			}else{
				$this.prev().text(data.message).fadeIn().delay(2000).fadeOut();
			}
		},'json');
		return false;
	});
	
});