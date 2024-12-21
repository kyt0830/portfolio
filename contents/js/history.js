


// history.js


var scTop;//위치값을 담을  변수수
var bodyHeight; //현재 body의 높이값을 담습니다.
var heightGap; //현재 body높이 대비 0.n 값을 구합니다.

var showArticle1;
var showArticle2;
var showArticle3;
var showArticle4;
var showArticle5;
var showArticle6;
$(window).scroll(function(){
    scTop = $(this).scrollTop(); //현재 스크롤의 위치값 
    bodyHeight = $(this).height(); // 현재 html,body의 높이값값
    heightGap = bodyHeight * 0.7; // 
    
    showArticle2 = $('article').eq(1).offset().top - heightGap;
    showArticle3 = $('article').eq(2).offset().top - heightGap;
    showArticle4 = $('article').eq(3).offset().top - heightGap;
    showArticle5 = $('article').eq(4).offset().top - heightGap;
    showArticle6 = $('article').eq(5).offset().top - heightGap;

    // 2번 article box
    if(showArticle2 < scTop){
        showArticle2 = $('article').eq(1);
        showArticle2.find('.wordsbox').animate({
            left : 29 + '%',
            opacity : 1
        },800);
        showArticle2.find('.content').animate({
            right : 0 + '%',
            opacity : 1
        },800)
    }

    // 3번 article box
    if(showArticle3 < scTop){
        showArticle3 = $('article').eq(2);
        showArticle3.find('.wordsbox').animate({
            right : 26 + '%',
            opacity : 1
        },800);
        showArticle3.find('.content').animate({
            left : 25 + '%',
            opacity : 1
        },800)
    }

    // 4번 article box
    if(showArticle4 < scTop){
        showArticle4 = $('article').eq(3);
        showArticle4.find('.wordsbox').animate({
            left : 20 + '%',
            opacity : 1
        },800);
        showArticle4.find('.content').animate({
            right : 20 + '%',
            opacity : 1
        },800)
    }

    // 5번 article box
    if(showArticle5 < scTop){
        showArticle5 = $('article').eq(4);
        showArticle5.find('.wordsbox').animate({
            right : 15 + '%',
            opacity : 1
        },800);
        showArticle5.find('.content').animate({
            left : 22 + '%',
            opacity : 1
        },800)
    }

    // 6번 article box
    if(showArticle6 < scTop){
        showArticle6 = $('article').eq(5);
        showArticle6.find('.wordsbox').animate({
            left : 13 + '%',
            opacity : 1
        },800);
        showArticle6.find('.content').animate({
            right : 0 + '%',
            opacity : 1
        },800)
    }
});

$(document).ready(function(){
    showArticle1 = $('article').eq(0);
    showArticle1.find('.content').animate({
        left : 0 + '%',
        opacity : 1
    },800);
    showArticle1.find('.wordsbox').animate({
        right : 26 + '%',
        opacity : 1
    },800);

    $('.imgbox').mouseenter(function(){
        $(this).find('.txtbox').fadeIn(400);
    })
    $('.imgbox').mouseleave(function(){
        $(this).find('.txtbox').fadeOut(300);
    });
});