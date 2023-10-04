$(document).ready(function(){
    lnb();
	updown();
});

function lnb(){
    var button = $('.main_menu > li > a');
    // var wrapper = $('#wrapper');
    $(document).on('click', '.main_menu > li > a', function(e){
        if( !$(this).parent().hasClass('is-current')){
            $(this).parent().addClass('is-current').siblings().removeClass('is-current');
        }else{
            $(this).parent().removeClass('is-current');
        }
        if( $(this).parent().hasClass('is-sub')){
            e.preventDefault();
            // return false;
        }
    });
}

function layerOpen(target){
    var el = $(target);
    el.removeClass('is-hidden').addClass('is-open');
    $('body').addClass('layer-opens');
    return false;
}

function layerClose(target){
    var el = $(target);
    el.removeClass('is-open').addClass('is-hidden');
    $('body').removeClass('layer-opens');
    return false;
}

function updown(){
	var updownBTNUP = $('.btn_up');
	var updownBTNDOWN = $('.btn_down');
	var updownSTAT;
	updownSTAT = $('.remote_status');
	updownBTNUP.click(function(){
		updownSTAT = $(this).parent().siblings().children('.remote_status');
		updownSTAT.addClass('remote_open');
	});
	updownBTNDOWN.click(function(){
		updownSTAT = $(this).parent().siblings().children('.remote_status');
		updownSTAT.removeClass('remote_open');
	});
}