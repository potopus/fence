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
        if (answerInput.checked){
            changeFlag = false;
        } else{
            changeFlag = true;
        }
        });
        answerInput.addEventListener('click', function () {
            if (!changeFlag) {
                closeOtherAccordions(answerInput);
            }else {
                answerInput.checked = true; // Добавлено для снятия с выбора при повторном клике
            }
        });
    });
    function closeOtherAccordions(clickedRadio) {
        answerInputs.forEach(function (radio) {
            if (radio == clickedRadio) {
                radio.checked=false;
            }
        });
    }
})

$(document).ready(function(){
    $('.slider-items').slick({
        // variableWidth: true,
        slidesToShow:3,
        prevArrow: "<div class='arrow-wrapper arrow__prev'><img src='../assets/img/svg/arrow-prev.svg' class='prev' alt='1'></div>",
    nextArrow: "<div class='arrow-wrapper arrow__next'><img src='../assets/img/svg/arrow-next.svg' class='next' alt='2'></div>",
    responsive:[
        {
            breakpoint:769,
            settings:{
                slidesToShow:2, 
            }
        },
        {
            breakpoint:500,
            settings:{
                slidesToShow:1, 
            }
        }
    ]
    });
  });