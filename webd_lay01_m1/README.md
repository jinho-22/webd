## 웹페이지 레이아웃/메뉴 구현

Jquery를 이용하여 AJAX를 사용하여 메뉴를 작성함
```
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script>
        $(".nav > ul > li").mouseover(function () {
            $(this).find(".submenu").stop().slideDown(200);
        });
        $(".nav > ul > li").mouseout(function () {
            $(this).find(".submenu").stop().slideUp(200);
        });
    </script>
```

<img src="/lay1_m1.png">
