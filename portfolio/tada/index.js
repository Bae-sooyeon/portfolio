var $html =  $('html');
var $window = $(window);

function MenuBar_init() {
    $(window).scroll(function() {
      var scrollTop = $(window).scrollTop();
      if ( scrollTop > 80 ) {
        $html.addClass('menu-bar-hidden');
      }
      else {
        $html.removeClass('menu-bar-hidden');
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



function slider(){
    var $this = $(this);
    var $parent = $this.closest('.slider');
    var $actSlide = $parent.find(' > .slides > .active');
    var $dot = $parent.find(' > .dots > ul > li');
    var $actDot = $parent.find(' > .dots > ul > li.active');
    var $post;
    var postIndex;
    
    if ( $this.index() == 0 ) {
        $post = $actSlide.prev();
        if ( $post.length == 0 ) {
            $post = $('.slider > .slides > div:last-child');
        }
    }
    else {
        $post = $actSlide.next();
        if ( $post.length == 0 ) {
            $post = $('.slider > .slides > div:first-child');
        }
    }
    
    postIndex = $post.index();
    
    
    $actSlide.removeClass('active');
    $post.addClass('active');
    $actDot.removeClass('active');
    $dot.eq(postIndex).addClass('active');
}


function slider__init(){
    $('.btn-slide > div').click(slider);
}


var wheelScrollMoveWidth = 100;

$(window).on('wheel', function(event) {
    var scrollTop = $window.scrollTop();
    
    if ( event.originalEvent.deltaY < 0 ) {
        MenuBar__show();
    }
    else {
        MenuBar__hide();
    }
});

function MenuBar__show() {
    $('html').addClass('menu-bar-actived');
}

function MenuBar__hide() {
    $('html').removeClass('menu-bar-actived');
}

$(window).on('keyup', function(event) {
    if ( event.keyCode == 38 || event.keyCode == 36 || event.keyCode == 33 ) {
        MenuBar__show();
    }
    else if ( event.keyCode == 40 || event.keyCode == 35 || event.keyCode == 34 ) {
        MenuBar__hide();
    }
});

function MySlider1__init() {
    $('.my-slider-1 > .owl-carousel').owlCarousel({
      responsive:{
        0:{
          items:1
        }
      },
      loop:true,
      dots:true,
      nav:true,
      navText:['<img src="https://bae-sooyeon.github.io/img1/pf/tada/btn_howto_left@4x.png" alt="">','<img src="https://bae-sooyeon.github.io/img1/pf/tada/btn_howto_right@4x.png" alt="">']
    });
  }
  
  
  function click__init(){
      $('.owl-theme .owl-dots .owl-dot').click(function(){
          var $this = $(this);
          var indexThis = $this.index();
          
          $('.hi-wrap > .hi').removeClass('active');
          $('.hi-wrap > .hi').eq(indexThis).addClass('active');
      })
  }
  
  /* 발견되면 활성화시키는 라이브러리 시작 */
function ActiveOnVisible__init() {
    $(window).resize(ActiveOnVisible__initOffset);
    ActiveOnVisible__initOffset();

    $(window).scroll(ActiveOnVisible__checkAndActive);
    ActiveOnVisible__checkAndActive();
}

function ActiveOnVisible__initOffset() {
    $('.active-on-visible').each(function(index, node) {
        var $node = $(node);

        var offsetTop = $node.offset().top;
        $node.attr('data-active-on-visible-offsetTop', offsetTop);

        if ( !$node.attr('data-active-on-visible-diff-y') ) {
            $node.attr('data-active-on-visible-diff-y', '0');
        }

        if ( !$node.attr('data-active-on-visible-delay') ) {
            $node.attr('data-active-on-visible-delay', '0');
        }
    });

    ActiveOnVisible__checkAndActive();
}

function ActiveOnVisible__checkAndActive() { 
    $('.active-on-visible:not(.actived)').each(function(index, node) {
        var $node = $(node);

        var offsetTop = $node.attr('data-active-on-visible-offsetTop') * 1;
        var diffY = parseInt($node.attr('data-active-on-visible-diff-y'));
        var delay = parseInt($node.attr('data-active-on-visible-delay'));

        var callbackFuncName = $node.attr('data-active-on-visible-callback-func-name');

        if ( $(window).scrollTop() + $(window).height() + diffY > offsetTop ) {
            $node.addClass('actived');

            setTimeout(function() {
                $node.addClass('active');
                if ( window[callbackFuncName] ) {
                    window[callbackFuncName]($node);
                }
            }, delay);
        }
    });
}

/* 발견되면 활성화시키는 라이브러리 끝 */


$(function() {
    dotSlide__init();
    slider__init();
    MenuBar_init();
    MenuBar__show();
    MenuBar__hide();
    MySlider1__init();
    click__init();
    ActiveOnVisible__init();
});
   