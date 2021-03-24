$(function () {
  new fullpage('#fullpage', {
    sectionsColor: ['white', 'orange', '#C0C0C0', '#ADD8E6', 'white'],
    verticalCentered: false,
    scrollBar: true,
    anchors: ['anchor1', 'anchor2', 'anchor3', 'anchor4', 'anchor5'],
    menu: '#menu',
  });
})

/* 발견되면 활성화시키는 라이브러리 시작 */
function ActiveOnVisible__init() {
  $(window).resize(ActiveOnVisible__initOffset);
  ActiveOnVisible__initOffset();

  $(window).scroll(ActiveOnVisible__checkAndActive);
  ActiveOnVisible__checkAndActive();
}

function ActiveOnVisible__initOffset() {
  $('.active-on-visible').each(function (index, node) {
    var $node = $(node);

    var offsetTop = $node.offset().top;
    $node.attr('data-active-on-visible-offsetTop', offsetTop);

    if (!$node.attr('data-active-on-visible-diff-y')) {
      $node.attr('data-active-on-visible-diff-y', '0');
    }

    if (!$node.attr('data-active-on-visible-delay')) {
      $node.attr('data-active-on-visible-delay', '0');
    }
  });

  ActiveOnVisible__checkAndActive();
}

function ActiveOnVisible__checkAndActive() {
  $('.active-on-visible:not(.actived)').each(function (index, node) {
    var $node = $(node);

    var offsetTop = $node.attr('data-active-on-visible-offsetTop') * 1;
    var diffY = parseInt($node.attr('data-active-on-visible-diff-y'));
    var delay = parseInt($node.attr('data-active-on-visible-delay'));

    var callbackFuncName = $node.attr('data-active-on-visible-callback-func-name');

    if ($(window).scrollTop() + $(window).height() + diffY > offsetTop) {
      $node.addClass('actived');

      setTimeout(function () {
        $node.addClass('active');
        if (window[callbackFuncName]) {
          window[callbackFuncName]($node);
        }
      }, delay);
    }
  });
}
/* 발견되면 활성화시키는 라이브러리 끝 */

var $window = $(window);

var windowWidth = $window.width();
var windowHeight = $window.height();

$window.resize(_.throttle(function () {
  windowWidth = $window.width();
  windowHeight = $window.height();
}, 100));

$window.resize(_.throttle(function () {
  MousemoveEffect1__update();
}, 100));

var MousemoveEffect1__$el = null;
var MousemoveEffect1__lastPosX = 0;
var MousemoveEffect1__lastPosY = 0;

function MousemoveEffect1__update() {
  console.log("MousemoveEffect1__lastPosX : " + MousemoveEffect1__lastPosX);
  console.log("MousemoveEffect1__lastPosY : " + MousemoveEffect1__lastPosY);

  MousemoveEffect1__$el.each(function (index, node) {
    var $node = $(node);
    var horRes = $node.data('data-mousemove-effect1-hor-res');
    var verRes = $node.data('data-mousemove-effect1-ver-res');

    var x = (MousemoveEffect1__lastPosX - (windowWidth / 2)) * horRes;
    var y = (MousemoveEffect1__lastPosY - (windowHeight / 2)) * verRes;
    $(node).css('transform', 'translateX(' + x + 'px) translateY(' + y + 'px)');
  });
}

function MousemoveEffect1__init() {
  MousemoveEffect1__$el = $('.mousemove-effect-1-el');

  MousemoveEffect1__$el.each(function (index, node) {
    var $node = $(node);
    // 좌우 민감도
    $node.data('data-mousemove-effect1-hor-res', $node.attr('data-mousemove-effect1-hor-res') * 1);
    // 위아래 민감도
    $node.data('data-mousemove-effect1-ver-res', $node.attr('data-mousemove-effect1-ver-res') * 1);
  });

  var MousemoveEffect1__updateThrottled = _.throttle(function () {
    MousemoveEffect1__update();
  }, 10);

  $window.mousemove(function (e) {
    MousemoveEffect1__lastPosX = e.clientX;
    MousemoveEffect1__lastPosY = e.clientY;

    MousemoveEffect1__updateThrottled();
  });
}

$(function () {
  $('.slider-1 > .owl-carousel').owlCarousel({
    items: 4,
    autoWidth:true,
    loop: true,
    dots: false,
    nav: true,
    navText: ['<i class="fas fa-chevron-left bd-1"></i>', '<i class="fas fa-chevron-right bd-1"></i>'],
    navContainer: '.slider-1 .nav',
  });
})

$(function () {
  $('.my-1 > .owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    center: true,
    nav: true,
    navText: ['<i class="fas fa-chevron-left bd-1"></i>', '<i class="fas fa-chevron-right bd-1"></i>'],
    stagePadding: 300,
    dots: false,
    responsive: {
      0: {
        items: 1
      }
    }
  });
})

$(function () {
  ActiveOnVisible__init();
  MousemoveEffect1__init();
});