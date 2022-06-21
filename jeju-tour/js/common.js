$(document).ready(function(){
    //모바일 메뉴 띄움
    let isOpen = false;
    $('.openMOgnb').click(function(){  // 메뉴를 클릭하면
        if(isOpen == false){  
            $('header').addClass('on');
            $('header .header_cont').slideDown('fast');
            $('header .header_area .header_cont .closePop').show();	
            isOpen = true; // 상태 변경
        }else{ // isOpen == true
            $('header .header_cont').slideUp('fast');
            $('header').removeClass('on');
            isOpen = false;
        }
    });

    //닫기 버튼 클릭
    $('header .header_cont .closePop').click(function(){
        $('.header_cont').slideUp('fast');
        $('header').removeClass('on');
    });
});

//창을 늘리고 줄였을때 메뉴바 설정
$(function(){
    $(window).resize(function(){
        if( parseInt($('header').css('width')) > 800){
            $('.header_cont').show();
        }
        else{
            $('.header_cont').hide();
        }
    });
});