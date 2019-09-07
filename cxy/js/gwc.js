$(function () {
    //1.全选框结果控制小复选框
    $('.checkall').change(function () {
        $('.j-checkbox, .checkall').prop('checked',$(this).prop('checked'))
        countZj();

        
        if ($('.j-checkbox:checked').length != 0){
            $('.cart-mz').find('span').hide();
            $('.cart-mz').find('em').show();
        } else {
            $('.cart-mz').find('span').show();
            $('.cart-mz').find('em').hide();
        }
    })

    //2.小框 控制全选框  选中数量
    $('.j-checkbox').change(function () {
        if ($('.j-checkbox:checked').length == $('.j-checkbox').length) {
            $('.checkall').prop('checked',true);
        } else {
            $('.checkall').prop('checked',false);
        }

        if ($(this).prop('checked')) {
            countZj();
            
        } else {
            countZj();
            
        }

        if ($('.j-checkbox:checked').length != 0){
            $('.cart-mz').find('span').hide();
            $('.cart-mz').find('em').show();
        } else {
            $('.cart-mz').find('span').show();
            $('.cart-mz').find('em').hide();
        }

    
        
    })




    //3.设置加号
    $('.increment').click(function () {
        var n = $(this).siblings('.itxt').val();
        n++;
        $(this).siblings('.itxt').val(n);

        // //5.获取单价
        // var dj = $(this).parents('.p-num').siblings('.p-price').html().substr(1);
        // //6.设置小计价格
        // $(this).parents('.p-num').siblings('.p-sum').html('￥'+(dj * n).toFixed(2));

        //5和6封装调用
        count($(this),n);
        //8调用
        countZj();

    })

    //4.设置减号
    $('.decrement').click(function () {
        var n = $(this).siblings('.itxt').val();
        if (n == 1) {
            return false;
        }
        n--;
        $(this).siblings('.itxt').val(n);

        //5和6封装调用
        count($(this),n);

        //8调用
        countZj();

    })

    //7.在input内直接输入数量 小计价格
    $('.itxt').change(function () {
        if ($(this).val() < 1) {
            $(this).val('1');
        }


        // $(this).val() 就是n
        count($(this), $(this).val());

        //8调用
        countZj();
    })

    //8 刷新网页 也得计算一下  调用
    countZj();

    //9 删除（删除后重新计算 调用countZj）
    $('.p-action a').click(function () {
        $(this).parents('.cart-item').remove();
        countZj();
    })

    $('.remove-batch').click(function () {
        $('.j-checkbox:checked').parents('.cart-item').remove();
        countZj();
    })
    
    $('.clear-all').click(function () {
        $('.cart-item').remove();
        countZj();
    })


    function count (that,n) {  //that 和 n 设置形参  因为谁调用不一样
        //5.获取单价
        var dj = that.parents('.p-num').siblings('.p-price').children('span').html().substr(1);
        //6.设置小计价格
        that.parents('.p-num').siblings('.p-sum').html('￥'+(dj * n).toFixed(2));
    }

    //8.总商品数和总价改变
    function countZj () {
        var tsum = 0;
        $('.cart-item').find('.j-checkbox:checked').parent('.p-checkbox').siblings('.p-num').find('.itxt').each(function () {
            //转为数值类型  否则为字符串
            // console.log($(this).parents('.p-num').siblings('.p-checkbox').children('.j-checkbox').prop('checked'));
                tsum += parseInt($(this).val());
            
        })
        $('.amount-sum em').html(tsum);

        var tzj = 0;
        $('.cart-item').find('.j-checkbox:checked').parent('.p-checkbox').siblings('.p-sum').each(function () {
            tzj += parseFloat($(this).html().substr(1));
        })
        $('.price-sum em').html('￥'+tzj.toFixed(2));
        
    }





})