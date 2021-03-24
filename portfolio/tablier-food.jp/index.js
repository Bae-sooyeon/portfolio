function dotSlide() {
    var $this = $(this);
    var $slider = $this.closest('.slider');
    var $dotActived = $slider.find('.dots > ul > li.active');
    var $slideActived = $slider.find('.slides > div.active');
    var $dotIndex = $this.index();
    var $slides = $slider.find('.slides > div');
    var $slideIndex = $slides.eq($dotIndex);

    $dotActived.removeClass('active');
    $slideActived.removeClass('active');
    $slideIndex.addClass('active');
    $this.addClass('active');
}

function dotSlide__init(){
    $('.dots > ul > li').click(dotSlide);
}

function dotsClick(){
    var $actived = $('.dots > ul > li.active');
    var $post = $actived.next();

    if ( $post.length == 0 ) {
        $('.dots > ul > li:first-child').click();
    }
    else {
        $post.click();
    }
}

function slideInterval(){
    setInterval(dotsClick, 3000);
}

function midImgSlider__init() {
  $('.mid-img-slider > .owl-carousel').owlCarousel({
    responsive:{
      0:{
        items:3
      }
    },
    loop:true,
    dots:false,
    autoplay:true,
    autoplayTimeout:4000,
  });
}


$(function() {
    dotSlide__init();
    slideInterval();
    midImgSlider__init()
});