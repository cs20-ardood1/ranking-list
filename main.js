// RANKING LIST START CODE

// HTML Variables
let outputEl = document.getElementById("output");

// Global Variables
let rankingList = [];

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Get Menu Selection
  let selection = document.getElementById("menu").value;

  // Implement Menu Selection
  if (selection === "add") {
    addItem();
  } else if (selection === "remove-last") {
    removeLast();
  } else if (selection === "insert") {
    insert();
  } else if (selection === "remove-pos") {
    removePos();
  } else if (selection === "move") {
    move();
  } else if (selection === "edit") {
    edit();
  }

  printList();
}

// Menu Option Functions
function addItem() {
  let newItem = prompt("Enter the item to add:");
  if (newItem) {
    rankingList.push(newItem);
  }
}

function removeLast() {
  rankingList.pop();
}

function insert() {
  let position = prompt("Insert Position:");
  if (position >= 1 && position <= rankingList.length + 1) {
    let insert = prompt("Item to Insert:");
    if (insert) {
      rankingList.splice(position - 1, 0, insert);
    }
  } else {
    alert("Invalid position.");
  }
}

function removePos() {
  let position = prompt("Position to remove:");
  if (position >= 1 && position <= rankingList.length) {
    if (position) {
      rankingList.splice(position - 1, 1);
    }
  } else {
    alert("Invalid position.");
}
}

function move() {
  let moveFromIndex = prompt("Move item from");
  let moveToIndex = prompt("Move item to:");
  if (
    moveToIndex >= 1 &&
    moveToIndex <= rankingList.length &&
    moveFromIndex >= 1 &&
    moveFromIndex <= rankingList.length
  ) {
    let itemMove = rankingList[moveFromIndex - 1];
    rankingList.splice(moveFromIndex - 1, 1);
    rankingList.splice(moveToIndex - 1, 0, itemMove);
  } else {
    alert("Invalid position.");
  }
}

function edit() {
  let position = prompt("Enter position:");
  if (position >= 1 && position <= rankingList.length) {
    let replace = prompt("Replace with:");
    if (replace) {
      rankingList[position - 1] = replace;
    }
  } else {
    alert("Invalid position");
  }
}

function printList() {
  outputEl.innerHTML = "";
  for (let i = 0; i < rankingList.length; i++) {
    outputEl.innerHTML += `<div>${i + 1}: ${rankingList[i]}</div>`;
  }
}
