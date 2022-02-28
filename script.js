


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









$(function(){
    var effect_pos = 300; // 画面下からどの位置でフェードさせるか(px)
    var effect_move = 50; // どのぐらい要素を動かすか(px)
    var effect_time = 800; // エフェクトの時間(ms) 1秒なら1000

    // フェードする前のcssを定義
    $('.scroll-fade').css({
        opacity: 0,
        transform: 'translateY('+ effect_move +'px)',
        transition: effect_time + 'ms'
    });

    // スクロールまたはロードするたびに実行
    $(window).on('scroll load', function(){
        var scroll_top = $(this).scrollTop();
        var scroll_btm = scroll_top + $(this).height();
        effect_pos = scroll_btm - effect_pos;

        // effect_posがthis_posを超えたとき、エフェクトが発動
        $('.scroll-fade').each( function() {
            var this_pos = $(this).offset().top;
            if ( effect_pos > this_pos ) {
                $(this).css({
                    opacity: 1,
                    transform: 'translateY(0)'
                });
            }
        });
    });
});