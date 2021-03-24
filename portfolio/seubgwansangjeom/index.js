var $html = $('html');

function TopBar_init() {
    
    var $topBar = $('.top-bar');
    $(window).scroll(function(){
        var scrollTop = $(window).scrollTop();
        if( scrollTop > 35 ) {
            $html.addClass('top-bar-fly');
        }
        else {
            $html.removeClass('top-bar-fly');
        }
    });
}

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


$(function() {
    TopBar_init();
    dotSlide__init();
    slideInterval();
});
   

