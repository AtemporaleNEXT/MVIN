//-----------------------------------------------------
//-------------------VARIABILI PARTECIPA
//-----------------------------------------------------
var quadriPartecipa = $('#quadro_partecipa, #quadro_visita, #quadro_gallery')
var partecipaNormale = $('.partecipa_normale')
var partecipaHover = $('.partecipa_hover')

var ImgSfumatura1 = $('#contenitore_immagini_defocus > img')
var ImgSfumatura3 = $('#immagini_a_fuoco > img').eq(0)
var ImgSfumatura2 = $('#immagini_a_fuoco > img').eq(1)
var ImgSfumatura4 = $('#immagini_a_fuoco > img').eq(2)
var ImgSfumaturaTutte = $('#immagini_a_fuoco img')
var AreaSensibile1 = $('#area_sensibile_sx')
var AreaSensibile2 = $('#area_sensibile_dx')
var AreaSensibile3 = $('#area_sensibile_centrale')
var Scritta1 = $('#scritta_blur_1')
var Scritta2 = $('#scritta_blur_2')
var Scritta3 = $('#scritta_blur_3')

var AltezzaPrimaFascia = ImgSfumatura1.height()

var tempoSfocutura = 500
var altezzaImgSfocatura = $('#immagine_partenza').height();

//-----------------------------------------------------
//-------------------STATO INIZIALE
//-----------------------------------------------------
partecipaHover.hide();
ImgSfumatura2.hide();
ImgSfumatura3.hide();
ImgSfumatura4.hide();
$('#mission').css('margiTop',AltezzaPrimaFascia);
$('.scritta_opaca').hide();

$('#contenitore_immagini_defocus').animate({'height': altezzaImgSfocatura + 'px'},100)
$('#area_sensibile_sx, #area_sensibile_dx, #area_sensibile_centrale').animate({'height': altezzaImgSfocatura/2 + 'px'},100 )
$('#area_sensibile_centrale').css('top',altezzaImgSfocatura/2 + 'px')
//-----------------------------------------------------
//-------------------ANIMAZIONE ROLLHOVER
//-----------------------------------------------------
quadriPartecipa.hover(function(){
	$(this).find('.partecipa_normale').hide();
	$(this).find('.partecipa_hover').fadeIn();
},function(){
	$(this).find('.partecipa_hover').hide();
	$(this).find('.partecipa_normale').fadeIn();
})

AreaSensibile1.hover(function(){
	if(ImgSfumaturaTutte.length){
	ImgSfumatura2.delay(tempoSfocutura).fadeIn(tempoSfocutura);
	Scritta1.find('.scritta_opaca').fadeIn(tempoSfocutura);
	Scritta1.find('.scritta_sfumata').fadeOut(tempoSfocutura);
	}
	else{
	ImgSfumatura2.fadeIn(tempoSfocutura);
	Scritta1.find('.scritta_opaca').fadeIn(tempoSfocutura);
	Scritta1.find('.scritta_sfumata').fadeOut(tempoSfocutura);
		}
},function(){
	ImgSfumatura2.fadeOut(tempoSfocutura);
	Scritta1.find('.scritta_sfumata').fadeIn(tempoSfocutura);
	Scritta1.find('.scritta_opaca').fadeOut(tempoSfocutura);
})

AreaSensibile2.hover(function(){
	if(ImgSfumaturaTutte.length){
	ImgSfumatura3.delay(tempoSfocutura).fadeIn(tempoSfocutura);
	Scritta2.find('.scritta_opaca').fadeIn(tempoSfocutura);
	Scritta2.find('.scritta_sfumata').fadeOut(tempoSfocutura);
	}
	else{
	ImgSfumatura3.fadeIn(tempoSfocutura);
	Scritta2.find('.scritta_opaca').fadeIn(tempoSfocutura);
	Scritta2.find('.scritta_sfumata').fadeOut(tempoSfocutura);
		}
},function(){
	ImgSfumatura3.fadeOut(tempoSfocutura);
	Scritta2.find('.scritta_sfumata').fadeIn(tempoSfocutura);
	Scritta2.find('.scritta_opaca').fadeOut(tempoSfocutura);
})

AreaSensibile3.hover(function(){
	if(ImgSfumaturaTutte.length){
	ImgSfumatura4.delay(tempoSfocutura).fadeIn(tempoSfocutura);
	Scritta3.find('.scritta_opaca').fadeIn(tempoSfocutura);
	Scritta3.find('.scritta_sfumata').fadeOut(tempoSfocutura);
	}
	else{
	ImgSfumatura4.fadeIn(tempoSfocutura);
	Scritta3.find('.scritta_opaca').fadeIn(tempoSfocutura);
	Scritta3.find('.scritta_sfumata').fadeOut(tempoSfocutura);
		}
},function(){
	ImgSfumatura4.fadeOut(tempoSfocutura);
	Scritta3.find('.scritta_sfumata').fadeIn(tempoSfocutura);
	Scritta3.find('.scritta_opaca').fadeOut(tempoSfocutura);
})



//-----------------------------------------------------
//-------------------INIZIO animazione inforamtiva
//-----------------------------------------------------
	
	$('#box_informativa').load('informativa_mv_inconsapevolezza_quotidiana.html');
	$('#box_informativa').hide();

$('#tasto_informativa_dialog').click(function(){
	$('#box_informativa').show()
	$('#pulsante_chiudi_informativa').click(function(){
		$('#box_informativa').hide();
	});
});

	

//-----------------------------------------------------
//-------------------FINE animazione inforamtiva
//-----------------------------------------------------

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


//-----------------------------------------------------
//-------------------INDEX_2

	var T1 = 400;
	var T2 = 1000;

//$('.conth2').hover(function(){ 
//	$('.cont270').animate({"marginLeft":"-130px"}, T2); 	
//}, function(){ 
//	$('.cont270').animate({"marginLeft":"0"}, T2);  
//
//});



//-----------------------------------------------------
//-------------------INIZIO animazione inforamtiva
//-----------------------------------------------------
	
	$('#box_informativa').load('informativa_mv_inconsapevolezza_quotidiana.html');
	$('#box_informativa').hide();

$('#tasto_informativa_dialog').click(function(){
	$('#box_informativa').show()
	$('#pulsante_chiudi_informativa').click(function(){
		$('#box_informativa').hide();
	});
});

//-----------------------------------------------------
//-------------------FINE animazione inforamtiva
//-----------------------------------------------------
