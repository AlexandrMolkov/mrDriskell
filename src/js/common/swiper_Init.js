import Swiper, {Navigation,Pagination,EffectFlip,Autoplay} from 'swiper';


    const heroSlider = new Swiper('.hero__slider', {
        modules: [Navigation,Autoplay,Pagination],
        direction: 'horizontal',
        loop: false,
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 300,

        autoplay: {
            delay: 3000,
            disableOnInteraction: true,
            pauseOnMouseEnter: 'false',
            stopOnLastSlide: false,
        },

        navigation: {
            nextEl: '.slider-main__btn-next',
            prevEl: '.slider-main__btn-prev',
        },

        pagination: {
            el: '.slider-main-pagination',
            type: 'bullets',
            clickable: 'false',
            dynamicBullets: false,
        },
    })