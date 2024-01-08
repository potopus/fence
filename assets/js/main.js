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
})