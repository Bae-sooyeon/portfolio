function TopBar__init() {
    var $menuBox1SubBgBackground = $('.top-bar .menu-box-1 > .sub-bg-background');

    $('.top-bar .menu-box-1 > ul > li').mouseenter(function() {
        var $li = $(this);
        var $ul = $li.find(' > ul');
        var height = $ul.height();
 
        $menuBox1SubBgBackground.css('height', height + 10);

        $li.addClass('hover');
        $li.siblings('.hover').removeClass('hover');
    });

    $('.top-bar .menu-box-1').mouseleave(function() {
        $menuBox1SubBgBackground.css('height', 0);

        $('.top-bar .menu-box-1 > ul > li.hover').removeClass('hover');
    });
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
    TopBar__init();
    ActiveOnVisible__init();
});