$(function () {
    // 슬라이드 : 페이드 효과
    let currentIndex = 0;
    $(".slider").hide().first().show();

    setInterval(function () {
        let nextIndex = (currentIndex + 1) % 3;

        $(".slider").eq(currentIndex).fadeOut(1200);
        $(".slider").eq(nextIndex).fadeIn(1200);

        currentIndex = nextIndex;
    }, 3000);

    // 메뉴 : 하나씩 나오기
    $(".nav > ul > li").mouseover(function () {
        $(this).find(".submenu").stop().slideDown(200);
    });
    $(".nav > ul > li").mouseout(function () {
        $(this).find(".submenu").stop().slideUp(200);
    });
});