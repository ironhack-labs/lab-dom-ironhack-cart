window.onload = function() {
  var calculatePriceButton = document.getElementById("calc-prices-button");
  calculatePriceButton.onclick = getTotalPrice;
  
  var createItemButton = document.getElementById("new-item-create");
  createItemButton.onclick = createNewItem;
  
  var deleteButtons = document.getElementsByClassName("btn-delete");
  
  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};

function createNewItem() {
  // We get the input values for the name and the unit price. If there are no values, 'Unnamed' and '0.00' are the default ones
  var newProductName = document.querySelector("#product-name").value || 'Unnamed';
  var newProductPrice = parseFloat(document.querySelector("#product-price").value).toFixed(2) || '0.00';
  
  // If the price is not a number, cancel the addition of the product
  if(isNaN(newProductPrice)){ return ;}
  
  // Get the product list
  var productList = document.querySelector("#product-list");

  // We create the element to add some properties later
  var newProduct = document.createElement("div");
  
  // Add the class, html and the delete event on click
  addProperties(newProduct, newProductName, newProductPrice);
  
  // We add the whole product to the product list
  productList.append(newProduct);
  
  // We reset the divs value
  document.querySelector("#product-name").value = '';
  document.querySelector("#product-price").value = '';
}

function addProperties(element, name, price){
  // The structure of the product
  element.innerHTML = `
    <div>
      <span>${name}</span>
    </div>
    <div class="unit-price">
      <span>$${price}</span>
    </div>
    <div class="quantity">
      <label for="quantity">QTY</label>
      <input type="text" value="0" name="quantity">
    </div>
    <div class="total-price">
      <span>$0.00</span>
    </div>
    <div>
      <button class="btn btn-delete">Delete</button>
    </div>
  `;

  // We add the style to the product
  element.setAttribute("class", "container");
  // We attach the deleteItem function to the onclick event for the delete button
  element.querySelector('button').onclick = deleteItem;
  element.querySelector('input').onchange = getTotalPrice;
}

function getTotalPrice() {
  // Provide cache to the necessary DOM elements
  var unitPrice = document.querySelectorAll(".unit-price span");
  var quantity = document.querySelectorAll(".quantity input");
  var totalPriceDomElem = document.querySelectorAll(".total-price span");

  var pricesList = [];

  quantity.forEach((_, index) => {
    var unitValueString = unitPrice[index].textContent;
    var unitValue = parseFloat(unitValueString.substring(1, unitValueString.length));
  
    var unitQuantity = parseInt(quantity[index].value);
    var totalPrice = unitValue * unitQuantity;
  
    totalPriceDomElem[index].textContent = "$" + totalPrice.toFixed(2);
  
    pricesList.push(totalPrice);
  });

  var totalPrice = calculateTotalPrice(pricesList);
  updateGlobalPrice(totalPrice);
}

// This methods returns the sum of the whole array of product prices
function calculateTotalPrice(arr){
  return arr.reduce((a, cv) => a + cv, 0);
}

// This method access to the DOM and change the total price value
function updateGlobalPrice(num){
  document.querySelector("#global-price span").textContent = "$" + num.toFixed(2);
}

function deleteItem(e) {
  e.path[2].remove();
  // With this when we delete an item, the total price updates automatically
  getTotalPrice();
}