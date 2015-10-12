//inizio nascondi palle
$('#visita_palla_individuo, #visita_palla_societa, #visita_palla_territorio, #visita_palla_organismo, #visita_palla_psiche, #visita_palla_sensorialita, #visita_palla_storia, #visita_palla_attualita, #visita_palla_cibo').hide();$('#schema_cibo_relazioni, #schema_cibo_icone_alte, #schema_cibo_parole_chiave, #ombra_gallery').hide();	
//fine nascondi palle
// inizio variabili parte destra
var selezionaTuttiLI = $('.l_t_pallino')
var testiInterni = $('.contenuto_interno')
var tuttiTitoletti = $('.visita_titoletti_article')
var passoAnimazionePercorso = $('.l_t_passo').height() + $('.l_t_pallino').height()
var iconaMuseo = $('#linea_temporale_inizio')
var inizioPercorso = iconaMuseo.css('marginTop') + iconaMuseo.height() + iconaMuseo.css('marginBottom')
var animazionePercorso = $('#lv2_grafica_percorso')
var lunghezzaIniziale = passoAnimazionePercorso + inizioPercorso
////inizio animazione linea storia
var pulsantePaleolitico = $('#storia_paleolitico')
var pulsanteNeolitico = $('#storia_neolitico')
var pulsanteMesopotamia = $('#storia_mesopotamia')
var pulsanteEgiziani = $('#storia_egiziani')
var pulsanteGreci = $('#storia_greci')
var pulsanteRomani = $('#storia_romani')
var pulsanteMedioevo = $('#storia_medioevo')
var pulsanteRinascimento = $('#storia_rinascimento')
var pulsanteTempiModerni = $('#storia_tempi_moderni')
var pulsanteAttualita1 = $('#storia_attualita1')
var creaElemSopraTitolo = $('<div id="storia_scritta_hover" class="ombra_esterna absolute livello4"></div>')
function cancellaBg (){$('#visita_societa').removeClass('bg1').removeClass('bg2').removeClass('bg3').removeClass('bg4').removeClass('bg5').removeClass('bg6').removeClass('bg7').removeClass('bg8').removeClass('bg9').removeClass('bg10');} 
////inizio animazione linea attualità
var AttualitaPagTutte = $('#attualita_ipad_1, #attualita_ipad_2, #attualita_ipad_3')
var AttualitaTuttiTastiIpad = $('#bottone_ipad_1, #bottone_ipad_2, #bottone_ipad_3')
var T1 = 700
var T2 = 1000

function nascondiParteDestraIndividuo(){$('#psiche, #organismo, #sensorialita').hide();}
function nascondiParteDestra(){$('#pre_visita,#visita_mangiare,#visita_individuo,#visita_societa,#visita_territorio').hide();}
function mostraIndividuo(){nascondiParteDestra();$('#visita_individuo').fadeIn(T2);testiInterni.hide();}
function mostraSocieta (){nascondiParteDestra();$('#visita_societa').fadeIn();testiInterni.hide();}
function mostraTerritorio(){nascondiParteDestra();$('#visita_territorio').fadeIn();testiInterni.hide();}
function nascondiIndicatore(){selezionaTuttiLI.removeClass('indicatore_linea_temporale');}
function nascondiRelazioni(){$('#relazioni').removeClass('sfondo_relazioni1,sfondo_relazioni2,sfondo_relazioni3,sfondo_relazioni4');}
function rimuoviCreaElemSopra() {$('#storia_img_colori').remove(); $('#storia_scritta_hover').remove();}; // funzione nascondi rollover storia
function tutteLeFunzioniNascondi(){$('#visita_percorso_museale').animate({'left':'40%'},1000);$('section').animate({'width':'60%'},1000);nascondiParteDestraIndividuo();nascondiParteDestra();nascondiIndicatore();nascondiRelazioni();testiInterni.hide();tuttiTitoletti.hide();rimuoviCreaElemSopra();$('#attualita1').hide();cancellaBg();}
// fine variabili parte destra --- inizio nascondi contenuti destra
nascondiParteDestra();
$('#pre_visita').fadeIn();
testiInterni.hide();
//fine nascondi contenuti destra

