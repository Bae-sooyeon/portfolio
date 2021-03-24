function MySlider1__init() {
    $('.my-slider-1 > .owl-carousel').owlCarousel({
        responsive: {
            0: {
                items: 1
            }
        },
        loop: true,
        dots: false,
        nav: true,
        navText:['<img src="https://bae-sooyeon.github.io/img1/pf/tada/btn_lineup_left@3x.png" alt="">','<img src="https://bae-sooyeon.github.io/img1/pf/tada/btn_lineup_right@3x.png" alt="">'],
        autoplay:true
    });
}


$(function () {
    MySlider1__init();
});