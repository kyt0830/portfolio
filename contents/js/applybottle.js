//applybottle.js

var scTop;
var bodyHeight;
var heightGap;
var stepOffset;
var state = 0;
$(document).ready(function(){

    $('main .titlebox').animate({
        top : 45 + '%',
        opacity : 1
    },800);
});

$(window).scroll(function(){
    scTop = $(this).scrollTop();
    bodyHeight = $('body').height();
    heightGap = Math.ceil(bodyHeight * 0.7);
    stepboxOffset = $('.step').offset().top;

    if(scTop > stepboxOffset - heightGap){
       if(state === 1) return false;
       state = 1;
       $('.stepbox').animate({
        left : 0
       },1000);

       $('.stepbox:eq(1), .stepbox:eq(2), .stepbox:eq(3)').animate({
        left : 26.66 + '%'
       },600);
       $('.stepbox:eq(2), .stepbox:eq(3)').animate({
        left : 53.72 + '%'
       },600);
       $('.stepbox:eq(3)').animate({
        left : 79.98 + '%'
       },600,function(){
        $('.steptitbox').fadeIn(600);
       });
    }
});