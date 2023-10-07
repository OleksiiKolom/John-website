import * as flsFunctions from './modules/functions.js';

flsFunctions.isWebp();

$(document).ready(function(){
	$('.header__burger').click(function(){
		$('.header__burger, .navigation').toggleClass('active');
        $('body').toggleClass('lock');
	});

    $('.navigation__link').click(function(){
        if ($('.navigation').hasClass('active')) {
            $('.header__burger, .navigation').removeClass('active');
            $('body').removeClass('lock');
        }
    });
});