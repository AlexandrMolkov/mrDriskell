import {burgInit, burgResize} from './burger.js'
//import anime from 'animejs/lib/anime.es.js';
import '../libs/inputmask.js'
import AOS from 'aos';

document.addEventListener('DOMContentLoaded', () => {

    document.querySelectorAll('[data-background]').forEach( el => {
        console.log(el.dataset.background)
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



    //  Catalog btn
    document.querySelector('.btn-catalog').addEventListener('click', e => {
        e.target.closest('.btn-catalog').classList.toggle('open')
       document.querySelector(e.target.closest('.btn-catalog').dataset.target)
            .classList.toggle('header__catalog_active',
                e.target.closest('.btn-catalog').classList.contains('open')
            )
    })


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
  

    document.querySelectorAll('.filter-checkbox').forEach(cb =>{

        if(cb.querySelector('input').checked) {
            cb.classList.add('active')
        }

        cb.addEventListener('click', e => {
            if(e.target.classList.contains('active')) {
                e.target.querySelector('input').checked = false
            } else {
                e.target.querySelector('input').checked = true
            }
            e.target.classList.toggle('active')
        })

        /* if(cb.classList.contains('active')){
            cb.querySelector('input')
        } */
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

})




