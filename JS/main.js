// calling the elements
let childDiv = document.getElementById("child");
let result = document.getElementById("result");
let addTask = document.getElementById("task");
let btnAdd = document.getElementById("btn-add");
let btnClear = document.getElementById("btn-clear");
// ##################################################



// take the value from the input task
function myTasks () {
    btnAdd.addEventListener("click", function () {
        if (addTask.value === "") {
            event.preventDefault();
        } else {
            const uniqeKey = `task-${Date.now()}`;
            window.localStorage.setItem(uniqeKey, addTask.value);
            printTasks();
        } 
    }); 
};

function printTasks () { 
    result.innerHTML = "";
    for (let i = 0; i < localStorage.length; i++) {
        // create Elements 
        let divCont = document.createElement("div");
        let divBtn = document.createElement("div");
        let viewData = document.createElement("p");
        let btnDone = document.createElement("button");
        let btnDelete = document.createElement("button");

        // Styling Elements 
        divCont.style.cssText = `padding:5px; 
        margin-bottom:10px;
        background-color: #ddd; 
        display:flex;
        justify-content:space-between;
        padding:10px;
        border-radius:3px;`;

        btnDone.style.cssText =`
        width: 100px;
        border: none;
        outline: none;
        padding: 5px;
        background-color: green;
        color: white;
        border-radius: 3px;
        `;
        btnDone.innerHTML = `Done`;

        btnDelete.style.cssText =`
        width: 100px;
        border: none;
        outline: none;
        padding: 5px;
        background-color: red;
        color: white;
        border-radius: 3px;
        `;
        btnDelete.innerHTML = `Delete`;

        
        btnDone.addEventListener("click", function () {
            divCont.style.cssText = `
            padding:5px; 
            margin-bottom:10px;
            background-color: #ddd; 
            display:flex;
            justify-content:space-between;
            padding:10px;
            border-radius:3px;
            text-decoration: line-through;`
        }); 

        
        let key = localStorage.key(i);
        let value = localStorage.getItem(key);
        viewData.innerHTML = `${1 + i} - ${value}`;
        // this btn to remove the task item from the localStoreage&Tasks
        btnDelete.addEventListener("click", function () {
            window.localStorage.removeItem(key);
            divCont.remove();
        }); 

        divCont.appendChild(viewData);
        divBtn.appendChild(btnDone);
        divBtn.appendChild(btnDelete);
        divCont.appendChild(divBtn);
        result.appendChild(divCont);
    }
    addTask.value = ""; 
}

myTasks();
printTasks();

btnClear.addEventListener("click" , function () {
    window.localStorage.clear();
    printTasks();
});