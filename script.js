


jQuery(function($) {
    $('.bg-slider').bgSwitcher({
        images: ['images/background1.jpg','images/background2.jpg','images/background3.jpg','images/background4.jpg','images/background5.jpg'], // 切り替える背景画像を指定
    });
    	
// $('.slider').slick();

$('.slider').slick({
    autoplay:true,
    autoplaySpeed:5000,
    dots:true,
    slidesToShow:4,
    slidesToScroll:4
});
});







