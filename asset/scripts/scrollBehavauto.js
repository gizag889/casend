$('a[href="#form2"]').click(function(){
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - 130;
    var speed = 50;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
});