// Variables
const textBox = document.getElementById("text-box");
const listContainer = document.getElementById("list-container");

function addItem() {
    if(textBox.value === "") {
        alert("Please enter a task for your list");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = textBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    textBox.value = "";
    saveList();
}


// Check marked tasks and delete if clicked
listContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveList();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveList();
        }
}, false);

// Keep list populated when page is refreshed
function saveList() {
    localStorage.setItem("list", listContainer.innerHTML);
}

function showList() {
    listContainer.innerHTML = localStorage.getItem("list");
}
showList();