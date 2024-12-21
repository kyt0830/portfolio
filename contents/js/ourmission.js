

// brand v2.js

var scTop;
var bodyHeight;
var heightGap;
var state = 0; //스크롤 이벤트 0허용 / 1불허
$(document).ready(function(){
    //메인페이지 글씨 등장!
    $('.titlebox h2').animate({
        top : 35 + '%',
        opacity : 1
    },800);

    $('.titlebox p').animate({
        top : 35 + '%',
        opacity : 1
    },1000);

    var idx;
    var pagetop;
    $('.pager a').click(function(evt){
        evt.preventDefault();
        $(this).parent().addClass('active').siblings().removeClass('active');
        idx = $(this).parent().index();
        pagetop = $('.page').eq(idx).offset().top;
        state = 1;
        $('html,body').stop().animate({
            scrollTop : pagetop + 'px'
        },800,function(){
            state = 0;
        });
    });
});

$(window).scroll(function(){
    scTop = $(this).scrollTop();
    bodyHeight = $(this).height();
    heightGap = bodyHeight * 0.4;
    var promiseTop = $('.page').eq(1).offset().top;
    var respectTop = $('.page').eq(2).offset().top;
    var makeTop = $('.page').eq(3).offset().top;
    var reuseTop = $('.page').eq(4).offset().top;
    let Idx = 0;

    //일정한 높이가 되면 txtbox 애니메이트
    if(scTop > promiseTop - heightGap){
        $('#promise .txtbox').animate({
            height : 200
        },200,function(){
            $('#promise .txtbox h3, #promise .txtbox p').animate({
                top : 20 + "%",
                opacity: 1
            },300);
        });
    }
    if(scTop > respectTop - heightGap){
        $('#respect .txtbox').animate({
            height : 200
        },200,function(){
            $('#respect .txtbox h3, #respect .txtbox p').animate({
                top : 20 + "%",
                opacity: 1
            },300);
        });
    }
    if(scTop > makeTop - heightGap){
        $('#make .txtbox').animate({
            height : 200
        },200,function(){
            $('#make .txtbox h3, #make .txtbox p').animate({
                top : 20 + "%",
                opacity: 1
            },300);
        });
    }
    if(scTop > reuseTop - heightGap){
        $('#reuse .txtbox').animate({
            height : 200
        },200,function(){
            $('#reuse .txtbox h3, #reuse .txtbox p').animate({
                top : 20 + "%",
                opacity: 1
            },300);
        });
    }

    //offset().top값에 따라 pager 이동
    if(state === 1) return false;
    if(scTop <= promiseTop){
        $('.pager li').eq(Idx).addClass('active').siblings().removeClass('active');
    }
    if(scTop >= promiseTop){
        Idx++;
        $('.pager li').eq(Idx).addClass('active').siblings().removeClass('active');
    }
    if(scTop >= respectTop){
        Idx++;
        $('.pager li').eq(Idx).addClass('active').siblings().removeClass('active');
    }
    if(scTop >= makeTop){
        Idx++;
        $('.pager li').eq(Idx).addClass('active').siblings().removeClass('active');
    }
    if(scTop >= reuseTop){
        Idx++;
        $('.pager li').eq(Idx).addClass('active').siblings().removeClass('active');
    }
});