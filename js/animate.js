const debounce = function(func, wait, immediate){
    let timeout;
    return function(...args){
        const context = this
        const later = function(){
            timeout = null;
            if(!immediate) func.apply(context,args);
        }
        const callNow = immediate && !timeout;
        clearTimeout(timeout)
        timeout = setTimeout(later,wait)
        if(callNow) func.apply(context, args)
    }
}

const targets = document.querySelectorAll('[data-animation]')

const animationClass = 'animate'

function animeScroll(){
    const resultToAnyDeviceSize = window.innerHeight * 0.85
    const windowTop = window.scrollY + resultToAnyDeviceSize;
    targets.forEach(element => {
        if(windowTop >  element.offsetTop){
            element.classList.add(animationClass)
        } else {
            element.classList.remove(animationClass)

        }
    })
}

window.addEventListener('scroll', () => debounce(animeScroll(), 200))