//inizio animazione rete navigazione
$(document).ready(function(){	
animazionePercorso.css('height','0px');tuttiTitoletti.hide();AttualitaPagTutte.hide();$('#attualita_ipad_1').show();$('#bottone_ipad_1').css('backgroundColor','#ffffff');

$('#visita_palla_mangiare, #linea_temporale_mangiare, #pulsante_torna_inizio').click(function(){
	tutteLeFunzioniNascondi()
	$('#visita_relazioni_mangiare_societa').animate({'width':"138px"},750);
	$('#visita_relazioni_mangiare_individuo').animate({'width':"76px", "height":"87px", "marginTop":"-158px", "left":"165px"},750);
	$('#visita_relazioni_mangiare_territorio').animate({'width':"76px", "height":"76px", "left":"165px"},750);
	$('#visita_palla_individuo, #visita_palla_societa, #visita_palla_territorio, #visita_scritta_individuo, #visita_scritta_societa, #visita_scritta_territorio').fadeIn('slow');
	
	$('#visita_mangiare, #visita_mangiare *').fadeIn();
	
	$('#linea_temporale_mangiare').addClass('indicatore_linea_temporale');
	animazionePercorso.animate({'height':'89px'},1000);
	
	$('#relazioni').addClass('sfondo_relazioni1')
	$('.visita_titolo_piccolino').css('marginTop','70px')
});

$('#visita_palla_individuo, #linea_temporale_individuo').click(function(){
if($('#visita_relazioni_mangiare_individuo').width() != 0){tutteLeFunzioniNascondi();$('#visita_relazioni_individuo_organismo').animate({'width':"80px", "height":"86px", "marginTop":"-244px", "left":"85px"},750);$('#visita_relazioni_individuo_psiche').animate({'width':"80px", "height":"86px", "marginTop":"-244px"},750);$('#visita_relazioni_individuo_sensorialita').animate({'width':"80px", "height":"86px", "left":"85px"},750);$('#visita_palla_organismo, #visita_palla_psiche, #visita_palla_sensorialita, #visita_scritta_psiche, #visita_scritta_organismo, #visita_scritta_sensorialita').fadeIn('slow');mostraIndividuo();$('#introduzione_individuo').fadeIn();$('#visita_titoletto_individuo_introduzione').fadeIn();
$('#linea_temporale_individuo').addClass('indicatore_linea_temporale');
animazionePercorso.animate({'height':'132px'},1000);$('#relazioni').addClass('sfondo_relazioni2');$('.visita_titolo_piccolino').css('marginTop','70px');$('#figura_umanoide').hide();}else{}});

$('#visita_palla_psiche, #linea_temporale_psiche').click(function(){if($('#visita_relazioni_individuo_organismo').width() != 0){tutteLeFunzioniNascondi();mostraIndividuo();$('#psiche').fadeIn();$('#visita_titoletto_individuo_psiche').fadeIn();$('#linea_temporale_psiche').addClass('indicatore_linea_temporale');animazionePercorso.animate({'height':'173px'},1000);$('.visita_titolo_piccolino').css('marginTop','0px');}else{}});
$('#visita_palla_organismo, #linea_temporale_organismo').click(function(){if($('#visita_relazioni_individuo_organismo').width() != 0){tutteLeFunzioniNascondi();mostraIndividuo ();$('#organismo').show();$('#visita_titoletto_individuo_organismo').fadeIn();$('#linea_temporale_organismo').addClass('indicatore_linea_temporale');animazionePercorso.animate({'height':'215px'},1000);$('.visita_titolo_piccolino').css('marginTop','0px');}else{}});
$('#visita_palla_sensorialita, #linea_temporale_sensorialita').click(function(){if($('#visita_relazioni_individuo_organismo').width() != 0){tutteLeFunzioniNascondi();mostraIndividuo ();$('#sensorialita').fadeIn(T2);$('#visita_titoletto_individuo_sensorialita').fadeIn();$('#linea_temporale_sensorialita').addClass('indicatore_linea_temporale');
animazionePercorso.animate({'height':'259px'},1000);$('.visita_titolo_piccolino').css('marginTop','0px');}else{}});
$('#visita_palla_societa, #linea_temporale_societa').click(function(){if($('#visita_relazioni_individuo_organismo').width() != 0){tutteLeFunzioniNascondi();$('#visita_relazioni_societa_storia').animate({'width':"80px", "height":"86px", "marginTop":"-156px"},750);$('#visita_relazioni_societa_attualita').animate({'width':"80px", "height":"86px"},750);	$('#visita_palla_storia, #visita_palla_attualita, #visita_scritta_storia, #visita_scritta_attualita').fadeIn('slow');mostraSocieta();$('#introduzione_societa').fadeIn();$('#visita_titoletto_societa_introduzione').fadeIn();$('#linea_temporale_societa').addClass('indicatore_linea_temporale');animazionePercorso.animate({'height':'305px'},1000);$('#relazioni').addClass('sfondo_relazioni3');$('.visita_titolo_piccolino').css('marginTop','70px');}else{}});
$('#visita_palla_storia, #linea_temporale_storia').click(function(){if($('#visita_relazioni_societa_storia').width() != 0){tutteLeFunzioniNascondi();mostraSocieta ();$('#storia').fadeIn();$('#visita_titoletto_societa_storia').fadeIn();$('#linea_temporale_storia').addClass('indicatore_linea_temporale');animazionePercorso.animate({'height':'346px'},1000);$('.visita_titolo_piccolino').css('marginTop','0px');}else{}});
$('#visita_palla_attualita, #linea_temporale_attualita').click(function(){if($('#visita_relazioni_societa_storia').width() != 0){tutteLeFunzioniNascondi();mostraSocieta ();$('#attualita1').fadeIn();	$('#visita_titoletto_societa_attualita').fadeIn();$('#linea_temporale_attualita').addClass('indicatore_linea_temporale');animazionePercorso.animate({'height':'389px'},1000);$('.visita_titolo_piccolino').css('marginTop','0px');}else{}});
$('#visita_palla_territorio, #linea_temporale_territorio').click(function(){if($('#visita_relazioni_societa_storia').width() != 0){tutteLeFunzioniNascondi();$('#cibo').hide();$('#visita_relazioni_territorio_cibo').animate({'width':"80px", "height":"86px", "left":"85px"},750);$('#visita_palla_cibo, #visita_scritta_cibo').fadeIn('slow');mostraTerritorio ();$('#introduzione_territorio').fadeIn();$('#visita_titoletto_territorio_introduzione').fadeIn();$('#linea_temporale_territorio').addClass('indicatore_linea_temporale');animazionePercorso.animate({'height':'436px'},1000);$('#relazioni').addClass('sfondo_relazioni4');$('.visita_titolo_piccolino').css('marginTop','70px');}else{}});
$('#visita_palla_cibo, #linea_temporale_cibo').click(function(){if($('#visita_relazioni_territorio_cibo').width() != 0){tutteLeFunzioniNascondi();$('section').animate({'width':'100%'},1000);$('#visita_percorso_museale').animate({'left':'30px'},1000);mostraTerritorio ();$('#cibo').show();$('#visita_titoletto_territorio_cibo').fadeIn();$('#linea_temporale_cibo').addClass('indicatore_linea_temporale');animazionePercorso.animate({'height':'100%'},1000);$('#relazioni').addClass('sfondo_relazioni4');$('.visita_titolo_piccolino').css('marginTop','0px');}else{}});
//inizio animazione rete navigazione

//inizio animazione individuo
$('.individuo_contenuti').hide()
$('.individuo_quadro').hover(function(){$(this).find('.individuo_copertine1,.individuo_copertine2,.individuo_copertine3,.individuo_copertine4').hide();$(this).find('.individuo_contenuti').fadeIn();$(this).removeClass('livello2');$(this).addClass('livello4a');},function(){$(this).find('.individuo_copertine1, .individuo_copertine2,.individuo_copertine3,.individuo_copertine4').fadeIn(1000);$(this).find('.individuo_contenuti').hide();$(this).removeClass('livello4a')
$(this).addClass('livello2');});

//storia visita 
//testi introduzione
function introStoriaTesti(){$('#intro_storiag,#intro_mesopotamia,#intro_paleolitico,#intro_neolitico,#intro_egiziani,#intro_greci,#intro_romani,#intro_medioevo,#intro_rinascimento, #intro_tempi_moderni,#intro_attualita1').hide();};
introStoriaTesti ();
var timeHoverIntro = 500
//hover Linea Cronologica
$('#storia_paleolitico').mouseover(function(){
	cancellaBg ();
	introStoriaTesti ();
	$('#intro_paleolitico').fadeIn(timeHoverIntro);
	$('#visita_societa').addClass('bg1');
});

$('#storia_neolitico').mouseover(function(){introStoriaTesti (); $('#intro_neolitico').fadeIn(timeHoverIntro);cancellaBg(); $('#visita_societa').addClass('bg2');});$('#storia_mesopotamia').mouseover(function(){introStoriaTesti ();$('#intro_mesopotamia').fadeIn(timeHoverIntro);$('#visita_societa').addClass('bg3');});$('#storia_egiziani').mouseover(function(){cancellaBg(); introStoriaTesti ();$('#intro_egiziani').fadeIn(timeHoverIntro); cancellaBg(); $('#visita_societa').addClass('bg4');});$('#storia_greci').mouseover(function(){cancellaBg(); introStoriaTesti ();$('#intro_greci').fadeIn(timeHoverIntro); $('#visita_societa').addClass('bg5');});$('#storia_romani').mouseover(function(){cancellaBg(); introStoriaTesti ();$('#intro_romani').fadeIn(timeHoverIntro); $('#visita_societa').addClass('bg6');});$('#storia_medioevo').mouseover(function(){cancellaBg(); introStoriaTesti ();$('#intro_medioevo').fadeIn(timeHoverIntro); $('#visita_societa').addClass('bg7');});$('#storia_rinascimento').mouseover(function(){cancellaBg(); introStoriaTesti ();$('#intro_rinascimento').fadeIn(timeHoverIntro); $('#visita_societa').addClass('bg8');});$('#storia_tempi_moderni').mouseover(function(){cancellaBg(); introStoriaTesti ();$('#intro_tempi_moderni').fadeIn(timeHoverIntro); $('#visita_societa').addClass('bg9');});$('#storia_attualita1').mouseover(function(){cancellaBg();introStoriaTesti ();$('#intro_attualita1').fadeIn(timeHoverIntro);$('#visita_societa').addClass('bg10');});
	
pulsantePaleolitico.mouseover(function(){
	rimuoviCreaElemSopra();
	creaElemSopraTitolo.appendTo('body').css('left', (pulsantePaleolitico.offset().left -15) + 'px').text(pulsantePaleolitico.attr('data-nometitolo'))
	$('<div id="storia_img_colori" class="ombra_esterna livello2 zoom_paleolitico"></div>').appendTo('body').css('left', (pulsantePaleolitico.offset().left -10) + 'px')
});

pulsanteNeolitico.mouseover(function(){rimuoviCreaElemSopra();creaElemSopraTitolo.appendTo('body').css('left',(pulsanteNeolitico.offset().left -15)+'px').text(pulsanteNeolitico.attr('data-nometitolo'));$('<div id="storia_img_colori" class="ombra_esterna livello2 zoom_neolitico"></div>').appendTo('body').css('left',(pulsanteNeolitico.offset().left-10)+'px');});
pulsanteMesopotamia.mouseover(function(){rimuoviCreaElemSopra();creaElemSopraTitolo.appendTo('body').css('left',(pulsanteMesopotamia.offset().left-15)+'px').text(pulsanteMesopotamia.attr('data-nometitolo'));$('<div id="storia_img_colori" class="ombra_esterna livello2 zoom_mesopotamia"></div>').appendTo('body').css('left',(pulsanteMesopotamia.offset().left-10)+'px');});
pulsanteEgiziani.mouseover(function(){rimuoviCreaElemSopra();creaElemSopraTitolo.appendTo('body').css('left',(pulsanteEgiziani.offset().left-15)+'px').text(pulsanteEgiziani.attr('data-nometitolo'));$('<div id="storia_img_colori" class="ombra_esterna livello2 zoom_egiziani"></div>').appendTo('body').css('left',(pulsanteEgiziani.offset().left-10)+'px');});
pulsanteGreci.mouseover(function(){rimuoviCreaElemSopra();creaElemSopraTitolo.appendTo('body').css('left',(pulsanteGreci.offset().left-15)+'px').text(pulsanteGreci.attr('data-nometitolo'));$('<div id="storia_img_colori" class="ombra_esterna livello2 zoom_greci"></div>').appendTo('body').css('left',(pulsanteGreci.offset().left-10)+'px');});
pulsanteRomani.mouseover(function(){rimuoviCreaElemSopra();creaElemSopraTitolo.appendTo('body').css('left',(pulsanteRomani.offset().left-15)+'px').text(pulsanteRomani.attr('data-nometitolo'));$('<div id="storia_img_colori" class="ombra_esterna livello2 zoom_romani"></div>').appendTo('body').css('left',(pulsanteRomani.offset().left-10)+'px');});
pulsanteMedioevo.mouseover(function(){rimuoviCreaElemSopra();creaElemSopraTitolo.appendTo('body').css('left',(pulsanteMedioevo.offset().left-15)+'px').text(pulsanteMedioevo.attr('data-nometitolo'));$('<div id="storia_img_colori" class="ombra_esterna livello2 zoom_medioevo"></div>').appendTo('body').css('left',(pulsanteMedioevo.offset().left-10)+'px');});
pulsanteRinascimento.mouseover(function(){rimuoviCreaElemSopra();creaElemSopraTitolo.appendTo('body').css('left',(pulsanteRinascimento.offset().left-15)+'px').text(pulsanteRinascimento.attr('data-nometitolo'));$('<div id="storia_img_colori" class="ombra_esterna livello2 zoom_rinascimento"></div>').appendTo('body').css('left',(pulsanteRinascimento.offset().left-10)+'px');});
pulsanteTempiModerni.mouseover(function(){rimuoviCreaElemSopra();creaElemSopraTitolo.appendTo('body').css('left',(pulsanteTempiModerni.offset().left-15)+'px').text(pulsanteTempiModerni.attr('data-nometitolo'));$('<div id="storia_img_colori" class="ombra_esterna livello2 zoom_tempi_moderni"></div>').appendTo('body').css('left',(pulsanteTempiModerni.offset().left-10)+'px');});
pulsanteAttualita1.mouseover(function(){rimuoviCreaElemSopra();creaElemSopraTitolo.appendTo('body').css('left',(pulsanteAttualita1.offset().left-15)+'px').text(pulsanteAttualita1.attr('data-nometitolo'));$('<div id="storia_img_colori" class="ombra_esterna livello2 zoom_attualita"></div>').appendTo('body').css('left',(pulsanteAttualita1.offset().left-10)+'px');});
////fine animazione linea storia

////inizio animazione attualità
$('#bottone_ipad_1').click(function(){
	AttualitaPagTutte.hide();
	$('#attualita_ipad_1').show()
	AttualitaTuttiTastiIpad.css('backgroundColor','#eeeeee');
	$(this).css('backgroundColor','#ffffff');
});
$('#bottone_ipad_2').click(function(){AttualitaPagTutte.hide();$('#attualita_ipad_2').show();AttualitaTuttiTastiIpad.css('backgroundColor','#eeeeee');$(this).css('backgroundColor','#ffffff');});
$('#bottone_ipad_3').click(function(){AttualitaPagTutte.hide();$('#attualita_ipad_3').show();AttualitaTuttiTastiIpad.css('backgroundColor','#eeeeee');$(this).css('backgroundColor','#ffffff');});

////inizio animazione cibo
$('#pulsante_mostra_relazioni').click(function(){$('#schema_cibo_copertina').fadeOut(1000);$('#schema_cibo_relazioni, #schema_cibo_icone_alte').delay(1000).fadeIn(1000);if($('#schema_cibo_relazioni').length){$('#pulsante_mostra_relazioni').remove();}else{};});
$('#schema_cibo_icone_alte li').eq(0).click(function(){$('#cibo img').fadeOut(1000);$('#schema_cibo_relazioni').delay(1000).fadeIn(1000);});
$('#schema_cibo_icone_alte li').eq(1).click(function(){$('#cibo img').fadeOut(1000);$('#schema_cibo_parole_chiave').delay(1000).fadeIn(1000);});
$('#schema_cibo_icone_alte li').eq(2).click(function(){$('#ombra_gallery').fadeIn(1000);$('<div id="contenitore_slide" class="livello5 ombra_esterna"></div>').appendTo('body').load('approfondimenti_territorio.php');});
$('#ombra_gallery').click(function(){$('#contenitore_slide').remove();$('#ombra_gallery').fadeOut(1000);});


////inizio animazione percorso museale
$('.l_t_pallino, .tt_palle').hover(function(e){
	var titleTesto = $(this).attr('title')
	$(this).data('tipText', titleTesto).removeAttr('title')
	$('<p class="tooltip_semplice"></p>').text(titleTesto).appendTo('body').css('top',(e.pageY -5)+ "px").css('left',(e.pageX +20)+ "px").fadeIn('slow');
}, function(){
	$(this).attr('title', $(this).data('tipText'));
	$('.tooltip_semplice').remove();	
});
//fine animazione percorso museale

////inizio animazione note
$('.contenitore_risorse_link, .icona_espandi_riduci_notazioni > img').hide();
$('.icona_espandi_riduci_notazioni').click(function() {
	$('.contenitore_risorse_link').toggle(500);
	$('.icona_espandi_riduci_notazioni > img').toggle(500);
});
//fine animazione note






});
// fine funzione document.ready

