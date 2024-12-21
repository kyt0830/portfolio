//popupstore.js



$(document).ready(function(){
    // 
    $('#done .contentbox:hidden').slice(0,3).show();
    $('.tapmenu a').click(function(evt){
        evt.preventDefault();
        $(this).parent().addClass('active').siblings().removeClass('active');
        var getAttr =$(this).attr('href');
        console.log(getAttr);

        $(getAttr).show().siblings().hide();
        if(getAttr === '#done'){
            let getHide = $('.contentbox:hidden').length;
            if(getHide > 0){
                $('#loadmore').show();
            }
            else{
                $('#loadmore').hide();
            }
        }
    });
    $('#loadmore').click(function(evt){
        evt.preventDefault();
        $('.contentbox:hidden').slice(0,3).slideDown();
        let getHide = $('.contentbox:hidden').length;
        if(getHide > 0){
            $('#loadmore').show();
        }
        else{
            $('#loadmore').hide();
        }
    });
});