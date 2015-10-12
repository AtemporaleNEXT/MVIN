//-----------------------------------------------------
//-------------------ANIMAZIONE HOVER FIGURE CAPTION
//-----------------------------------------------------



//-----------------------------------------------------
//-------------------VARIABILI HOVER EFFECTS
//-----------------------------------------------------
var T1 = 500
var T2 = 750
var T3 = 1000
var T4 = 2000

var gallery1prog1 = $('#prog_g1')
var gallery1prog2 = $('#prog_g2')
var gallery1prog3 = $('#prog_g3')
var gallery1prog4 = $('#prog_g4')
var gallery1prog5 = $('#prog_g5')



//-----------------------------------------------------
//-------------------FUNZIONI OMBRA SFONDO
//-----------------------------------------------------
function richiamaOmbraMenu(){
	$('#ombra_gallery').fadeIn('slow');
	}
	
function eliminaOmbraMenu(){
	$('#ombra_gallery').fadeOut('slow');
	}
	
	
	
//-----------------------------------------------------
//-------------------STATO INIZIALE
//-----------------------------------------------------
$('#ombra_gallery').hide();	
	
	
	
	
//-----------------------------------------------------
//-------------------AZIONI CLICK
//-----------------------------------------------------
$(document).ready(function() {
	
    gallery1prog1.click(function(){
		richiamaOmbraMenu();
		$('<div id="contenitore_slide" class="livello6 ombra_esterna"></div>').appendTo('body').load('coltivarsi.php');
		});
	
	gallery1prog2.click(function(){
		richiamaOmbraMenu();
		$('<div id="contenitore_slide" class="livello6 ombra_esterna"></div>').appendTo('body').load('reverdece.php');
		});

	gallery1prog3.click(function(){
		richiamaOmbraMenu();
		$('<div id="contenitore_slide" class="livello6 ombra_esterna"></div>').appendTo('body').load('fieldiaries.php');
		});
	
	gallery1prog4.click(function(){
		richiamaOmbraMenu();
		$('<div id="contenitore_slide" class="livello6 ombra_esterna"></div>').appendTo('body').load('ultimo_progetto.php');
		});
	
	
	
    $('#ombra_gallery, #menu').click(function(){
		richiamaOmbraMenu();
		$('#contenitore_slide').remove();
		$('#ombra_gallery').hide();	
		});
		
});