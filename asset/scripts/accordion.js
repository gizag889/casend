$(function(){
    $('.caresend-accordion__question').click(function(){
        // コンテンツの展開
        $(this).siblings('.caresend-accordion__answer').stop().slideToggle();
        // クリックされた以外のコンテンツを閉じる
        $('.caresend-accordion__question').not($(this)).siblings('.caresend-accordion__answer').slideUp();
        // クリックされた要素にアクティブ要素を付与してデザインを変える
        $(this).toggleClass('active');
        // 
        $('.caresend-accordion__question').not($(this)).removeClass('active');
        
    });
});


