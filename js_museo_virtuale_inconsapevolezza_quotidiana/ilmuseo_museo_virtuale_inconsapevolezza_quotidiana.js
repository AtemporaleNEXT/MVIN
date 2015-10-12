(function ( $ ) {
	$.fn.blurOut = function(ms) {
		var ms = ms || 1000;		
		color = 'black';
		
		return this.each(function() {
			var shadow = 10 + "px ";
			var color = $(this).attr("data-color");	
			if ($(this).attr("data-color")  === undefined) {
				var color = "black";
			}			
			$(this).css({
				color: 'transparent',
				'text-shadow': '0 0 0 ' + color
			}).transition({
				color: 'transparent',
				'text-shadow': '0 0 0'+ shadow + color ,
				opacity: 0.8
			},ms);
		});
	}
}( jQuery ));


(function ( $ ) {
	$.fn.blurIn = function(ms) {
		var ms = ms || 1000;		
		
		return this.each(function() {
			var shadow = $(this).height() + "px ";
			var color = $(this).attr("data-color");	
			if ($(this).attr("data-color")  === undefined) {
				var color = "black";
			}				
				
			$(this).transition({
				color: 'transparent',
				'text-shadow': '0 0 0 ' + color,
				opacity: 1
			},ms);
			
		});
	}
}( jQuery ));


//-----------------------------------------------------
//-------------------INIZIO variabili
//-----------------------------------------------------
var contenitore = $('#concorso, #collabora, #sostenici') 
var contenutoSfocato = $('#concorso > p, #concorso p a, #collabora > p, #collabora p a, #sostenici > p, #sostenici p a')
var contenutoQuadrato = $('#concorso > header, #collabora > header, #sostenici > header')
var sostieniciCopertinaSx = $('#sx')
var sostieniciCopertinaDx = $('#dx')
var contenitoreSostienici = $('#doppio_sostienici')
//-----------------------------------------------------
//-------------------FINE variabili
//-----------------------------------------------------






//-----------------------------------------------------
//-------------------INIZIO stato iniziale
//-----------------------------------------------------

contenutoSfocato.blurOut();
sostieniciCopertinaSx.css('width','50%');
sostieniciCopertinaDx.css('width','50%');
//-----------------------------------------------------
//-------------------FINE stato iniziale
//-----------------------------------------------------






//-----------------------------------------------------
//-------------------INIZIO azione rollover
//-----------------------------------------------------
contenitore.hover(function(){
	$(this).find('header').fadeOut(1000)
	$(this).find('p, p>a').blurIn(400);
	},function(){
	$(this).find('header').fadeIn()
	$(this).find('p, p>a').blurOut(500);
	});
	
contenitoreSostienici.hover(function(){
	sostieniciCopertinaSx.animate({'width':'0'},1000);
	sostieniciCopertinaDx.animate({'width':'0'},1000);
},function(){
	sostieniciCopertinaSx.animate({'width':'50%'},1000);
	sostieniciCopertinaDx.animate({'width':'50%'},1000);
});
//-----------------------------------------------------
//-------------------FINE azione rollover
//-----------------------------------------------------
