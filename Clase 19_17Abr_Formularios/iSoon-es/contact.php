<?php
/* 
 * iSoon v1.0 - Coming Soon HTML5/CSS3 Template
 * Copyright (C) 2014 Mohammadi El Youzghi <mo.elyouzghi@gmail.com>
 */
include 'config.php';

if (filter_input(INPUT_SERVER,'REQUEST_METHOD') === 'POST'){
	header ('Content-type: application/json');
	
	$ok = array(
		'type' => 'success',
		'message' => 'Gracias! Tu mensaje ha sido enviado correctamente.'
	);
	
	$error = array(
		'type' => 'error',
		'message' => 'Ha ocurrido un error. Por favor, revisa la información introducida y vuelve a intentarlo.'
	);
	
	$name = filter_input(INPUT_POST,'name');
	$message = filter_input(INPUT_POST,'message');
	$email = filter_input(INPUT_POST,'email');
	
	if ($name != "" && $message != "" && $email != ""){
			$subject = "iSoon Contact Form - Mensaje nuevo de $name";
			
			$body = "";
			$body .= "<html>\n";
			$body .= "<body style=\"font-family:Arial, sans-serif;\">\n";

			$body .= "<b>Fecha:</b> " . date("m/d/Y H:i:s") . "<br/>";
			$body .= "<b>Nombre:</b> $name<br/>";
			$body .= "<b>Email:</b> $email<br/>";
			$body .= "<b>Mensaje:</b><br/><br/>" . nl2br($message) . "<br/>";
			$body .= "</body>\n";
			$body .= "</html>\n";

			$headers = 'From:' . $name . '<' . $email . '>' . "\r\n";
			$headers .= 'To: ' . $email_to . "\r\n";
			$headers .= 'Return-Path: ' . $email . "\r\n";
			$headers .= 'MIME-Version: 1.0' ."\r\n";
			$headers .= 'Content-Type: text/HTML; charset=UTF-8' . "\r\n";
			
			$success = mail($email_to, $subject, $body, $headers);
			
			if ($success){
				echo json_encode ($ok);
			}else{
				echo json_encode ($error);
			}
	}else{
		echo json_encode ($error);
	}
	die;
}else{
	header('Location: ./');die;
}