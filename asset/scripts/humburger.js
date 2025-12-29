$(".burger").click(function () {
    $(this).toggleClass('active');
    $(".burger-menu").toggleClass('active');

    // 現在のbodyタグのoverflowスタイルを確認
    if ($("body").css("overflow") === "hidden") {

        // もしoverflowがhiddenなら、bodyのスタイルを元に戻す
        $("body").css({ height: "", overflow: "" });
  
      } else {
  
        // そうでなければ、bodyにheight: 100%とoverflow: hiddenを設定し、スクロールを無効にする
        $("body").css({ height: "100%", overflow: "hidden" });
  
      }
});

$(".burger-menu__item").click(function () {
  $(this).toggleClass('active');
  $(".burger-menu").removeClass('active');
  $(".burger").removeClass('active');
});