$(function () {
    //返回顶部
    $(document).on('scroll', function () {
        // if ($(this).scrollTop() >= $('.c_nav').offset().top) {
        if ($(this).scrollTop() > $('.shortcut').outerHeight()) {
            $('.c_nav').addClass('show')
            // console.log($(this).scrollTop());
            // console.log($('.c_nav').offset().top);
            
        } else {
            $('.c_nav').removeClass('show')
        }
        show1()
    })
    function show1() {
        if ($(this).scrollTop() >= $('.product').offset().top) {
            $('.top').fadeIn()
        } else {
            $('.top').fadeOut()
        }
    }
    show1()
    // console.log($('.c_nav'));
    $('.top').on('click', function () {
        $('body,html').animate({
            scrollTop: 0
        })
    })

    //点击小图展示大图
    $('.main .fl ul li').each(function () {
        $(this).on('click', function () {
            $('.big').find('img').prop('src', $(this).find('img').prop('src'))

        })
    })

    //点击项目实现换图
    $('.main .w .fr .many .pro .fr a').each(function () {
        $(this).on('click', function () {
            $('.main .w .blk .fl').eq($(this).index()).addClass('block').siblings('.fl').removeClass('block')
            // console.log($('.main  .blk .fl ul li'));
            $('.big').find('img').prop('src', $('.main  .blk .fl').eq($(this).index()).find('li').eq(0).find('img').prop('src'))
        })
    })

    //点击加上边框
    $('.main .w .fr .many div .fr a').each(function () {
        $(this).on('click', function () {
            $(this).addClass('showBlue').siblings('a').removeClass('showBlue')
        })
    })

    //购买数量
    $('#reduce').on('click', function () {
        var i = $('#count').val()
        i--
        if (i <=0) {
            i = 0
            $('.main .w .fr .many div .fr a').removeClass('showBlue')
        }
        $('#count').val(i)
        priceAll(i)
    })

    $('#increase').on('click', function () {
        var i = $('#count').val()
        i++
        if (i>=999) {
            i=999
        }
        $('#count').val(i)
        priceAll(i)
        // console.log($('.allprice a p').eq(0));
    })

    $('#count').on('keyup',function () {
        var i = $('#count').val()
        if (i>=999) {
            i=999
        }
        priceAll(i)
    })
    
  priceAll()
  function priceAll(i) {
      $('.pcl').each(function (index) {
        // var pic=$('.pcl')[index].innerHTML.substr(1,6)
        // console.log( $('.pcl'));
        //  console.log( $('.pcl')[index].innerHTML.substr(1,6));
        //  console.log(index);
        var i=$('#count').val()
        $('#sum').html(i)
        if (index==0) {
            $('.pcl')[index].innerHTML='￥'+(452.33*i).toFixed(2)+'x3期'
        }else if (index==1) {
            $('.pcl')[index].innerHTML='￥'+(226.16*i).toFixed(2)+'x6期'
        }else{
            $('.pcl')[index].innerHTML='￥'+(121.56*i).toFixed(2)+'x9期'
        }
     })

  }
  
  //设置购物车按钮
  $('#goCar').one('click',function () {
      $('#sum').stop().animate({
          left:130,
          top:-50
      },80,'linear').animate({
        left:193,
        top:-30
    },80,'linear').animate({
        left:255,
        top:18
    },80,'linear').animate({
        left:280,
        top:40
    },80,'linear').animate({
        left:307,
        top:100
    },80,).animate({
        left:310,
        top:66
    },80,).animate({
        left:295,
        top:86
    },80,'linear')
  })


  //设置登录
  $('#login').on('click',function () {
      $(this).siblings('div').remove()
       var div=$('<div>请先登录才能和我说话哦...</div>')
       $(this).parent('p').append(div)
       $('p div').addClass('log')
       
       
  })
  //更多
  $('#bblue').hover(function () {
    //   console.log(11); 
      $('#much').toggleClass('block')
  })
  
  //加购
  $('.more').hover(function () {
    //   console.log(11);
      $('#moree').toggleClass('block')
  })
  
  //推荐效果
  $('.rmd ul li img').each(function () {
      $(this).hover(function () {
         var str= $(this)[0].src;
         str=str.replace('120x120.jpg','');
         $(this)[0].src=str;
        $(this).toggleClass('grow')
           
      })
  })

})