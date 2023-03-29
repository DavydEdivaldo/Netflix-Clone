$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})


const btn = document.getElementById('idbotao');
btn.addEventListener('click', function(){
    btn.classList.toggle('active');
})




