function deleteItem(e){
  // Get which delete-button was pressed
  let btnToDelete = e.currentTarget;
  // Parent of that button is a div, parent of that div is another div
  let divToDelete = btnToDelete.parentNode.parentNode;
  divToDelete.parentNode.removeChild(divToDelete);
}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  const allProducts = document.getElementsByClassName("product-wrapper");
  let sumTotal = 0;
  for (let product of allProducts) {
    // Retrieve unit price of product
    let unitPriceSpan = product.querySelector(".cost-per-unit-span");
    let unitPrice = parseFloat(unitPriceSpan.textContent);

    // retrieve quantity of items
    let quantity = product.querySelector("input").value;
    quantity = parseInt(quantity);

    // Calculate total price
    let totalPrice = quantity*unitPrice;
    sumTotal += totalPrice;
    let totalPriceString = totalPrice.toFixed(2) + "€";

    // Insert total price in DOM
    let totalPriceSpan = product.querySelector(".total-cost-span");
    totalPriceSpan.textContent = totalPriceString;
  }

  // Update "total price" span at bottom of page
  let sumTotalSpan = document.querySelector(".total-cart-value-span");
  let sumTotalString = sumTotal.toFixed(2) + "€";
  sumTotalSpan.textContent = sumTotalString;
}

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
  // Retrieve div "all-items"
  let allItems = document.querySelector("#all-items");

  // Get values of inputs #new-item and #new-unit-cost
  let itemName = document.querySelector("#new-item").value;
  let itemCost = document.querySelector("#new-unit-cost").value;
  itemCost = parseFloat(itemCost);
  
  // Create div with class="product-wrapper"
  let newProduct = document.createElement("div");
  newProduct.classList.add("product-wrapper");
  
  // Inside that div, create five child divs
  // Child Div 1: Name of product
  let prodName = document.createElement("div");
  prodName.classList.add("product-name");
  prodName.innerHTML = `<span class="product-name-span">${itemName}</span>`;
  newProduct.appendChild(prodName);
  // Child Div 2: per-unit price
  let prodCost = document.createElement("div");
  prodCost.classList.add("cost-per-unit");
  prodCost.innerHTML = `<span class="cost-per-unit-span">${itemCost.toFixed(2)}€</span>`;
  newProduct.appendChild(prodCost);
  // Child Div 3: quantity form
  let prodQty = document.createElement("div");
  prodQty.classList.add("input-number");
  // The ID that we give the label and input needs to be unused
  let formID = allItems.children.length;
  prodQty.innerHTML = `<label for="qty${formID}">QTY: </label><input type="number" name="quantity" id="qty${formID}" value="0" min="0" style="width: 50%" />`;
  newProduct.appendChild(prodQty);
  // Child Div 4: net cost
  let prodTotal = document.createElement("div");
  prodTotal.classList.add("total-cost");
  prodTotal.innerHTML = `<span class="total-cost-span">0.00€</span>`;
  newProduct.appendChild(prodTotal);
  // Child Div 5: delete button
  let prodDelete = document.createElement("div");
  prodDelete.classList.add("delete");
  prodDelete.innerHTML = `<button class="btn-delete">Delete</button>`
  let prodDeleteButton = prodDelete.querySelector(".btn-delete");
  prodDeleteButton.onclick = deleteItem;
  newProduct.appendChild(prodDelete);
  
  // Append new element to the end of that div
  allItems.appendChild(newProduct);
}

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
