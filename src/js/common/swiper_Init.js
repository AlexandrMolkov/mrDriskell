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
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            425: {
                slidesPerView: 2,
                spaceBetween: 0
            },
            630: {
                slidesPerView: 3,
                spaceBetween: 0
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 0
            },

            1024: {
                slidesPerView: 5,
                spaceBetween: 0
            },
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
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: -30
            },

            769: {
                slidesPerView: 2,
                spaceBetween: 20
            },
        },
    })
    const thisBrandSlider = new Swiper('.this-brand-slider', {
        modules: [Navigation,Pagination],
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
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: -30
            },

            769: {
                slidesPerView: 4,
                spaceBetween: 20
            },
        },
    })
    const recomendedSlider = new Swiper('.recomended-slider', {
        modules: [Navigation,Pagination],
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
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: -30
            },

            769: {
                slidesPerView: 4,
                spaceBetween: 20
            },
        },
    })
    const similarSlider = new Swiper('.similar-slider', {
        modules: [Navigation,Pagination],
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
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: -30
            },

            769: {
                slidesPerView: 4,
                spaceBetween: 20
            },
        },
    })
/*     const prod1Slider = new Swiper('.products__slider-cat-1', {
        modules: [Pagination],
        direction: 'horizontal',
        loop: false,
        slidesPerView: 4,
        spaceBetween: 0,
        speed: 300,

        breakpoints: {
            320: {
                slidesPerView: 3,
                spaceBetween: 0
            },

            768: {
                slidesPerView: 999,
                spaceBetween: 0
            },
        },
        pagination: {
            el: '#products-slider-pagination',
            type: 'bullets',
            clickable: 'false',
            dynamicBullets: false,
        },
    }) */
/*     const tabBtnsSlider = new Swiper('#tabs-buttons-slider', {
        direction: 'horizontal',
        loop: false,
        slidesPerView: 2.5,
        spaceBetween: 0,
        speed: 300,

        breakpoints: {
            1: {
                slidesPerView: 1.5,
                spaceBetween: 0
            },

            320: {
                slidesPerView: 999,
                spaceBetween: 0
            },
        },
    }) */
