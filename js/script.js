'use strict';

//ハンバーガーメニュー//

$(".openbtn2").click(function (event) {
    event.preventDefault();
    
    $(this).toggleClass('active');
     $("#gnav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$("#gnav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn2").removeClass('active');//ボタンの activeクラスを除去し
    $("#gnav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});