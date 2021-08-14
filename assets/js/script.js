$(window).scroll(function() {
  
	if ($(window).scrollTop() > 100 ){
    
 		$('.bg').addClass('down');
		$('.logo-2').addClass('d-block');
		$('.logo-2').removeClass('d-none');
		$('.logo-1').addClass('d-none');
    
  } else {
    
		$('.bg').removeClass('down');
		$('.navbar-brand').removeClass('brand-expand');
		$('.logo-2').removeClass('d-block');
		$('.logo-2').addClass('d-none');
		$('.logo-1').removeClass('d-none');
 	};   	
});

$('.scroll').on('click', function(e){		
		e.preventDefault()
    
  $('html, body').animate({
      scrollTop : $(this.hash).offset().top
    }, 1500);
});

//

function addClass(el) {
    menu.removeClass('active');
    $(el).addClass('active');
};

var menu = $('.navbar-nav a');
var sectionPositions = $('section').map(function(){
    return $(this).position().top;
});
var sections = $('section');
$(document).on('scroll', function () {
    var scroll = $(document).scrollTop();
    var currentElement;
    $(sectionPositions).each(function (i) {
        if (scroll > this - 50) currentElement = menu[i];
    });
    currentElement && addClass(currentElement);
});
menu.on('click', function () {
    addClass(this);
});

//

$(function(){
	$(document).on( 'scroll', function(){
		if ($(window).scrollTop() > 100) {
			$('.smoothscroll-top').addClass('show');
		} else {
			$('.smoothscroll-top').removeClass('show');
		}
	});
	$('.smoothscroll-top').on('click', scrollToTop);
});

function scrollToTop() {
	verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
	element = $('body');
	offset = element.offset();
	offsetTop = offset.top;
	$('html, body').animate({scrollTop: offsetTop}, 600, 'linear').animate({scrollTop:25},200).animate({scrollTop:0},150) .animate({scrollTop:0},50);
}

// MODAL GALERIA DE IMAGENS

$(".abrirModal").click(function() {
  var url = $(this).find("img").attr("src");
  $("#openimg img").attr("src", url);
  $("#openimg").modal("show");
});