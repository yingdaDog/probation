$(document).ready(function(){
    console.log('ready');

    
  
    $('.js-to-top').click(function(){
        $('body,html').animate({scrollTop : 0},700,'swing');
    })
    let posY;
    $(document).scroll(function() {
        posY = $('html').scrollTop();
        if(posY >= 400){return $('.js-to-top').addClass('active');}
        else {return $('.js-to-top').removeClass('active');}
    })

    var swiper = new Swiper('.swiper-container', {
        loop : true,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
          },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination:{
          el:'.swiper-pagination'
        }
      });
      // toggleModal();
      // swiper.autoplay.start();
      // swiper.update();
    
})