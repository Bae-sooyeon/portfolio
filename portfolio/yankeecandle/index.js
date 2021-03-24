function SlickSlider__init() {
    $('.slide').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        appendDots: $('.main-slide-box .dots'),
        appendArrows: $('.main-slide-box .arrows'),
        nextArrow: '<div class="next"></div>',
        prevArrow: '<div class="prev"></div>',
        customPaging : function(slider, i) {
            return '';
        }
    });
}

function MySlider1__init() {
    $('.my-slider-1 > .owl-carousel').owlCarousel({
      responsive:{
        0:{
          items:4
        }
      },
      loop:true,
      dots:false,
      nav:true,
      navText: ['<img src="https://bae-sooyeon.github.io/img1/pf/yankeecandle/bn-prev-bt.png" alt="">','<img src="https://bae-sooyeon.github.io/img1/pf/yankeecandle/bn-next-bt.png" alt="">']
    });
  }

  function fr_slider__init() {
    $('.fr-slick').slick({
      infinite: true,
      dots:false,
      variableWidth: true,
      speed: 250,
      slidesToShow: 3,
      appendArrows: $('.fr-slider-arrows'),
      nextArrow: '<div class="next"><img src="https://bae-sooyeon.github.io/img1/pf/yankeecandle/bn-next-bt.png" alt=""></div>',
      prevArrow: '<div class="prev"><img src="https://bae-sooyeon.github.io/img1/pf/yankeecandle/bn-prev-bt.png" alt=""></div>'
    });
    // $('.fr-slider > .owl-carousel').owlCarousel({
    //   autoWidth:true,
    //   loop:true,
    //   dots:false,
    //   nav:true,
    //   navText: ['<', '>'],
    //   callbacks: true,
      
    // });
  }

  function TabBox__init() {
    $('[data-tab-head-item-name]').click(function() {
      var $this = $(this);
      var tabName = $this.attr('data-tab-name');
      var itemName = $this.attr('data-tab-head-item-name');
      // [for]
      // 모든 것을 숨기고
      $('[data-tab-name="' + tabName + '"]').removeClass('active');
      
      $('[data-tab-name="' + tabName + '"][data-tab-head-item-name="' + itemName + '"]').addClass('active');
      $('[data-tab-name="' + tabName + '"][data-tab-body-item-name="' + itemName + '"]').addClass('active');
    });
  }

  function PrSlider__init() {
    $('.pr-slider > .owl-carousel').owlCarousel({
      responsive:{
        0:{
          items:1
        }
      },
      loop:true,
      dots:false,
      autoplay:true,
      autoplayTimeout:5000
    });
  }


  function borderHoverBar__init(){
    var hoverMenu = $('.menu-bar > ul > li:first-child');
    var $menuBar = hoverMenu.closest('.menu-bar');
    var $borderBar = $menuBar.find(' > .bg-border');
    
    hoverMenu.mouseenter(function(){
      $borderBar.addClass('active');
    })
    hoverMenu.mouseleave(function(){
      $borderBar.removeClass('active');
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


$(function () {
    SlickSlider__init();
    MySlider1__init();
    fr_slider__init();
    TabBox__init();
    PrSlider__init();
    borderHoverBar__init();
    ActiveOnVisible__init();
});