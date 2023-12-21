let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')

})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')

})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')

})

//Scroll REVEAL//
window.revelar = ScrollReveal({reset:true})

//TOPO DO SITE//
revelar.reveal('.efeito-txt-topo',{
    duration: 1000,
    distance: '90px'

})

revelar.reveal('.efeito-img-topo',{
    duration: 1000,
    distance: '90px',
    delay: 500

})

//TITULO DAS SESSÕES//
revelar.reveal('.titulo',{
    duration: 1000,
    distance: '90px'

})

//SESSÃO DE ESPECIALIDADES//
revelar.reveal('.efeito-especial1',{
    duration: 1000,
    distance: '90px',
    delay: 500
})

revelar.reveal('.efeito-especial2',{
    duration: 1000,
    distance: '90px',
    delay: 1000
})

revelar.reveal('.efeito-especial3',{
    duration: 1000,
    distance: '90px',
    delay: 1500
})

//TEXTO DO SOBRE//
revelar.reveal('.efeito-img-sobre',{
    duration: 1000,
    distance: '90px',
    delay: 500,
    origin: 'left'
})

revelar.reveal('.efeito-txt-sobre',{
    duration: 1000,
    distance: '90px',
    delay: 1000,
    origin: 'right'
})

//SESSÃO DE IMAGENS DO PORTIFÓLIO//
revelar.reveal('.efeito-img1',{
    duration: 1000,
    distance: '90px',
    delay: 500,
    origin: 'left'
})

revelar.reveal('.efeito-img2',{
    duration: 1000,
    distance: '90px',
    delay: 1000,
    origin: 'bottom'
})

revelar.reveal('.efeito-img3',{
    duration: 1000,
    distance: '90px',
    delay: 1500,
    origin: 'right'
})







//SESSÃO DE IMAGENS DO FORMULÁRIO//
revelar.reveal('.efeito-input1',{
    duration: 1000,
    distance: '90px',
    delay: 500,
    origin: 'top'
})
revelar.reveal('.efeito-input2',{
    duration: 1000,
    distance: '90px',
    delay: 750,
    origin: 'left'
})
revelar.reveal('.efeito-input3',{
    duration: 1000,
    distance: '90px',
    delay: 1000,
    origin: 'right'
})
revelar.reveal('.efeito-input4',{
    duration: 1000,
    distance: '90px',
    delay: 1250,
    origin: 'bottom'
})
revelar.reveal('.efeito-input5',{
    duration: 1000,
    distance: '90px',
    delay: 1500,
    origin: 'bottom'
})



