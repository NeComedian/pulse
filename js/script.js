$(document).ready(function(){
    $('.carousel_spin').slick({
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        nextArrow:'<button type="button" class="slick-next"><img src="icons/rigth.png"></button>',
        prevArrow:'<button type="button" class="slick-prev"><img src="icons/left.png"></button>'
      });
      $('.more_link').each(function(i){
        $(this).on('click', function() {
        $('.flipcard').eq(i).addClass("h__active");
        $('.back').eq(i).css('transform', 'rotateY(0deg)');
        })
       }); 
       $('.back_link').each(function(i){
        $(this).on('click', function() {
        $('.flipcard').eq(i).removeClass("h__active");
        $('.back').eq(i).css('transform', 'rotateY(-180deg)');
        })
       }); 
      $('[data-model=consult]').on('click', function() {
        $('.overlay, #consult').fadeIn('slow');
      });
      $('.modal__close').on('click', function() {
        $('.overlay, #consult, #buy, #thanks').fadeOut('slow');
      });
      $('.catalog-item__buy').on('click', function() {
        $('#buy, .overlay').fadeIn('slow');
      });
      new WOW().init();      
    }
);