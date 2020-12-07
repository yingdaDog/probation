$(document).ready(function(){
    console.log('ready');

    
  
    $('.btn_goTop_js').click(function(){
        $('body,html').animate({scrollTop : 0},700,'swing');
    })
    let posY;
    $(document).scroll(function() {
        posY = $(window).scrollTop();
        if(posY >= 400){return $('.btn_goTop_js').addClass('active');}
        else {return $('.btn_goTop_js').removeClass('active');}
    })

    var swiper = new Swiper('.swiper-container', {
        loop : true,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
          },
        pagination:{
          el:'.swiper-pagination'
        }
      });
    
})