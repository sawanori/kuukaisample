/*!
 * ScriptName: shared.js
 *
 * FoodConnection
 * http://foodconnection.jp/
 * http://foodconnection.vn/
 *
 */

$(document).ready(function() {
	
	
$(function() {

    $('body').removeClass('navOpen');
    $(".hamburger").click(function() {
        if ($('body').hasClass('navOpen')) {
            $('body').addClass('navClose');
            $('body').removeClass('navOpen');
            $('body').css('position', 'static');
            $(window).scrollTop(offsetY);
            $(".hamburger").removeClass('is-active');

        } else {
            $('body').addClass('navOpen');
            $('body').removeClass('navClose');

            offsetY = window.pageYOffset;
            $('body').css({
                position: 'fixed',
                width: '100%',
                'top': -offsetY + 'px'
            });

            $(".hamburger").addClass('is-active');
            return false;
        }
    });
	
    $("#menu_toggle a").click(function() {
		if($("#menu_toggle a").hasClass('active')) {
			$("#menu_toggle a").removeClass('active');
		}
		$('body').removeClass('navOpen');		
		$(this).addClass('active');
        $('body').addClass('navClose');
        $(".hamburger").removeClass('is-active');
        $('body').css('position', 'static');
    });


});


	
});