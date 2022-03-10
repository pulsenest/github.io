// меню гамбургер
const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});


closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

//слайдер первой секции
const slides = document.querySelector('.promo__slide-bg'),
    prev = document.querySelector('.promo__slider-left'),
    next = document.querySelector('.promo__slider-right'),
    dats = document.querySelectorAll('.promo__slider-dat'),
    slidesBg = document.querySelector('.promo__slider-bg'),
    slidesField = document.querySelector('.promo__slider-inner');


let slideIndex = 1;
let offset = 0;

showDat(offset);

next.addEventListener('click', () => {
    if (offset == 75) {
        offset = 0;
    }
    else {
        offset += 25;
    }
    showDat(offset);
    slidesField.style.transform = `translateX(-${offset}%)`
});

prev.addEventListener('click', () => {
    if (offset == 0) {
         offset = 75;
    }
    else {
        offset -= 25;
    }
    showDat(offset);
    slidesField.style.transform = `translateX(-${offset}%)`;
    
})


function showDat(offset) {
    slideIndex = offset/25;
    dats.forEach(item => item.classList.remove('active'));
    dats[slideIndex].classList.add('active');
    
}



    


    