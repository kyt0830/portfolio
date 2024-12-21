//applysample.js


var scTop;
var bodyHeight;
var heightGap;
var stepOffset;
var state = 0;
$(document).ready(function(){
    // sample 12개 초기설정
    $('.samplebox:hidden').slice(0,12).show();
    // 초기설정 후 숨겨져있는 샘플박스 갯수 가져오기
    var gethideitem = $('.samplebox:hidden').length;
    // main
    $('main .titlebox').animate({
        top : 45 + '%',
        opacity : 1
    },800);
    
    //만약 샘플 아이템 가려진애들이 0보다 크면 #loadmore버튼 보여줘줘
    if(gethideitem > 0){
        $('#loadmore').show()
    }
    else{
        $('#loadmore').hide();
    }

    // 로드모어 버튼 누르면 숨겨져있는 애들 6개씩 추가로 slidedown해버리기
    $('#loadmore').click(function(evt){
        evt.preventDefault();
        $('.samplebox:hidden').slice(0,6).slideDown();
        gethideitem = $('.samplebox:hidden').length;
        if(gethideitem > 0){
            $('#loadmore').show()
        }
        else{
            $('#loadmore').hide();
        }
    });

});

$(window).scroll(function(){
    scTop = $(this).scrollTop();
    bodyHeight = $('body').height();
    heightGap = Math.ceil(bodyHeight * 0.7);
    stepboxOffset = $('.step').offset().top;
    
    if(scTop > stepboxOffset - heightGap){
        // state 제어 변수 사용해서 한 번만 실행되도록 강제 제어
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