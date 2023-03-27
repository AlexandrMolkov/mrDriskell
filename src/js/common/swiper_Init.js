import Swiper, {Navigation,Pagination,EffectCoverflow,Autoplay} from 'swiper';


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
    const brandsSlider = new Swiper('.brands__slider', {
        modules: [Navigation,Autoplay],
        direction: 'horizontal',
        loop: false,
        slidesPerView: 5,
        spaceBetween: 20,
        speed: 300,

        autoplay: {
            delay: 3000,
            disableOnInteraction: true,
            pauseOnMouseEnter: 'false',
            stopOnLastSlide: false,
        },

        navigation: {
            nextEl: '#brands-slide-next',
            prevEl: '#brands-slide-prev',
        },
    })
    const reviewsSlider = new Swiper('.reviews__slider', {
        modules: [Navigation,Pagination,EffectCoverflow],
        direction: 'horizontal',
        loop: false,
        slidesPerView: 2,
        spaceBetween: 20,
        speed: 300,

        navigation: {
            nextEl: '#reviews-slide-next',
            prevEl: '#reviews-slide-prev',
        },
        pagination: {
            el: '#reviews-slider-pagination',
            type: 'bullets',
            clickable: 'false',
            dynamicBullets: false,
        },
    })
