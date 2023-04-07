import {burgInit, burgResize} from './burger.js'
//import anime from 'animejs/lib/anime.es.js';
import '../libs/inputmask.js'
import AOS from 'aos';
import Choices from "choices.js"
import Ellipsis from 'ellipsis.js'
import { Fancybox, Panzoom } from "@fancyapps/ui";

Fancybox.bind("[data-fancybox]", {
    hideScrollbar: false,
});


if(document.getElementById("myPanzoom")) {
    const zoom = new Panzoom(document.getElementById("myPanzoom"), { click: "iterateZoom", dblClick: "toggleCover", panMode: "mousemove", panOnlyZoomed: false });

        window.addEventListener('resize', () =>  {
            document.querySelector('.panz').style.cssText = `
                width: 100%;
                height: auto;
            `
            
        });

}



/* document.getElementById("myPanzoom").addEventListener("click", () => {
    zoom.flipX();
  }); */


document.addEventListener('DOMContentLoaded', () => {

    Ellipsis({
        lines: 3
      })

    document.querySelectorAll('[data-background]').forEach( el => {
        el.style.backgroundImage = `url(${el.dataset.background})`
    })


    document.querySelectorAll('.btn').forEach( btn => {

        if(!btn.classList.contains('btn_cat')) {
            const decL = document.createElement('span')
            decL.classList.add('btn__dec-left')
            btn.append(decL)
            const decR = document.createElement('span')
            decR.classList.add('btn__dec-right')
            btn.append(decR)
        }

    } )

    
    // account popup

    document.querySelectorAll('.btn-account').forEach( btn => {
        btn.addEventListener('click', e =>{
            document.querySelector('.popup-account').classList.add('active')
            document.body.classList.add(`lock`)
        })
    })

    document.querySelectorAll('.popup__close-btn').forEach(btn => {
        btn.addEventListener('click', e => {
            let popup
            const f = (target) => {
                if(target.parentNode.classList.contains('popup')) popup = target.parentNode
                else{
                    f(target.parentNode)
                }
            }
            f(e.target)
            popup.classList.remove('active')
            document.body.classList.remove(`lock`)
        })
    })

    document.querySelector('#getcode')?.addEventListener('click', () => {
            document.querySelector('.popup__inner.code').classList.add('active')
    })





    // filter mobile button

    document.querySelector('.catalog-page__filter-btn')?.addEventListener('click', () => {
        document.querySelector('.catalog-page__filter-mobile').classList.add('active')
        document.querySelector('header').classList.add('back')
        document.body.classList.add('lock')
    })

    document.querySelector('#closefilter')?.addEventListener('click', () => {
        document.querySelector('.catalog-page__filter-mobile').classList.remove('active')
        document.querySelector('header').classList.remove('back')
        document.body.classList.remove('lock')
    })






    //  add to cart
    document.addEventListener('click', e => {
        if(e.target.classList.contains('product-card__btn-add')) {
            let card
            const f = (target) => {
                if(target.parentNode.classList.contains('product-card')) card = target.parentNode
                else{
                    f(target.parentNode)
                }
            }
            f(e.target)
            card.classList.add('added')
        }
    })


    //  Catalog btn
    document.querySelector('.btn-catalog').addEventListener('click', e => {
        e.target.closest('.btn-catalog').classList.toggle('open')
       document.querySelector(e.target.closest('.btn-catalog').dataset.target)
            .classList.toggle('active', e.target.closest('.btn-catalog').classList.contains('open'))
    })

/*     document.addEventListener('click', e => {
        const btn = document.querySelector('.btn-catalog')
        if(!e.target.classList.closest('btn-catalog')) {
            btn.classList.remove('open')
            document.querySelector(btn.dataset.target).classList.remove('open')
        }
    }) */


    //  smooth scroll
    const anchors = document.querySelectorAll('a[href*="#"]')
    for (let anchor of anchors) {
            anchor.addEventListener('click', function (e) {
            e.preventDefault()
        
            const blockID = anchor.getAttribute('href').substring(1)
            if(document.getElementById(blockID)) {
                document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
                })
            }
        })
    }


    // burger
    burgInit()



    // product gallery
        document.querySelectorAll('.product-gallery-thumb').forEach( th => {
            th.addEventListener('click', () => {
                const main = document.querySelector('.product-gallery-main')
                main.src = th.dataset.src
                main.classList.remove('animopacity')

                setTimeout(() => {
                    main.classList.add('animopacity')
                }, 0);
                
                
            })
        })




    window.addEventListener('resize', () =>  {
        document.body.classList.remove(`lock`)
        burgResize()
    });



    /////////////////////  js-choice

    if(document.querySelector('.js-choice-type')){
        const element = document.querySelector('.js-choice-type');
        const choices = new Choices(element,{
        searchEnabled: false,
        itemSelectText: '',
        });
    }
    if(document.querySelector('.js-choice-sort')){
        const element = document.querySelector('.js-choice-sort');
        const choices = new Choices(element,{
        searchEnabled: false,
        itemSelectText: '',
        });
    }
    if(document.querySelector('.js-choice-type-mobile')){
        const element = document.querySelector('.js-choice-type-mobile');
        const choices = new Choices(element,{
        searchEnabled: false,
        itemSelectText: '',
        });
    }
    if(document.querySelector('.js-choice-sort-mobile')){
        const element = document.querySelector('.js-choice-sort-mobile');
        const choices = new Choices(element,{
        searchEnabled: false,
        itemSelectText: '',
        });
    }
  


    // filter checkbox
    document.querySelectorAll('.filter-checkbox').forEach( cb =>{

        if(cb.querySelector('input').checked) {
            cb.classList.add('active')
        }

        cb.addEventListener('click', e => {
            if(cb.classList.contains('active')) {
                cb.querySelector('input').checked = false
            } else {
                cb.querySelector('input').checked = true
            }
            cb.classList.toggle('active')
        })
    })


    ///////// input mask

    const inputTel = document.querySelector('input[type="tel"]')
    const maskTel = new Inputmask('+7 (999) 999-99-99')
    if(inputTel) maskTel.mask(inputTel)



    ////////// animations
    
    AOS.init();





    ////////// menu
    const closeAllSubMenu = (current = null) => {
        const parents = []
        if(current){
            let currentParent = current.parentNode
            while(currentParent) {
                if (currentParent.classList.contains('root-nav')) break
                if(currentParent.nodeName === 'UL') parents.push(currentParent)
                currentParent = currentParent.parentNode
            }
        }
    
        const subMenus = document.querySelectorAll('.root-nav ul')
        Array.from(subMenus).forEach(item => {
            if(item != current && !parents.includes(item)) item.classList.remove('sub-menu-active')
        })
    }
    
    document.querySelector('.root-nav').addEventListener('click', (e) => {
        if(e.target.nodeName !== 'SPAN') return
        closeAllSubMenu(e.target.nextElementSibling)
        e.target.nextElementSibling.classList.toggle('sub-menu-active')
    })




    
const cards = document.querySelectorAll('.card3d')

cards.forEach((c) => {
    const cardWrapper = c.querySelector('.card3d-wrapper')

    let deg = 6
    let tr = '0.1s'
    


    c.addEventListener('mousemove', (e) => {
        let h = c.clientHeight / (deg * 2)
        let w = c.clientWidth / (deg * 2)
        h = -h; w = -w
    
        let x = ((e.clientY - c.getBoundingClientRect().y) / h) + deg
        let y = ((e.clientX - c.getBoundingClientRect().x) / w) + deg
        y *= -1
        cardWrapper.style.transform = `rotateX(${x}deg) rotateY(${y}deg)`
        cardWrapper.style.transition = `${tr}s linear`
    })

    c.addEventListener('mouseleave', () => cardWrapper.style.transform = `rotateX(0deg) rotateY(0deg)`)
})


})




