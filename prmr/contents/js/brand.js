// brand.js

var pageCount = 0; //현재 페이지
var totalPage; //총 페이지의 수
var state = 0; //이벤트 제어 변수 0-스크롤 허용 / 1- 스크롤 불허
var pageOffsetTop; //pagecount를 eq값으로 사용해 각 페이지가 떨어져있는 값을 담는 변수

$(document).ready(function () {

    $('.contentbox img').animate({
        top: 35 + '%',
        opacity: 1
    }, 800);

    $('.contentbox h2').animate({
        top: 35 + '%',
        opacity: 1
    }, 1000);

    $("#open").click(function (evt) {
        evt.preventDefault();
        $('.seedtech').animate({
            top: '100%'
        }, 600);
    });

    $('#close').click(function (evt) {
        evt.preventDefault();
        $('.seedtech').animate({
            top: '0%'
        }, 600);
    });

    totalPage = $('.page').length;
    //문서에서 마우스 스크롤 이벤트가 발생하면.
    $(document).on('mousewheel DOMMouseScroll', function () {
        if (state === 1) {
            return false;
        }
        state = 1;

        var evt = window.event;
        var ValueDelta = evt.wheelDelta ? evt.wheelDelta : evt.detail;
        if (/firefox/i.test(navigator.userAgent)) {
            ValueDelta = -evt.detail;
        }
        if (ValueDelta < 0) {
            pageCount++;
            if (pageCount === totalPage){
                pageCount = totalPage - 1;
            }
        } else {
            pageCount--;
            if (pageCount === -1){
                pageCount = 0;
            }
        }
        pageOffsetTop = $('.page').eq(pageCount).offset().top;
        $('html, body').animate({
            scrollTop: pageOffsetTop + 'px'
        }, 800, function () {
            state = 0;
        });
    });
});