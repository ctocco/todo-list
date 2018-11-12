// import Popper from "popper.js";
// window.jQuery = $;
// window.$ = $;

// require("bootstrap");

//in the form you are looking for event submit

let form = document.getElementById("addForm");

// This will turn all the items into an array

let itemList = document.getElementById("items");

// Form Submit event - take the form var and add event listner
//1. listen for submit event then make function addItem

// delete event
itemList.addEventListener("click", removeItem);

form.addEventListener("submit", addItem);

// Add item
function addItem(e) {
  e.preventDefault();

  // get input value from the input box basically
  // you want this info to add an item

  let newItem = document.getElementById("item").value;

  // create new li element. This creates an element without yet appending it to the DOM

  let li = document.createElement("li");

  // Add class

  li.className = "list-group-item";
  console.log(li);

  //Append the text that comes from the form (add text node with
  // input value

  li.appendChild(document.createTextNode(newItem));

  // create delete button element
  let deleteBtn = document.createElement("button");

  // add clsses to delete button

  deleteBtn.className = "btn btn-danger btn-sm float-right delete";

  deleteBtn.appendChild(document.createTextNode("X"));

  //Append button to li
  li.appendChild(deleteBtn);

  //Append li to the list.
  itemList.appendChild(li);
}

// Remove Item
function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure")) {
      //we want the parent li
      let li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}
