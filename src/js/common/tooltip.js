"use strict"

const tooltip = document.querySelector('.tooltip-content')
tooltip.innerText = "HI"
document.querySelectorAll('.tooltip').forEach(t => {
    t.addEventListener('mouseenter', e => {
        const offset = 5
        tooltip.classList.add('active')
        tooltip.innerText = t.textContent

        const width = tooltip.getBoundingClientRect().width + 20 

        if(e.clientX + width > window.innerWidth){
            tooltip.style.left = e.pageX - width + offset + 'px'
            tooltip.style.top = e.pageY + offset + 'px'
        } else{
            tooltip.style.left = e.pageX + offset + 'px'
            tooltip.style.top = e.pageY + offset + 'px'
        }
    })
    t.addEventListener('mouseout', e => {
        tooltip.classList.remove('active')
    })

    window.addEventListener('resize', () =>  {
        tooltip.style.left = 0
        tooltip.style.top = 0
        
    });
})