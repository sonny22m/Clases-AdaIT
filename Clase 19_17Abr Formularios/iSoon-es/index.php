<!-- iSoon - Plantilla HTML5 creada por MElyouzghi - Elladodelgeek.com -->
<?php include 'config.php' ?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="description" content="Coming Soon HTML5/CSS3 Template">
	<!--<meta name="author" content="Mohammadi El Youzghi">-->
	<meta name="author" content="">
	<title>iSoon - Coming Soon HTML5/CSS3 Template</title>
	<link href="css/main.css" rel="stylesheet">
	<link href="css/icons.css" rel="stylesheet">
</head>

<body>
	<div class="wrapper">
		<div class="container">
			<div class="content">
				<div class="title">
					<h1>Sitio web en construcción</h1>
				</div>

				<p>Nuestros <span class="strike">hamsters</span> developers están trabajando duro hasta el día de lanzamiento</p>
				<div class="clock-container">
					<div id="clock" data-launching="<?php echo $launching_date; ?>"></div>
				</div>
				
				<!-- footer -->
				<div class="footer">
					<div class="copyright">
						&copy; Copyright 2014 CompanyName, inc
					</div>
					<div class="social">
						<a href="#contactus"><span class="icon-isoon-mail"></span></a>
						<a href="//facebook.com/page" target="_blank"><span class="icon-isoon-facebook"></span></a>
						<a href="//twitter.com/username" target="_blank"><span class="icon-isoon-twitter"></span></a>
						<a href="//googleplus.com/profile" target="_blank"><span class="icon-isoon-googleplus"></span></a>
					</div>
				</div> <!-- // footer -->
			</div>
			<!-- Modal window -->
			<div id="contactus" class="modalmask">
				<div class="modalbox movedown">
					<a href="#close" title="Close" class="close">X</a>
					<h2>Contacto</h2>
					<div class="form-container">
						<div class="hidden alert success"></div>
						<div class="hidden alert error"></div>
						<form id="isoon-contact-form" method="post" action="contact.php">
							<input id="name" name="name" type="text"  placeholder="Nombre" required="required"/>
							<input id="email" name="email" type="email"  placeholder="Email" required="required"/>
							<textarea id="message" name="message" placeholder="Mensaje" required="required"></textarea>
							<input type="submit" class="btn" value="Enviar"/>
						</form>
					</div>
				</div>
			</div><!-- // Modal window -->
		</div>
	</div>
	
	<!-- Javascript files -->
	<script type="text/javascript" src="js/jquery.min.js"></script>
	<script type="text/javascript" src="js/jquery.countdown.min.js"></script>
	<script type="text/javascript" src="js/main.js"></script>
</body>