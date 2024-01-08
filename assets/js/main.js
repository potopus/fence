let tableNames = document.querySelectorAll(".table-name-list .table-name");
let tableBodies = document.querySelectorAll(".table-body .table-body__wrapper");

if (tableNames) {
    tableNames.forEach(tableName => {
        tableName.addEventListener("click", () => {
            if (!tableName.classList.contains("active")) {
                tableNames.forEach(element => {
                    element.classList.remove("active");
                });
                tableBodies.forEach(element => {
                    element.classList.remove("active");
                    if(element.classList.contains(tableName.id)){
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

burgerIcon.addEventListener('change', ()=>{

    if (burgerIcon.checked){
        menu.classList.add("header-menu__active");
        document.body.classList.add("lock");
    }else{
        menu.classList.remove("header-menu__active");
        document.body.classList.remove("lock");
        
    }
});

menu.addEventListener("click", function () {
    if (burgerIcon.checked) {
        menu.classList.remove("header-menu__active");
        document.body.classList.remove("lock");
        burgerIcon.checked = false;
    }
});

var firstElements = document.querySelectorAll('.on_mobile .ah2');

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