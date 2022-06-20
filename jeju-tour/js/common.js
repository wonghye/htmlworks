$(document).ready(function(){

    //모바일 메뉴 띄움
    $('.openMOgnb').click(function(){
        $('header').addClass('on');
        $('header .header_cont').slideDown('fast');
        $('header .header_area .header_cont .closePop').show();			
    });
    $('header .header_cont .closePop').click(function(){
        $('.header_cont').slideUp('fast');
        $('header').removeClass('on');
    });
})

//창을 늘리고 줄였을때 메뉴바 설정
$(function(){
    $(window).resize(function(){
        if( parseInt($('header').css('width')) > 800){
            $('.header_cont').show();
        }
        else{
            $('.header_cont').hide();
        }
    })
})