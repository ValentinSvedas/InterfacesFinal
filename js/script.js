let h1 = document.querySelector(".ham1");
let h2 = document.querySelector(".ham2");
let h3 = document.querySelector(".ham3");

let h1posX = 950;
let h1posY = -330;
let h2posX = 100;
let h2posY = 0;
let h3posX = 910;
let h3posY = 40;
window.addEventListener('mousemove', e => {
    let mousemovementX = (e.clientX / 150);
    let mousemovementY = (e.clientY / 70);
    let mousemovementXh2 = (e.clientX / 200);
    let mousemovementYh2 = (e.clientY / 100);
    let mousemovementXh3 = (e.clientX / 350);
    let mousemovementYh3 = (e.clientY / 270);
    h1.style.left = (h1posX - mousemovementX) + "px";
    h1.style.top = (h1posY + mousemovementY) + "px";
    h2.style.left = (h2posX + mousemovementXh2) + "px";
    h2.style.top = (h2posY - mousemovementYh2) + "px";
    h3.style.left = (h3posX - mousemovementXh3) + "px";
    h3.style.top = (h3posY + mousemovementYh3) + "px";
});

var glide = new Glider(document.querySelector('.carousel__lista'), {
    type: 'slider',
    duration: 2,
    slidesToShow: 3,
    slidesToScroll: 1,
    rewind: true,
    dots: '.carousel__indicador',

    arrows: {
        prev: '.carousel__prev',
        next: '.carousel__next'
    }
});

window.addEventListener('load', function() {
    stopSlider();


})
var carouselActive = true;

function stopSlider() {
    var elem = document.querySelector('.carousel__content');
    var titulo3 = document.querySelector('.titulo3');
    sliderAuto(glide, 2500)


    titulo3.addEventListener('mousemove', e => {
        var posX = e.clientX;
        var posY = e.clientY;

        if (isInsideContent(titulo3.getBoundingClientRect, posX, posY)) {
            this.carouselActive = true;
            sliderAuto(glide, 2500)

        }
    })

    elem.addEventListener('mousemove', e => {
        var posX = e.clientX;
        var posY = e.clientY;

        if (isInsideContent(elem.getBoundingClientRect, posX, posY)) {
            this.carouselActive = false;

        }
    })


}

function isInsideContent(a, posX, posY) { //Comprueba la colicion de objetos
    return !(
        ((a.y + a.height) - 8 < (posY + 10)) ||
        (a.y > (posY)) ||
        ((a.x + a.width) < posX) ||
        (a.x > (posX) - 70)
    );
}


function sliderAuto(slider, miliseconds) {
    slider.isLastSlide = function() {
        return slider.page >= slider.dots.childElementCount - 1;
    }

    var slide = function() {
        slider.slideTimeout = setTimeout(function() {

            if (carouselActive == true) {
                slider.scrollItem(slideTo(), true);

                function slideTo() {
                    return slider.isLastSlide() ? 0 : slider.page + 1;
                }
            }
        }, miliseconds);
    }

    slider.ele.addEventListener('glider-animated', function(event) {
        window.clearInterval(slider.slideTimeout);
        slide();
    });

    slide();
}

let menuHover = document.querySelector('.menuBHover');
let menuBurg = document.querySelector('.menuBur');

menuBurg.addEventListener('mouseenter', function() {
    menuHover.style.display = 'block';
    menuBurg.style.display = 'none';
})
menuHover.addEventListener('mouseleave', function() {
    menuHover.style.display = 'none';
    menuBurg.style.display = 'block';
})
let opcionesM = document.querySelector('.opcionesM')
menuHover.addEventListener('click', function() {
    opcionesM.style.userSelect = 'all';

    opcionesM.style.opacity = 1;
})
opcionesM.addEventListener('mouseleave', function() {
    opcionesM.style.userSelect = 'none';
    opcionesM.style.opacity = 0;
})

let inicioBtn = document.querySelector('.inicioBtn')
let menuBtn = document.querySelector('.menuBtn')
let promosBtn = document.querySelector('.promosBtn')

inicioBtn.addEventListener('click', function() {
    window.scrollTo(0, 0);
})
menuBtn.addEventListener('click', function() {
    window.scrollTo(0, 690);
})
promosBtn.addEventListener('click', function() {
    window.scrollTo(0, 1380);
})

window.addEventListener('scroll', function() {
    let menubotn = document.querySelector('.menubotn')
    let titulo2 = document.querySelector('.titulo2')

    let postitulo2 = titulo2.getBoundingClientRect().top
    let tamPantalla = window.innerHeight / 3;
    console.log(tamPantalla);

    if (postitulo2 < tamPantalla) {
        menubotn.style.animation = 'opacity0to1 2s forwards'
        titulo2.style.animation = 'opacity0to1 2s forwards'
    }


})