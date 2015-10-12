$(document).ready(function(e) {
$('#oscura_pagina').hide();
nascondiParagrafi();
nascondiImg();
$('#rollover_partecipa, #rollover_visita, #rollover_ilmuseo, #rollover_condividi, #rollover_community').hide();
//----- inizio variabili e funzioni --------
function attivaMenu(){$('#oscura_pagina').fadeIn('slow');$('#parte_mobile_contenitore').animate({'height':'250px'},400);$('#contenitore_rollover').css('height','250px');};
function disattivaMenu(){$('#oscura_pagina').fadeOut('slow');$('#parte_mobile_contenitore').animate({'height':'0px'},400);$('#contenitore_rollover').css('height','0px');$('#menu_ilmuseo,#menu_visita,#menu_partecipa,#menu_condividi,#menu_community').css('background','none');};
//----- fine variabili e funzioni ---inizio funzioni animazione interna-------
function nascondiParagrafi(){$('.menu_paragrafo_1,.menu_paragrafo_2,.menu_paragrafo_3,.menu_paragrafo_4').hide();}
function nascondiImg(){$('.menu_img1,.menu_img2,.menu_img3,.menu_img4').hide();}
function nascondiColoreTasti(){$('.menu_espandibile_tasto_1,.menu_espandibile_tasto_2,.menu_espandibile_tasto_3,.menu_espandibile_tasto_4').css('background','none').css('color','#A59A8C');}
function mostraPrimaVoce() {nascondiParagrafi();nascondiImg();nascondiColoreTasti();$('.menu_espandibile_tasto_1').css('backgroundColor','#fff').css('color','#222');$('.menu_paragrafo_1').show();$('.menu_img1').show();}
//----- fine funzioni animazione interna ---inizio attiva e disattiva contenitore menu--
$('#menu_dinamico').mouseover(function(){if($('#contenitore_slide').length){return;}else{attivaMenu()}});
$('#oscura_pagina,#page_border,#museo_logo_menu,#menu_link_social').mouseover(function(){disattivaMenu ()});
$('#oscura_pagina,#contenitore_rollover').click(function(){disattivaMenu()});
//----- fine attiva e disattiva contenitore menu --- inizio interazione pulsanti --------
$('#menu_ilmuseo').mouseover(function() {
	$('#rollover_partecipa,#rollover_visita,#rollover_condividi,#rollover_community').fadeOut('slow');
	$('#rollover_ilmuseo').fadeIn('slow');
    $('#menu_visita,#menu_partecipa,#menu_condividi,#menu_community').css('background','none');
	mostraPrimaVoce();
});
$('#rollover_ilmuseo').mouseover(function(){$('#menu_ilmuseo').css('backgroundColor', '#fff');});
//rollover tasto "menu_visita"
$('#menu_visita').mouseover(function() {$('#rollover_partecipa, #rollover_ilmuseo, #rollover_condividi, #rollover_community').fadeOut('slow');$('#rollover_visita').fadeIn('slow');$('#menu_ilmuseo, #menu_partecipa, #menu_condividi, #menu_community').css('background', 'none');mostraPrimaVoce();});$('#rollover_visita').mouseover(function() {$('#menu_visita').css('backgroundColor', '#fff');});
//rollover tasto "menu_partecipa"
$('#menu_partecipa').mouseover(function(){$('#rollover_ilmuseo,#rollover_visita,#rollover_condividi,#rollover_community').fadeOut('slow');$('#rollover_partecipa').fadeIn('slow');$('#menu_visita,#menu_ilmuseo,#menu_condividi,#menu_community').css('background','none');mostraPrimaVoce();});$('#rollover_partecipa').mouseover(function(){$('#menu_partecipa').css('backgroundColor','#fff');});
//rollover tasto "menu_condividi"
$('#menu_condividi').mouseover(function(){$('#rollover_partecipa,#rollover_visita,#rollover_ilmuseo,#rollover_community').fadeOut('slow');$('#rollover_condividi').fadeIn('slow');$('#menu_visita,#menu_partecipa,#menu_ilmuseo,#menu_community').css('background','none');});$('#rollover_condividi').mouseover(function(){$('#menu_condividi').css('backgroundColor','#fff');});
//rollover tasto "menu_community"
$('#menu_community').mouseover(function(){$('#rollover_partecipa,#rollover_visita,#rollover_condividi,#rollover_ilmuseo').fadeOut('slow');$('#rollover_community').fadeIn('slow');$('#menu_visita,#menu_partecipa,#menu_condividi,#menu_ilmuseo').css('background','none');mostraPrimaVoce();});$('#rollover_community').mouseover(function(){$('#menu_community').css('backgroundColor','#fff');});
//----- fine interazione pulsanti --- inizio parte interna --------
$('.menu_espandibile_tasto_1').mouseover(function() {
	nascondiParagrafi();
	nascondiImg();
	nascondiColoreTasti();
	$('.menu_espandibile_tasto_1').css('backgroundColor','#fff').css('color','#222');
	$('.menu_paragrafo_1').show();
	$('.menu_img1').show();
});
$('.menu_espandibile_tasto_2').mouseover(function(){nascondiParagrafi();nascondiImg();nascondiColoreTasti();$('.menu_espandibile_tasto_2').css('backgroundColor','#fff').css('color','#222');$('.menu_paragrafo_2').show();$('.menu_img2').show();});
$('.menu_espandibile_tasto_3').mouseover(function(){nascondiParagrafi();nascondiImg();nascondiColoreTasti();$('.menu_espandibile_tasto_3').css('backgroundColor','#fff').css('color','#222');$('.menu_paragrafo_3').show();$('.menu_img3').show();});
$('.menu_espandibile_tasto_4').mouseover(function(){nascondiParagrafi();nascondiImg();nascondiColoreTasti();$('.menu_espandibile_tasto_4').css('backgroundColor','#fff').css('color','#222');$('.menu_paragrafo_4').show();$('.menu_img4').show();});
//----- fine parte interna -------------------
});
