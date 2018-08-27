/* window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
}; */


let price = document.getElementById("price");
let itemTotal = document.getElementById("item-total");

var calcPricesButton = document.getElementById("calc-prices");

//Retrive  only the number form the price string
function getNumber(string) {
  return parseFloat(string.split("$")[1]);
}

function calcPrices(number) {
  let quantity = Number(document.getElementById("quantity-" + number).value);
  let price = getNumber(document.getElementById("price-" + number).innerHTML);
  let priceXQuant = (quantity * price).toFixed(2);
  document.getElementById("item-total-" + number).innerHTML = "$" + priceXQuant;
  return priceXQuant;
}

// Calculate prices when Cal Prices button is clicked
document.getElementById("calc-prices").addEventListener("click", () => {
  let itemsArray = document.getElementsByClassName("item");
  let finalAmount = 0;
  for (let i = 1; i<=itemsArray.length; i++) {
    finalAmount += Number(calcPrices(i));
  };
  document.getElementById("total-amount").innerHTML = "$" + finalAmount.toFixed(2);
})


// All this is for DELETE BUTTONS
// Deletes an item from the page
function deleteItem(number){
  document.getElementById("items-container").removeChild(document.getElementById(number));
}

// test select all delete buttons
window.onload = function() {
  let deleteButtonList = document.getElementsByClassName("delete-button");
  for (let i = 0; i < deleteButtonList.length; i++) {
    deleteButtonList[i].addEventListener("click", ()=>{
      deleteItem(i+1);
    })
  }
}

//create a new item
document.getElementById("createbut").addEventListener("click", () => {
  let container = document.getElementById("items-container");
  let lastNumber = document.getElementsByClassName("item").length + 1;
  let newItem = document.createElement("div");
  newItem.classList.add("item");
  newItem.id = lastNumber;
  // item-name-div
  let itemNameDiv = document.createElement("div");
  itemNameDiv.classList.add("item-name");
  itemNameDiv.innerHTML = '<span>' + document.getElementById("item-name").value + '</span>';
  newItem.appendChild(itemNameDiv);
  // cost-div
  let costDiv = document.createElement("div");
  costDiv.classList.add("cost");
  costDiv.innerHTML = '<span id=price-' + lastNumber + '>$' + document.getElementById("item-price").value + '</span>';
  newItem.appendChild(costDiv);
  //qty div
  let qtyDiv = document.createElement("div");
  qtyDiv.classList.add("qty");
  qtyDiv.innerHTML = '<label for="quantity">QTY</label><input type="number" id="quantity-' + lastNumber + '" placeholder="0">';
  newItem.appendChild(qtyDiv);
  // subtotal div
  let subDiv = document.createElement("div");
  subDiv.classList.add("subtotal");
  subDiv.innerHTML = '<span id="item-total-' + lastNumber + '">$0.00</span>';
  newItem.appendChild(subDiv);
  //delete button
  let deleteButt = document.createElement("div");
  deleteButt.classList.add("delete");
  deleteButt.innerHTML = '<a href="#" class="delete-button" id="delete-button-' + lastNumber + '">Delete</a>';
  newItem.appendChild(deleteButt);
  container.appendChild(newItem);

  document.getElementById("delete-button-" + lastNumber).addEventListener("click", ()=>{
    deleteItem(lastNumber);
  })
})

/*
function letsee() {
  let container = document.getElementById("items-container");
  let lastNumber = document.getElementsByClassName("item").length + 1;
  let newItem = document.createElement("div");
  newItem.classList.add("item");
  newItem.id = lastNumber;
  // item-name-div
  let itemNameDiv = document.createElement("div");
  itemNameDiv.classList.add("item-name");
  itemNameDiv.innerHTML = '<span>' + document.getElementById("item-name").value + '</span>';
  newItem.appendChild(itemNameDiv);
  // cost-div
  let costDiv = document.createElement("div");
  costDiv.classList.add("cost");
  costDiv.innerHTML = '<span id=price-' + lastNumber + '>$' + document.getElementById("item-price").value + '</span>';
  newItem.appendChild(costDiv);
  //qty div
  let qtyDiv = document.createElement("div");
  qtyDiv.classList.add("qty");
  qtyDiv.innerHTML = '<label for="quantity">QTY</label><input type="number" id="quantity-' + lastNumber + '" placeholder="0">';
  newItem.appendChild(qtyDiv);
  // subtotal div
  let subDiv = document.createElement("div");
  subDiv.classList.add("subtotal");
  subDiv.innerHTML = '<span id="item-total-' + lastNumber + '">$0.00</span>';
  newItem.appendChild(subDiv);
  //delete button
  let deleteButt = document.createElement("div");
  deleteButt.classList.add("delete");
  deleteButt.innerHTML = '<a href="#" class="delete-button" id="delete-button-' + lastNumber + '">Delete</a>';
  newItem.appendChild(deleteButt);
  container.appendChild(newItem);

  document.getElementById("delete-button-" + lastNumber).addEventListener("click", ()=>{
    deleteItem(lastNumber);
  });

}*/
