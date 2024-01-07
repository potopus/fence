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