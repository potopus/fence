let tableNames = document.querySelectorAll(".table-name-list .table-name");
let tableBodies = document.querySelectorAll(".table-body .table-body__wrapper");
let answerInputs = document.querySelectorAll(".accordion__item .ac-radio");

if (tableNames) {
    tableNames.forEach(tableName => {
        tableName.addEventListener("click", () => {
            if (!tableName.classList.contains("active")) {
                tableNames.forEach(element => {
                    element.classList.remove("active");
                });
                tableBodies.forEach(element => {
                    element.classList.remove("active");
                    if (element.classList.contains(tableName.id)) {
                        element.classList.add("active");
                    }
                });
                tableName.classList.add("active");
            }
        })
    });
}

// burger

let burgerIcon = document.querySelector("#check-menu");
let menu = document.querySelector(".header-menu");
let lebelBurger = document.querySelector(".label-burger");

burgerIcon.addEventListener('change', () => {

    if (burgerIcon.checked) {
        menu.classList.add("header-menu__active");
        document.body.classList.add("lock");
        document.documentElement.classList.add("lock");
    } else {
        menu.classList.remove("header-menu__active");
        document.body.classList.remove("lock");
        document.documentElement.classList.remove("lock");


    }
});

menu.addEventListener("click", function () {
    if (burgerIcon.checked) {
        menu.classList.remove("header-menu__active");
        document.body.classList.remove("lock");
        document.documentElement.classList.remove("lock");
        burgerIcon.checked = false;
    }
});

let firstElements = document.querySelectorAll('.mobile-table .ah2');

// Добавляем слушатель события click для каждого элемента "first"
firstElements.forEach(function (firstElement) {
    firstElement.addEventListener('click', function () {
        // Находим следующий элемент с классом "second"
        var nextSecondElement = firstElement.nextElementSibling;
        console.log("click");
        console.dir(nextSecondElement);

        // Проверяем, существует ли следующий элемент с классом "second"
        if (nextSecondElement && nextSecondElement.classList.contains('hide')) {
            // Добавляем класс "active" к следующему элементу "second"
            console.log("exist");
            firstElement.classList.toggle('active');
            nextSecondElement.classList.toggle('active');
        }
    });
});

// добавляем слушатель на input для закрытия аккордеона
document.addEventListener('DOMContentLoaded', function () {
    answerInputs.forEach(function (answerInput) {
        let changeFlag = false;
        answerInput.addEventListener('mouseup', function () {
            if (answerInput.checked) {
                changeFlag = false;
            } else {
                changeFlag = true;
            }
        });
        answerInput.addEventListener('click', function () {
            if (!changeFlag) {
                closeOtherAccordions(answerInput);
            } else {
                answerInput.checked = true; // Добавлено для снятия с выбора при повторном клике
            }
        });
    });
    function closeOtherAccordions(clickedRadio) {
        answerInputs.forEach(function (radio) {
            if (radio == clickedRadio) {
                radio.checked = false;
            }
        });
    }
})

$(document).ready(function () {
    if ($('.slider-items')) {
        $('.slider-items').slick({
            // variableWidth: true,
            slidesToShow: 3,
            prevArrow: "<div class='arrow-wrapper arrow__prev'><img src='./assets/img/svg/arrow-prev.svg' class='prev' alt='1'></div>",
            nextArrow: "<div class='arrow-wrapper arrow__next'><img src='./assets/img/svg/arrow-next.svg' class='next' alt='2'></div>",
            responsive: [
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
    }
});

//   init swiper

const swiper = new Swiper('.slider-block .swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 10,



    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
        },
        // when window width is >= 480px
        500: {
            slidesPerView: 2,
            centeredSlides: false,
        },
        // when window width is >= 640px
        768: {
            slidesPerView: 3,
        }
    },
});

const slides = document.querySelectorAll(".swiper-inner .slider-item");
let currentSlideIndex = 0;
let currentSlidesPerView = 0;

const galeryClose = () => {
    let closeBtn = document.querySelector(".close-btn");
    closeBtn.addEventListener("click", () => {
        document.querySelector(".swiper-inner").classList.remove("swiper__full-screen");

        // Возвращаем slidesPerView к начальному значению согласно текущему брейкпоинту
        swiper.update();
        console.log("close");
        console.log("currentSlidesPerView " + currentSlidesPerView);
         console.log("swiper.params.realIndex " + swiper.realIndex);
        swiper.params.slidesPerView = currentSlidesPerView;
        // swiper.params.centeredSlides = false;
        swiper.update();
        swiper.slideToLoop(swiper.realIndex, 0, true);
        // swiper.params.observeParents = true;
        // swiper.params.observeSlideChildren = true;
        // swiper.params.preloadImages = 5;
        // swiper.params.slidesPerView = 3;
        swiper.update();
       
        // setTimeout(() => {
        //     swiper.update();
        //     swiper.updateSlides();
        //     swiper.updateProgress();
        // })
    });
}

if (slides.length > 0) {
    slides.forEach(slide => {
        slide.addEventListener("click", (e) => {
            if (!document.querySelector(".swiper-inner").classList.contains("swiper__full-screen")) {
                let clickedSlide = e.target.closest('.swiper-slide');
                // Сохранение текущего индекса слайда
                currentSlidesPerView = swiper.params.slidesPerView;
                swiper.update();
                // console.log("swiper.clickedIndex " + swiper.clickedIndex);
                console.log(" slidesPerView; " + currentSlidesPerView);
                // currentSlideIndex = clickedSlide.swiper.slideIndex;
                let clickedSlideIndex = swiper.getSlideIndex(clickedSlide);
                document.querySelector(".swiper-inner").classList.add("swiper__full-screen");
                swiper.params.slidesPerView = 1;
                swiper.params.initialSlide = 1,
                    // console.log(clickedSlideIndex);
                    // Установка активного слайда после обновления
                    swiper.params.initialSlide = clickedSlideIndex;
                swiper.update();

                swiper.slideTo(clickedSlideIndex, 0, true);
                swiper.slidesPerViewDynamic();
                swiper.update();
                swiper.updateSlides();
                swiper.update();
                swiper.updateProgress();
                swiper.update();
                setTimeout(() => {
                    swiper.update();
                    galeryClose();
                })
            }
        });

    });
}