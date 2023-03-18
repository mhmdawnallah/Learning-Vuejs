const addGoalButtonElement = document.querySelector("button");
const inputElement = document.querySelector("input");
const listElement = document.querySelector("ul");

function addGoal() {
    const goal_input_value = inputElement.value;
    const listItemElement = document.createElement("li");
    listItemElement.textContent = goal_input_value;
    listElement.appendChild(listItemElement);
    inputElement.value = "";
}

addGoalButtonElement.addEventListener("click",addGoal);