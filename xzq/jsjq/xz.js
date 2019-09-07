$(function(){
    $('.xzb a').mouseover(function (){
        fu()
        $(this).css({color:'#4EC3F5'})
        
    })
    function fu(){
        $('.xzb a').css({color:''})
    }

    $('.xzd').mouseenter(function(){
        $(this).find('.xzf').show();
    })
    $('.xzd').mouseleave(function(){
        $(this).find('.xzf').hide();
    })
    // $.each($('.xzd'),function(){
    //     $(this).hover(function(){
    //         $(this).find('.xzf').stop().fadeToggle();
    //     })
    // })


        $('.xz-t .xz-x').eq(0).stop().show().siblings('.xz-x').stop().hide();
        $('.xz-qq ul li').eq(0).css({
            backgroundColor :'black'
        }).siblings().css({
            backgroundColor :''
        });
        $('.xz-qq ul li').click(function () {
            $(this).addClass('current').siblings().removeClass('current');
            var index = $(this).index();
            $('.xz-t .xz-x').eq(index).stop().fadeIn(1000).siblings('.xz-x').stop().fadeOut(1000);
            $(this).css({
                backgroundColor :'black'
            }).siblings().css({
                backgroundColor :''
            });
        })
//         setInterval(function(){
            
//             $('.xz-qq ul li').addClass('current').siblings().removeClass('current');
//             $('.xz-t .xz-x').eq(index).stop().fadeIn(100).siblings('.xz-x').stop().fadeOut(100);
//         },1000)
})