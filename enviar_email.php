<?php
 
	
	//require_once('phpmailer/class.phpmailer.php');
	
	require_once 'phpmailer/PHPMailerAutoload.php';  
				  
	$mail = new PHPMailer();
	//$mail->setLanguage('pt');
	//$mail->setLanguage('pt', 'language/phpmailer.lang-br.php');
	//$mail->SetLanguage("en", "../../phpmailer/language/");

	$from 		= 'usersac@ingleza.com.br';
	$fromName 	= 'SAC facebook';
	$host 		= 'zmail.ingleza.com.br';
	$username 	= 'enviosac';
	$password	= 'sacE2000';
	$port		= 587;
	$secure		= 'tls';


	$mail->isSMTP();
	$mail->Host 		= $host;
	$mail->SMTPAuth 	= true;
	$mail->Username 	= $username;
	$mail->Password 	= $password;
	$mail->Port 		= $port;
	$mail->SMTPSecure	= $secure;
	//$mail->SMTPDebug  = 2;

	$mail->From 	= $from;
	$mail->FromName = $fromName;
	$mail->AddReplyTo($from, $fromName);

	$mail->AddAddress('matheusbmoreira@gmail.com', 'Matheus');

	$mail->IsHTML(true);
	$mail->CharSet 	= 'utf-8';
	$mail->Wordwrap = 70;

	$nome 	= $_POST['nome'];
	$email 	= $_POST['email'];
	$mail->Subject 	= $_POST['idassunto'];
	$mail->Body 	= $_POST['idmensagem'];
	$mail->AltBody	= 'Enviando msg phpmailer';

	
	$send = $mail->Send();

	if($send)
		echo 'Enviado com sucesso';
	else
		//echo 'Error:'. $mail->ErrorInfo;
		echo 'Email nao enviado, Tente novamente!';

?>
