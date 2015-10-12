  $(document).ready(function() {

	//Script Creato da Riccardo Mel
	//Targetweb.it - riky.mel@gmail.com
	//Versione 2.0
  
   //al click sul bottone del form
  $("#bottone-contact").click(function(){
	  
	$(this).hide(); 
	$("<img src='images/loader.gif' class='loader' />").appendTo("#contact");
	  
	var timer = 2000;

    //associo variabili generali
    var nome = $("#nome").val();
	var messaggio = $("#messaggio").val();
	var email = $("#email").val();
	var oggetto = $("#oggetto").val();
	var informativa = $("#informativa").attr('checked');
	
	
	//pattern email
	var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
 
 
    if(!emailReg.test(email)) {
		   
		 $("#bottone-contact").show(); 
		 $("<div id='errori'></div>").appendTo("#contact").html("<span>Email scritta in modo non corretto! Controlla che sia presente la @</span>").delay(2000).fadeOut(timer);
		 $(".loader").hide();
		   

    } else if(informativa != "checked"){
	
		
		alert("Devi accettare l'informativa sulla privacy per continuare!");
		 $("#bottone-contact").show();
		$(".loader").hide();
	
	} else if	(nome == "" || email == "" )  {	

					
		$("#bottone-contact").show(); 
		$("<div id='errori'></div>").appendTo("#contact").html("<span>Compila tutti i campi richiesti con l'asterisco!</span>").delay(2000).fadeOut(timer);
		$(".loader").hide();
				
				
				
	} //se ci sono campi vuoti
		
		
	else { //se sono stati compilati tutti i campi
		


  //chiamata ajax
    $.ajax({

      type: "POST",

      url: "engine.php",

	//il form invia i dati all'engine
      data: "nome=" + nome + "&email=" + email  + "&messaggio=" + messaggio + "&oggetto=" + oggetto,
      dataType: "html",

      success: function(msg)
      {
		  	  $(".loader").hide();
			  $("<div id='risultato'></div>").appendTo("#contact").html("<span>Email inviata con successo!</span>").delay(3000).fadeOut(timer);
			  $("#bottone-contact").delay(2000).fadeIn(); 
			  
      },
	  
      error: function()
      {
        alert("Si e' verificato un errore imprevisto..."); 
      }
    });
	
		
	}//else controlli
	
}); //fine form


});//Fine Dom