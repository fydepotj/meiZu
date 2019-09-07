$(function () {
    $(window).css({
        overflowX:'hidden'
    });

    //section1 动画
    $('.ph2').fadeIn(1000).addClass('ph_rotate').animate({
        border: 0
    }, 0, function () {
        $('.ph1').fadeIn(1000).addClass('ph_rotate').animate({
            border: 0
        }, 0, function () {
            $('.ph3').fadeIn(1000).addClass('ph_rotate').animate({
                border: 0
            }, 0, function () {
                $('.ph4').fadeIn(1000).addClass('ph_rotate').animate({
                    border: 0
                }, 0, function () {
                    $('.section1 h2').fadeIn('slow').addClass('h2_up');
                });
            });
        });
    });

    //section2
    function section2_show() {
        if($(window).scrollTop()>=800){
            $('.section2 h2').fadeIn(1000).addClass('section2_up').animate({
                border:0
            },0,function () {
                $('.section2 li').eq(0).fadeIn().addClass('section2_up').animate({
                    border:0
                },0,function () {
                    $('.section2 li').eq(1).fadeIn().addClass('section2_up').animate({
                        border:0
                    },0,function () {
                        $('.section2 li').eq(2).fadeIn().addClass('section2_up').animate({
                            border:0
                        },0,function () {
                            $('.section2 li').eq(3).fadeIn().addClass('section2_up').animate({
                                border:0
                            },0,function () {
                                $('.section2 li').eq(4).fadeIn().addClass('section2_up').animate({
                                    border:0
                                },0,function () {
                                    $('.section2 li').eq(5).fadeIn().addClass('section2_up').animate({
                                        border:0
                                    },0,function () {
                                        $('.section2 li').eq(6).fadeIn().addClass('section2_up');
                                    });
                                });
                            });
                        });
                    });
                });
            });

        }
    }
    section2_show();


    //section3
    function section3_show() {
        if($(window).scrollTop()>2000){
            $('.section3 .uni_img3').fadeIn(800).animate({
                border:0
            },0,function () {
                $('.section3 .uni_img2').fadeIn(800).addClass('uni_img2_after').siblings('.section3 .uni_img4').fadeIn(800).addClass('uni_img4_after').animate({
                    border:0
                },0,function () {
                    $('.section3 .uni_img1').fadeIn(800).addClass('uni_img1_after').siblings('.section3 .uni_img5').fadeIn(800).addClass('uni_img5_after').animate({
                        border:0
                    },200,function () {
                        $('.uni_img1,.uni_img2,.uni_img4,.uni_img5').stop().fadeOut();

                        // $('.uni_box').addClass('uni_box_img');
                    });
                });
            });
        }

    }
    section3_show();







    //事件调用
    $(window).scroll(function () {
        section2_show();
        section3_show();
    });
});




