
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

function MainPage__init() {
    setTimeout(function() {
        // 웹 페이지가 열린 후, 5초 뒤에 체크
        var scrollTop = $(window).scrollTop();

        // 아직도 사용자가 첫 페이지를 보고 있다면?
        if ( scrollTop < 200 ) {
            // 아래를 이용해서 첫 페이지를 넘긴다.
            $('html').animate({scrollTop:$(window).height()}, 700);
        }
    }, 4200);
}

function Slider1__init() {
  $('.slider-1 .owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    dots:false,
    center:true,
    autoPlay : true,
    responsive:{
      0:{
        items:3
      }
    }
  });
}

lightbox.option({
    resizeDuration: 200,
    wrapAround: true,
    disableScrolling: false,
    fitImagesInViewport:false
  })



$(function() {
    MainPage__init();
    ActiveOnVisible__init();
    Slider1__init();
});