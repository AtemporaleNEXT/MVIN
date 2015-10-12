<?php

	$mail_museo = "info@mvinconsapevolezzaquotidiana.org";
	$sito_museo	= "Museo Virtuale Inconsapevolezza Quotidiana";
	$grazie = "http://www.mvinconsapevolezzaquotidiana.org";

	
	session_start();
		
		$nome 		= 	$_POST['nome'];
		$cognome 	= 	$_POST['cognome'];
		$email 		= 	$_POST['email'];
		$oggetto 	= 	$_POST['oggetto'];
		$messaggio 	= 	$_POST['messaggio'];
		$ip			=	$_SERVER['REMOTE_ADDR'];



	//Verifica antispam 
	
	if($_POST['antispam'] != "") {
		echo('<p style="color: #000; font-size: 25px; font-weight: bold;">Sei uno spambot o stai usando tecniche di spam indesiderate, spiancenti ma ci siamo attrezzati. La mail non e stata inviata</p>');    
	}
	
	else {



//Invio la mail

$to 		= $mail_museo;
$sbj 		= "Contatto dal sito - $sito_museo";
$msg 		= "
<html>
<head>
<style type='text/css'>
body{
	font-family:'Lucida Grande', Arial;
	color:#333;
	font-size:15px;
}
</style>
</head>
<body>
<strong>Nome:</strong>&nbsp; $nome<br /><br />

<strong>Cognome:</strong>&nbsp; $cognome<br /><br />
   
<strong>Email:</strong>&nbsp; $email<br /><br />

<strong>Oggetto:</strong>&nbsp; $oggetto<br /><br />

<strong>Richiesta:</strong>&nbsp; $messaggio<br /><br />
  
<strong>IP Tracciato (per motivi di sicurezza):</strong>&nbsp; $ip

</body>
</html>
";

$from 		 = $nome . $cognome . "(" . $email . ")";
$headers	 = 'MIME-Version: 1.0' . "\n";
$headers	.= 'Content-type: text/html; charset=iso-8859-1' . "\n";
$headers 	.= "From: $from";


mail($to,$sbj,$msg,$headers); //funzione send mail


//Fine mail inviata a me




//Inizio email di conferma
$toClient		 = $email;
$msgClient		 = "
<html>
<head>
<style type='text/css'>
body{
	font-family:'Lucida Grande', Arial;
	color:#333;
	font-size:15px;
}
</style>
</head>
<body>

<h1>Museo Virtuale Inconsapevolezza Quotidiana</h1>
<br />

<p>Grazie per averci contattato, $nome</p>
<p>Abbiamo ricevuto la tua mail e ti ricontattermo prima possibile.</p>  

</body>
</html>
";
$fromClient 	 = $mail_museo;
$sbjClient		 = "Grazie, $nome";
$headersClient	 = 'MIME-Version: 1.0' . "\r\n";
$headersClient	.= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
$headersClient 	.= "From: $fromClient";

mail($toClient,$sbjClient,$msgClient,$headersClient); //mail inviata a chi scrive dal sito

//Fine email di conferma




//Resetto errori

session_destroy();

exit;

} //fine else del controllo antispam



?>