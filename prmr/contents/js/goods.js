//daily.js


$(document).ready(function () {

    //초기값
    $('#all .itembox').slice(0,8).show();
    $('#loaditem').show();

    //pager의 버튼을 누르면 클래스 활성화 시키기
    $('.tabmenu a').click(function (evt) {
        evt.preventDefault();
        $(this).parent().addClass('active').siblings().removeClass('active');
        let getAttr = $(this).attr('href');
        $('.itembox').hide();
        $(getAttr).find('.itembox').slice(0,8).show();
        let getHide = $(getAttr).find('.itembox:hidden').length;

        if(getHide === 0){
            $('#loaditem').hide();
        }
        else{
            $('#loaditem').show();
        }
    });

    //loaditem버튼
    $('#loaditem').click(function(evt){
        evt.preventDefault();
        let getAttr =  $('li.active a').attr('href');
        console.log(getAttr);
        $(getAttr).find('.itembox:hidden').slice(0,4).slideDown();
        let getHide = $(getAttr).find('.itembox:hidden').length;
        if(getHide === 0){
            $('#loaditem').hide();
        }
        else{
            $('#loaditem').show();
        }
    });
});