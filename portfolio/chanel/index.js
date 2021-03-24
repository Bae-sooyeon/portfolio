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

function dotSlide__init() {
    $('.dots > .menu-box-1 > ul > li').mouseenter(dotSlide);
}

function dotsClick() {
    var $actived = $('.dots > .menu-box-1 > ul > li.active');
    var $post = $actived.next();

    if ($post.length == 0) {
        $('.dots > .menu-box-1 > ul > li:first-child').click();
    } else {
        $post.click();
    }
}

function slideInterval() {
    setInterval(dotsClick, 3000);
}


function MobileSideBar__toggle() {
    var $btn = $('.btn-toggle-mobile-side-bar');
    var $mobileSideBar = $('.mobile-side-bar');
    var $mobileSideBarBg = $('.mobile-side-bar-bg');
    var $html = $('html');
    var $logo = $('.logo');

    if ($btn.hasClass('active')) {
        // 모바일 사이드바 끄기
        $btn.removeClass('active');
        $mobileSideBar.removeClass('active');
        $mobileSideBarBg.removeClass('active');
        $html.removeClass('mobile-side-bar-actived');
        $logo.removeClass('active');

    } else {
        // 모바일 사이드바 켜기
        $btn.addClass('active');
        $mobileSideBar.addClass('active');
        $mobileSideBarBg.addClass('active');
        $html.addClass('mobile-side-bar-actived');
        $logo.addClass('active');
    }
}

function MobileSideBar__init() {
    $('.btn-toggle-mobile-side-bar, .mobile-side-bar-bg').click(MobileSideBar__toggle);

    $('.mobile-side-bar .menu-box-1 ul > li').click(function (e) {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
        }

        e.stopPropagation();
    });
}

// 팝업 1 시작
$(function(){
    $('.btn-show-popup-1').click(function () {
        $('html').addClass('popup-1-active');
    });

    $('.popup-box-1, .popup-box-1 > .popup > .head > .btn-close').click(function () {
        $('html').removeClass('popup-1-active');
    });

    $('.popup-box-1 > .popup').click(function (e) {
        e.stopPropagation();
    });
})

$(function () {
    dotSlide__init();
    slideInterval();
    MobileSideBar__init();
    mobileBtn__init();
    pop_up();
});