let slider = document.querySelector('.swiper-container');
let mySwiper = new Swiper(slider, {
    slidesPerView: "auto",
    spaceBetween: 16,
    slideToClickedSlide: true,
    centeredSlides: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: 'true',
    }
    
});