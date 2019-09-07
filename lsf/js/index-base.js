
var indexZ = 0;

$('.nav ul li a').hover(
  function () {
    var index = $(this).parent('li').index()
    // console.log($(this));
    // indexs = $(this).parent('li').index();
    // console.log(indexs);
    if (!(index >= 4) || index === 8) {
      if (index === 8) {
        indexZ = 4
      } else {
        indexZ = index
      }
      $('.hide').eq(indexZ).stop().slideDown().siblings('.hide').hide()
      $('.lc-meizu-header-container').css({
        backgroundColor: 'rgba(255, 255,255)'
      })
      $('.logo img').prop('src', 'img/logo-blue.png')
      $(this).css('color', '#00beff').parent().siblings().find('a').css('color', '#000')
      $('.user a, .shopping-cart a').css('color', '#000')
      $('.search').css('border', '1px solid #ccc')
    } else {
      // console.log(index)
      $('.hide').eq(indexZ).stop().hide().siblings('.hide').hide()
      $('.lc-meizu-header-container').css({
        backgroundColor: ''
      })
      // $('.logo img').prop('src', 'img/logo-blue.png')
      $(this).css('color', '#00beff').parent().siblings().find('a').css('color', '#000')
      $('.user a, .shopping-cart a').css('color', '#000')
      $('.search').css('border', '1px solid #ccc')
    }
  },
  function () {
    if (
      !($(this).parent('li').index() >= 4)
    ) {
      // alert(4)
      // return
      $('.hide').eq($(this).parent('li').index()).show()
      $('.lc-meizu-header .nav ul li a').css('color', '#000')

    }
  }
)


$('.hide').hover(
  function () {
    $('.lc-meizu-header-container').css({
      backgroundColor: '#fff',
      color: '#000'
    })
  },
  function () {
    $(this).hide()
    $('.lc-meizu-header-container').css('backgroundColor', '')
    $('.lc-meizu-header .nav ul li a').css('color', '')
    $('.logo img').prop('src', 'img/logo-blue.png')
    $('.user a, .shopping-cart a').css('color', '')
    $('.search').css('border', '')
  }
)


$('.user-icon-user').click(function () {
  $('.user-icon-user').css('color', '#00beff')
  $('.login').stop().slideDown().animate({
    backgroundColor: '#fff'
  }, 1500, function () {
    $('.login').stop().slideUp()
    $('.user-icon-user').css('color', '')
  })
})