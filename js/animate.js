const targets = document.querySelectorAll('[data-animation]')

const animationClass = 'animate'

function animeScroll(){
    const resultToAnyDeviceSize = window.innerHeight * 0.75
    const windowTop = window.scrollY + resultToAnyDeviceSize;
    targets.forEach(element => {
        if(windowTop >  element.offsetTop){
            element.classList.add(animationClass)
        } else {
            element.classList.remove(animationClass)
            
        }
    })
}
document.addEventListener('scroll', () => animeScroll());