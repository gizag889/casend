
const tswiper = new Swiper("#slider01 .tswiper", {
    loop: true, // ループ
   
    speed: 6000, // ループの時間
    allowTouchMove: false, // スワイプ無効
    autoplay: { //自動再生
      delay: 0, // 途切れなくループ
      disableOnInteraction: false, // 矢印をクリックしても自動再生を止めない
    }
    
  });



    const swiper = new Swiper('#slider02 .swiper', {
        loop: true,
     slidesPerView: 1,
     slidesPerGroup: 1,
     spaceBetween: 70,
  
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      992: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 70,
      }
    }
    
 });
