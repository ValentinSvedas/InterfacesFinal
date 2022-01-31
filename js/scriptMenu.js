let col1 = document.querySelector('.c1');
let col2 = document.querySelector('.c2');
let col3 = document.querySelector('.c3');
let col4 = document.querySelector('.c4');
let col5 = document.querySelector('.c5');
let col6 = document.querySelector('.c6');

window.addEventListener("DOMContentLoaded", function() {
    let imgBurg = document.querySelector('.H3');
    let titleH3 = document.querySelector('.titleH3');
    let textHam = document.querySelector('.textHam');
    let precio = document.querySelector('.precio');

    let imgBurg2 = document.querySelector('.H2');
    let titleH2 = document.querySelector('.titleH2');
    let textHam2 = document.querySelector('.textHam2');
    let precio2 = document.querySelector('.precio2');

    let imgBurg4 = document.querySelector('.H4');
    let titleH4 = document.querySelector('.titleH4');
    let textHam4 = document.querySelector('.textHam4');
    let precio4 = document.querySelector('.precio4');

    let imgBurg5 = document.querySelector('.H5');
    let titleH5 = document.querySelector('.titleH5');
    let textHam5 = document.querySelector('.textHam5');
    let precio5 = document.querySelector('.precio5');

    let imgBurg6 = document.querySelector('.H6');
    let titleH6 = document.querySelector('.titleH6');
    let textHam6 = document.querySelector('.textHam6');
    let precio6 = document.querySelector('.precio6');

    let imgBurg7 = document.querySelector('.H7');
    let titleH7 = document.querySelector('.titleH7');
    let textHam7 = document.querySelector('.textHam7');
    let precio7 = document.querySelector('.precio7');


    col1.addEventListener("mouseleave", function() {
        imgBurg.removeAttribute("class", "imgChange H3");
        titleH3.removeAttribute("class", "titleChange titleH3");
        textHam.style.opacity = 0;
        precio.style.opacity = 0;

    })
    col1.addEventListener("mouseenter", function() {
        imgBurg.setAttribute("class", "imgChange H3");
        titleH3.setAttribute("class", "titleChange titleH3");
        textHam.style.opacity = 1;
        precio.style.opacity = 1;
    })

    col2.addEventListener("mouseleave", function() {
        imgBurg2.removeAttribute("class", "imgChange");
        imgBurg2.setAttribute("class", "H2");

        titleH2.removeAttribute("class", "titleChange titleH2");
        textHam2.style.opacity = 0;
        precio2.style.opacity = 0;

    })

    col2.addEventListener("mouseenter", function() {
        imgBurg2.setAttribute("class", "imgChange H2");
        titleH2.setAttribute("class", "titleChange titleH2");
        textHam2.style.opacity = 1;
        precio2.style.opacity = 1;
    })
    col3.addEventListener("mouseleave", function() {
        imgBurg4.removeAttribute("class", "imgChange");
        imgBurg4.setAttribute("class", "H4");

        titleH4.removeAttribute("class", "titleChange titleH4");
        textHam4.style.opacity = 0;
        precio4.style.opacity = 0;

    })

    col3.addEventListener("mouseenter", function() {
        imgBurg4.setAttribute("class", "imgChange H4");
        titleH4.setAttribute("class", "titleChange titleH4");
        textHam4.style.opacity = 1;
        precio4.style.opacity = 1;
    })

    col4.addEventListener("mouseleave", function() {
        imgBurg5.removeAttribute("class", "imgChange");
        imgBurg5.setAttribute("class", "H5");

        titleH5.removeAttribute("class", "titleChange titleH5");
        textHam5.style.opacity = 0;
        precio5.style.opacity = 0;

    })

    col4.addEventListener("mouseenter", function() {
        imgBurg5.setAttribute("class", "imgChange H5");
        titleH5.setAttribute("class", "titleChange titleH5");
        textHam5.style.opacity = 1;
        precio5.style.opacity = 1;
    })

    col5.addEventListener("mouseleave", function() {
        imgBurg6.removeAttribute("class", "imgChange");
        imgBurg6.setAttribute("class", "H6");

        titleH6.removeAttribute("class", "titleChange titleH6");
        textHam6.style.opacity = 0;
        precio6.style.opacity = 0;

    })

    col5.addEventListener("mouseenter", function() {
        imgBurg6.setAttribute("class", "imgChange H6");
        titleH6.setAttribute("class", "titleChange titleH6");
        textHam6.style.opacity = 1;
        precio6.style.opacity = 1;
    })
    col6.addEventListener("mouseleave", function() {
        imgBurg7.removeAttribute("class", "imgChange");
        imgBurg7.setAttribute("class", "H7");

        titleH7.removeAttribute("class", "titleChange titleH7");
        textHam7.style.opacity = 0;
        precio7.style.opacity = 0;

    })

    col6.addEventListener("mouseenter", function() {
        imgBurg7.setAttribute("class", "imgChange H7");
        titleH7.setAttribute("class", "titleChange titleH7");
        textHam7.style.opacity = 1;
        precio7.style.opacity = 1;
    })


    let all = document.querySelector('.todo');
    let carne = document.querySelector('.carne');
    let pollo = document.querySelector('.pollo');

    all.addEventListener('click', function() {
        col1.style.display = 'block';
        col2.style.display = 'block';
        col3.style.display = 'block';
        col4.style.display = 'block';
        col5.style.display = 'block';
        col6.style.display = 'block';
    })
    carne.addEventListener('click', function() {
        col1.style.display = 'block';
        col2.style.display = 'block';
        col3.style.display = 'block';
        col4.style.display = 'none';
        col5.style.display = 'none';
        col6.style.display = 'none';

    })
    pollo.addEventListener('click', function() {
        col1.style.display = 'none';
        col2.style.display = 'none';
        col3.style.display = 'none';
        col4.style.display = 'block';
        col5.style.display = 'block';
        col6.style.display = 'block';

    })
})


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