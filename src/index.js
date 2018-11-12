// import Popper from "popper.js";
// window.jQuery = $;
// window.$ = $;

// require("bootstrap");

console.log("hello");

//in the form you are looking for event submit

let form = document.getElementById("addForm");

// This will turn all the items into an array

let itemList = document.getElementById("items");

// Form Submit event -

form.addEventListener("submit", addItem);

// Add item
function addItem(e) {
  e.preventDefault();

  // get input value from the input box basically
  // you want this info to add an item

  let newItem = document.getElementById("item").value;

  // create new li element

  let li = document.createElement("li");

  // Add class

  li.className = "list-group-item";
  console.log(li);

  //Append the text that comes from the form (add text node with
  // input value

  li.appendChild(document.createTextNode(newItem));

  itemList.appendChild(li);
}
