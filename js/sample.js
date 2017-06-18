$(function(){
  var num = 1;
$("#category_menu").click(function(){
    $(this).data("click", ++num);
    var click = $(this).data("click");
    if((click%2)== 0){
        $('.child').slideDown('slow');
    }
    else{
         $('.child').slideUp('fast');
    }
    return false;
});
  });

 

 $(function(){
  
  var num = 1;
$("#sp_menu").click(function(){
    $(this).data("click", ++num);
    var click = $(this).data("click");
    if((click%2)== 0){
        $('.sp_child').slideDown('slow');
    }
    else{
         $('.sp_child').slideUp('fast');
    }
    return false;
});
   var child_num = 1;
$("#sp_category").click(function(){
    $(this).data("click", ++child_num);
    var click = $(this).data("click");
    if((click%2)== 0){
        $('.sp_child_child').slideDown('slow');
    }
    else{
         $('.sp_child_child').slideUp('fast');
    }
    return false;
});

$(".sp_child_child").click(function(){
  
        $('#sp_menu').slideUp('slow');
    });


  
 });
 
   


 $(function(){
     
    	$( 'img.lazy' ).lazyload({
	threshold: 10,			// 200pxの距離まで近づいたら表示する
	effect: "fadeIn",	
	effect_speed: 2000 ,
});
    	$( 'img.lazy2' ).lazyload({
	threshold: 10,			// 200pxの距離まで近づいたら表示する
	effect: "fadeIn",		// じわじわっと表示させる
	effect_speed: 10000 ,
});

$( 'img.lazy3' ).lazyload({
	threshold: 10,			// 200pxの距離まで近づいたら表示する
	effect: "fadeIn",		
	effect_speed: 15000 ,
});
$( 'img.lazy4' ).lazyload({
	threshold: 10,			// 200pxの距離まで近づいたら表示する
	effect: "fadeIn",	
	effect_speed: 20000 ,
});

});


	$(document).ready(function() {
		$('.gallery a').simpleLightbox({
			captionsData	: "alt",
			'wrapAround': true,
		'alwaysShowNavOnTouchDevices': true
	
		});
	});

 $(function(){
	// Instantiate MixItUp:
	$('.gallery').mixItUp();
});
