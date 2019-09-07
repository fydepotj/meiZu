$(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() >= 500){
            $('.tw').css({
                position:'fixed',
                color:'#000',  
                backgroundColor: '#fff',
                borderBottom: '1px solid #ccc'
            }).slideDown()
            $('.tw').find('li').css({'color':'#000'})
        } else if($(this).scrollTop() < 500) {     
                $('.tw').css({
                    position:'absolute',
                    color:'#fff',  
                    backgroundColor: '',
                    borderBottom: 'none'
                }).show(200)
                $('.tw').find('li').css({'color':'#fff'})
        }
    })
})
