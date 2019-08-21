// CALCULATE TOTAL PRICE FOR INDIVIDUAL ITEMS

function updatePriceByProduct() {

  let priceAllProducts = 0;

  //Select row for each  product
  let productArray = document.querySelectorAll(".container")

  //Loop through the array of products
  productArray.forEach(function (product) {
    //Select Quantity
    let input = product.querySelector(".quantity").value;

    //Select Price of Product
    let unit = product.querySelector(".unit-cost").innerHTML;
    let unitNew = unit.slice(1, 6);
    let unitNumber = Number(unitNew);

    //Calculate total price for the individual product
    let price = unitNumber * input;

    //Select and update the total price for the product
    let totalPrice = product.querySelector(".total-price");
    totalPrice.innerHTML = `$ ${price}`;

    //Calculate total price for all products
    priceAllProducts += price;
  });
  return priceAllProducts;
}


// CALCULATE  TOTAL PRICE OF ALL ITEMS

function getTotalPrice() {

  let totalSum = updatePriceByProduct();
  let totalPriceSum = document.querySelector(".price-total-sum");

  totalPriceSum.innerHTML = `$${totalSum}`;
}


//DELETE PRODUCT BY USING DELETE BUTTON

function deleteItem(e) {

  let buttonContainer = e.currentTarget.parentElement.parentNode;
  let wrapper = document.querySelector(".product-wrapper");

  wrapper.removeChild(buttonContainer);
}


//INPUT FIELD FOR USER + ADD PRODUCT WITH CREATE BUTTON

function createNewItem() {

  //Clone row for a product 
  let newItem = document.querySelector(".container").cloneNode(true);
  //Append new row to wrapper
  document.querySelector(".product-wrapper").appendChild(newItem);

  //Assign new delete button the event "delete product"
  var newDeleteButton = newItem.querySelector(".btn-delete");
  newDeleteButton.onclick = deleteItem;

  //Replace product name with input
  //Select input "new product name"
  let newProduct = document.querySelector(".new-product").value;
  //Replace product name from clone with  input "new product name"  
  newItem.querySelector(".product-name").innerHTML = newProduct;


  //Replace product price with input
  //Select input "new product price"
  let newProductPrice = document.querySelector(".new-product-price").value;
  //Replace product price from clone with  input "new product price"  
  newItem.querySelector(".unit-cost").innerHTML = newProductPrice;
}




window.onload = function () {
  var calculatePriceButton = document.getElementById("calc-prices-button");
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName("btn-delete");

  calculatePriceButton.onclick = getTotalPrice;

  createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};