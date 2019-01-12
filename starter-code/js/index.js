/*jshint esversion: 6 */

// Test Objects
let products = [
  {
    name: "IronBear",
    price: "02.50",
  },
  {
    name: "IronHeart",
    price: "42.50",
  },
  {
    name: "Vegan Muffin",
    price: "02.53",
  },
  {
    name: "Immortality",
    price: "199.00",
  },
  {
    name: "Bootcamp",
    price: "6500.00",
  },
  {
    name: "Floppy Disk",
    price: "01.99",
  },
];

function deleteItem(e) {
  currentRow = e.target.parentNode.parentNode;
  currentRow.remove();
  console.log(e.target);
}

function getTotalPrice() {
  let numOfProducts = document.getElementsByClassName("product");
  let overAllResult = 0;
  for (let i = 0; i < numOfProducts.length; i++) {
    let inputVal = document.getElementsByClassName("inputField")[i].value;
    let costVal = document.getElementsByClassName("costs")[i].innerText;
    let res = Number(inputVal * costVal);
    res.toFixed(2);
    overAllResult += res;
    document.getElementsByClassName("totalPrice")[i].innerText = res;
  }
  document.getElementById("res").innerHTML = overAllResult;
}

function createNewItem() {
  // Prepare new Product-Row on HTML 

  let newProduct = document.createElement("div");
  newProduct.className = "product";
  newProduct.innerHTML = '<div><span class="productName"></span></div><div>$<span class="costs"></span></div><div><span>QTY</span><input class="inputField" type="text" placeholderr="0"></div><div>$<span class="totalPrice"></span></div><div><button class="btn btn-delete">Delete</button></div>';
  document.getElementById("container").appendChild(newProduct);

  // Create new Item 

    // get and add Product Name
  let ProductNames = document.getElementsByClassName("productName");
  ProductNames[ProductNames.length-1].innerText = prompt("Name?");
   
  // get and add Price 
  let currentPrice = parseFloat(prompt("How much $ for that?")).toFixed(2);
  let PriceElements= document.getElementsByClassName("costs");
  PriceElements[PriceElements.length-1].innerText = currentPrice;

    // get & add Amount
  let currentAmount = Math.floor(prompt("How Many?"));
  let inputFields = document.getElementsByClassName("inputField");
  inputFields[inputFields.length-1].setAttribute("value", currentAmount);
   
  // Current Price Total
  let currentTotalPrice = document.getElementsByClassName("totalPrice");
  currentTotalPrice[currentTotalPrice.length-1].innerText = currentAmount * currentPrice;

    //add EventListener to Delete-Button
  let currentButtons = document.getElementsByClassName("btn-delete");
  currentButtons[currentButtons.length-1].onclick = deleteItem;
}

window.onload = function () {
  let calculatePriceButton = document.getElementById('calc-prices-button');
  let createItemButton = document.getElementById('new-item-create');
  let deleteButtons = document.getElementsByClassName('btn-delete');
  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }

  getTotalPrice();
};