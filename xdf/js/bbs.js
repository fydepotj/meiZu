$(function () {
    /**
     * 自定义控制台[我们坚持用原生写代码,绝不添加任何插件]
     */
    console.log('%c[在下坚持写原生JS代码已经30年了,复制粘贴?不存在的]', 'background-color:Magenta;color:#fff');
    console.log('%c[在下坚持写原生JS代码已经30年了,复制粘贴?不存在的]', 'background-color:deeppink;color:#fff');
    console.log('%c[在下坚持写原生JS代码已经30年了,复制粘贴?不存在的]', 'background-color:hotpink;color:#fff');
    console.log('%c[在下坚持写原生JS代码已经30年了,复制粘贴?不存在的]', 'background-color:pink;color:#fff');

    /**
     * 右侧os tab切换
     */
    $('.sys_kind').hover(function () {
        $(this).addClass('sys_kind_current').siblings().removeClass('sys_kind_current');
        $('.sys_content').eq($(this).index()).stop().fadeIn().siblings('.sys_content').stop().fadeOut();
    });

    /**
     * 回到顶部
     */
    function showScrollTop() {
        if ($(this).scrollTop() > 150) {
            $('.scroll_up').stop().fadeIn();
        } else {
            $('.scroll_up').stop().fadeOut();
        }
    }

    /**
     * 顶部透明度
     * 顶部隐藏
     */
    function headerNone() {
        $('.header').css('opacity', 1 - $(window).scrollTop() / 100);
        $('.header').css('opacity') <= 0 ? $('.header').hide() : $('.header').show();
    }

    showScrollTop();
    headerNone();
    $(window).scroll(function () {
        showScrollTop();
        headerNone();
    });
    $('.scroll_up').click(function () {
        $('body,html').stop().animate({
            scrollTop: 0
        })
    });

    /**
     * 热评详情
     */
    $('.hot_post .bottom li').mouseenter(function () {
        if ($('.hot_post_hover')) {
            $('.hot_post_hover').remove();
        }
        var x = $(this).find('.user_photo img').position().left;
        var y = $(this).find('.user_photo img').position().top;
        var content = `<div>
                            <img src="${$(this).find('.user_photo img').prop('src')}">
                            <span>${$(this).find('.user_name').text()}</span>
                            <p><b>阅读</b>: <span>${$(this).find('.view_num').text()}</span><b>评论</b>:<span>${$(this).find('.comment_num').text()}</span></p>
                            <a href="javascript:;">收听TA</a>
                        </div>`;
        var div = $(content);
        $('.hot_post').append(div);
        div.addClass('hot_post_hover').css({
            left: x + 40 + 'px',
            top: y - 10 + 'px'
        }).stop().slideDown();
    });
    $('.hot_post').on('mouseleave', $('.hot_post_hover'), function () {
        $('.hot_post_hover').remove();
    });

    /**
     * 点击X删除items
     */
    $('.items_close').click(function () {
        $(this).parents('li').stop().slideUp();
    });

    /**
     * 点击搜索框弹出搜索弹窗
     */
    $('.bbs_nav input').click(function () {
        $('.filter_wrap .filter_top_content').empty();
        var strSearchContent = `<div class="close"></div>
                                <div class="filter_logo"></div>
                                <form onsubmit="return false">
                                    <input class="txt" type="text" autofocus><input class="btn" type="button" value="搜索" >
                                </form>`;
        $('.filter_wrap .filter_top_content').append(strSearchContent);
        $('.filter').slideDown('fast').animate({
            width: '100%',
            height: '100%',
            borderRadius: 0
        }, 500);
        $('body').css({
            overflowX: 'hidden',
            overflowY: 'hidden',
        });
        $('.txt').animate({
            width: 400
        }, 600, function () {
            $('.txt').focus();
        });
        changeFilterColor();
        timerForFilter = setInterval(changeFilterColor, 2000);
    });

    /**
     * filter层
     */
    /**
     * 点击X关闭弹窗
     */
    $('.filter_wrap').on('click', '.close', function () {
        clearInterval(timerForFilter);
        $('.filter_2').css({
            opacity:-1
        });
        flag_creat_searchTips = true;
        $('.filter').stop().slideUp();
        $('body').css({
            overflowX: 'auto',
            overflowY: 'auto',
        });
        $('.filter_wrap .filter_top_content').empty();
    });

    /**
     * 渐变函数
     */
    function changeFilterColor() {
        if ($('.filter_2').css('opacity') == 1) {
            $('.filter_2').animate({
                opacity: 0
            }, 2000);
        } else if($('.filter_2').css('opacity') == 0){
            $('.filter_2').animate({
                opacity: 1
            }, 2000);
        }
    }

    var timerForFilter;

    var tipsKeyWordArr = ['魅族X16s', '魅族16x', '魅族note9', '魅族note8', '配件', 'Flyme', '社区', '客服'];
    var flag_creat_searchTips = true;

    /**
     * 聚焦文本框
     */
    $('.filter_wrap').on('focus', '.txt', function () {
        $(this).parents('form').animate({
            top: '20%'
        }, 500);
        //创建搜索建议
        if (flag_creat_searchTips) {
            $('.filter_top_content').append('<ul class="search_tips"></ul>');
            for (var i = 0; i < tipsKeyWordArr.length; i++) {
                $('.filter_top_content ul').append('<li><a href="javascript:;">' + tipsKeyWordArr[i] + '</a></li>');
            }
            flag_creat_searchTips = false;
            $('.filter_top_content ul li').fadeIn(500);
        }


    });

    /**
     * 抽奖
     */
    var prize = ['相信我,真的没用插件啊', '魅族直柄伞', '1煤球', '魅族蓝牙小音响', '50煤球', '狗年熊猫公仔', '100煤球', '补签道具卡', '20煤球'];
    $('.chouJiang_img').click(function () {
        $('.filter_wrap .filter_top_content').empty();
        var strChouJiang = `<div class="chouJiang_wrap">
                <div class="fl chouJiang">
                    <img class="zhuanPan" src="img/zhuanpan.png" alt="">
                    <img class="zhiZheng" src="img/zhizheng.png" alt="">
                </div>
                <div class="fr zhongJiang">
                    <div class="zhongJiang_box">
                        <h3>中奖名单</h3>
                        <ul class="zhongJiang_list">
                        </ul>
                    </div>
                </div>
            </div>
            <div class="close"></div> `;
        $('.filter_wrap .filter_top_content').append(strChouJiang);
        var height = $(window).innerHeight();
        $('.filter').slideDown().animate({
            width: 1366,
            height: 680,
            borderRadius: 20
        }, 500);
    });
    var flag_zhuan = true;
    $('.filter_top_content').on('click', '.zhiZheng', function () {
        if (!flag_zhuan) {
            alert('点击频率太快了,别着急呀');
            return false;
        }
        flag_zhuan = false;
        $('.zhuanPan').css({
            transition: 'all 0s ',
            transform: 'translate(-50%,-50%) rotateZ(0)'
        });
        var randomCount = parseInt(Math.random() * 8 + 1);
        $('.zhuanPan').addClass('zhuanPan_zhuan').css({
            transition: 'all ' + randomCount + 's'
        });
        $('.zhuanPan').animate({
            width: 600
        }, 5000, function () {
            $('.zhuanPan').removeClass('zhuanPan_zhuan');
        }).animate({width: 600}, 0, function () {
            $('.zhuanPan').css({
                transform: 'translate(-50%,-50%) rotateZ(' + -45 * randomCount + 'deg)'
            });
        }).animate({width: 600}, randomCount * 1000, function () {
            creatNews();
            flag_zhuan = true;
        });
        console.log('中奖了!奖品:' + prize[randomCount] + randomCount);

        function creatNews() {
            var user = 'user';
            var li = $('<li>恭喜用户:user 获得' + prize[randomCount] + '</li>');
            $('.zhongJiang_list').append(li);
            li.fadeIn();
        }
    });

    /**
     * 轮播图
     */
    var slider_timer;
    var count = 0;
    $('.arrow_right').click(function () {
        $('.point').children().removeClass('point_current');
        if (count === 3) {
            $('.focus_slider .content').css({
                left: 0
            });
            count = 0;
        }
        count++;
        if (count === 3) {
            $('.point').children().eq(0).addClass('point_current');
        } else {
            $('.point').children().eq(count).addClass('point_current');
        }
        $('.focus_slider .content').stop().animate({
            left: -686 * count
        });

    });
    $('.arrow_left').click(function () {
        $('.point').children().removeClass('point_current');
        if (count === 0) {
            $('.focus_slider .content').css({
                left: -686 * 3
            });
            count = 3;
        }
        count--;
        $('.point').children().eq(count).addClass('point_current');
        $('.focus_slider .content').stop().animate({
            left: -686 * count
        });
    });
    slider_timer = setInterval(function () {
        $('.arrow_right').click();
    }, 2020);
    $('.focus_slider,.focus_slider li').hover(function () {
        clearInterval(slider_timer);
    }, function () {
        slider_timer = setInterval(function () {
            $('.arrow_right').click();
        }, 2020);
    });
    $('.focus_slider li').click(function () {
        $('.point').children().removeClass('point_current');
        $('.focus_slider .content').animate({
            left:-686*$(this).index()
        });
        $('.point').children().eq($(this).index()).addClass('point_current');
        count=$(this).index();
    })

})