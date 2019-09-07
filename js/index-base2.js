// var flag = true;
$('.lc-meizu-header .nav ul li #tel').hover(function () {

    $(this).css('color', '#00beff').parent().siblings().find('a').css('color', '#000')
    $('.hd1').stop().slideDown().siblings('.hide').hide();
    $('.lc-meizu-header-container').css({
        backgroundColor: '#fff',
    })
    $('.logo img').prop('src', 'img/logo-blue.png')
    $('.nav .user, .nav .shopping-cart').css('color', '#000')
    $('.search').css('border', '1px solid #ccc')

}, function () {
    $('.hd1').stop().slideDown();
    $('.lc-meizu-header .nav ul li #tel').css('color', '#000')

});

$('.hd1').hover(function () {

    $('.lc-meizu-header-container').css({
        backgroundColor: '#fff',
        color: '#000'
    })
}, function () {
        $('.hd1').hide();
        $('.lc-meizu-header-container').css('backgroundColor', '');
        $('.lc-meizu-header .nav ul li a').css('color', '')
        $('.logo img').prop('src', 'img/logo.png')
        $('.nav .user, .nav .shopping-cart').css('color', '')
        $('.search').css('border', '')

});



// ===============================================================

$('.lc-meizu-header .nav ul li #song').hover(function () {

    $('.hd2').stop().slideDown().siblings('.hide').hide();
    $('.logo img').prop('src', 'img/logo-blue.png')
    $(this).css('color', '#00beff').parent().siblings().find('a').css('color', '#000')
    $('.nav .user, .nav .shopping-cart').css('color', '#000')
    $('.search').css('border', '1px solid #ccc')
    $('.lc-meizu-header-container').css({
        backgroundColor: '#fff',
        // color: '#000'
    })

}, function () {
    $('.hd2').stop().slideDown();
    $('.lc-meizu-header .nav ul li #song').css('color', '#000')

});

$('.hd2').hover(function () {
    $('.lc-meizu-header-container').css({
        backgroundColor: '#fff',
        color: '#000'
    })
}, function () {
    $('.hide').stop().hide();
    $('.lc-meizu-header-container').css('backgroundColor', '');
    $('.lc-meizu-header .nav ul li a').css('color', '')
    $('.logo img').prop('src', 'img/logo.png')
    $('.nav .user, .nav .shopping-cart').css('color', '')
    $('.search').css('border', '')

});

// ===============================================================
$('.lc-meizu-header .nav ul li #parts').hover(function () {

    $('.hd3').stop().slideDown().siblings('.hide').hide();
    $('.logo img').prop('src', 'img/logo-blue.png')
    $(this).css('color', '#00beff').parent().siblings().find('a').css('color', '#000')
    $('.nav .user, .nav .shopping-cart').css('color', '#000')
    $('.search').css('border', '1px solid #ccc')
    $('.lc-meizu-header-container').css({
        backgroundColor: '#fff',
        // color: '#000'
    })

}, function () {
    $('.hd3').stop().slideDown();
    $('.lc-meizu-header .nav ul li #parts').css('color', '#000')

});

$('.hd3').hover(function () {
    $('.lc-meizu-header-container').css({
        backgroundColor: '#fff',
        color: '#000'
    })
}, function () {
    $('.hide').stop().hide();
    $('.lc-meizu-header-container').css('backgroundColor', '');
    $('.lc-meizu-header .nav ul li a').css('color', '')
    $('.logo img').prop('src', 'img/logo.png')
    $('.nav .user, .nav .shopping-cart').css('color', '')
    $('.search').css('border', '')

});

// ===============================================================

$('.lc-meizu-header .nav ul li #live').hover(function () {

    $('.hd4').stop().slideDown().siblings('.hide').hide();
    $('.logo img').prop('src', 'img/logo-blue.png')
    $(this).css('color', '#00beff').parent().siblings().find('a').css('color', '#000')
    $('.nav .user, .nav .shopping-cart').css('color', '#000')
    $('.search').css('border', '1px solid #ccc')
    $('.lc-meizu-header-container').css({
        backgroundColor: '#fff',
        // color: '#000'
    })

}, function () {
    $('.hd4').stop().slideDown();
    $('.lc-meizu-header .nav ul li #live').css('color', '#000')

});

$('.hd4').hover(function () {
    $('.lc-meizu-header-container').css({
        backgroundColor: '#fff',
        color: '#000'
    })
}, function () {
    $('.hide').stop().hide();
    $('.lc-meizu-header-container').css('backgroundColor', '');
    $('.lc-meizu-header .nav ul li a').css('color', '')
    $('.logo img').prop('src', 'img/logo.png')
    $('.nav .user, .nav .shopping-cart').css('color', '')
    $('.search').css('border', '')

});