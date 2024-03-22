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
    }
}