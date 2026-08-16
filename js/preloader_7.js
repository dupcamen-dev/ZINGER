
//STICHFEST REDESIGN: the loading screen (percent counter) is gone.
//Content shows immediately with a short 0.4s fade of <main>.
document.addEventListener('DOMContentLoaded', () => {

    //if isset mods change color preloader
    if(document.querySelector('.mod-scroll__intro.bg-black') || document.querySelector('.mod-header--proyecto')){
        smoothWrapper.classList.add('bg-black')
    }

    //hide loader ui
    const progress_bar = document.querySelector('.loader__progress');
    const progress_number = document.querySelector('.loader__percent');
    if(progress_bar) progress_bar.style.display = 'none';
    if(progress_number) progress_number.style.display = 'none';

    gsap.set('body',{opacity:1})

    //init site, then fade main in quickly
    setTimeout(() => {
        init()
        if(main) gsap.fromTo(main,{opacity:0},{opacity:1,duration:.4,ease:'power1.out'})
    }, 60)
})
