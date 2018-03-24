

var deleteButtons = document.querySelectorAll(".item button");

deleteButtons.forEach(function (oneButton) {
  oneButton.onclick = function () { 
    var item = oneButton.parentNode;
    item.innerHTML = "";
  }
});

var addBtn = document.getElementById("add-button");

addBtn.onclick = function () {
  
  var item = document.createElement("div");
  item.id = "content";
  item.className = "item";


  var inputProductName = document.getElementById("new-product-name");
  
  var productName = document.createElement("div");
  productName.className = "product-name";
  productName.innerText = inputProductName.value;

  item.appendChild(productName);

  var inputCost = document.getElementById("new-product-cost");

  var cost = document.createElement("div");
  cost.className = "cost";
  cost.innerText = parseFloat(inputCost.value);
  item.appendChild(cost);

  var wrap = document.createElement("div");
  wrap.className = "quantity-wrap";
  item.appendChild(wrap);

  var qty = document.createElement("label");
  qty.innerText = "Qty";
  wrap.appendChild(qty);

  var input = document.createElement("input");
  input.className = "quantity";
  input.type = "text";
  input.value = "0";
  wrap.appendChild(input);

  var total = document.createElement("div");
  total.className = "item-total";
  total.innerText = "0.00€";
  item.appendChild(total);

  var del = document.createElement("button");
  del.className = "btn-delete btn";
  del.innerText = "Delete"
  del.onclick = function () { 
    var item = del.parentNode;
    item.innerHTML = "";
  }

  item.appendChild(del);


  
  var cart = document.getElementById("cart")
  cart.appendChild(item);

  var clearfix = document.createElement("div");
  clearfix.className = "clearfix";
  cart.appendChild(clearfix);

  inputProductName.value = "";
  inputCost.value = "";

};



function updatePrices () {
  var items = document.getElementsByClassName("item");
  var runningCost = 0;

  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    var individualCost = item.getElementsByClassName("cost");
    var stringCost= individualCost[0].innerText;
    var cost = parseFloat(stringCost);

    var individualQuantity = item.getElementsByClassName("quantity");
    var stringQuantity= individualQuantity[0].value;
    var quantity = parseFloat(stringQuantity);

    var total = cost * quantity;
    
    runningCost += total;

    var divTotal = item.getElementsByClassName("item-total");
    divTotal[0].innerText = total.toFixed(2) + "€";
  }
  var totalPrice = document.getElementById("total");
  totalPrice.innerText = runningCost.toFixed(2) + "€";
};

var calcButton = document.getElementById("calc-button");
calcButton.onclick = updatePrices;


  

/*  
//Create a click event for the Calculate Prices button

CalcBtn.onclick = function () {
  };

//Retrieves the unit price of the product
//Retrieves the quantity of items desired
//Calculates the total price based on this data
//Updates the total price in the DOM


*/
/*
function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}

function createNewItem(){

};

*/
/*this already existed in document.

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
*/