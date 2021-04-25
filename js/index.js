// ITERATION 1  -> updateSubtotal
// 1 table tag IDcart is place in the class product located inside tbody
// Product :  price & quantity (represents how many items of a specific product user has added in the cart)
// subTotal price is the result of the * of those values
// GOAL -> calculate the subtotal price
// step 0: calculate prices button has some functionality -> id"calculate" w event listener click to it
// when clicked, the button will fire the calculateAll() function

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");

  let price = document.querySelector(".price span").innerHTML;
  let quantity = document.querySelector(".quantity input").value;

  let subtotalPrice = price * quantity;

  document.querySelector(".subtotal span").innerHTML = subtotalPrice;
  return updateSubtotal;
}

// STEP 1

function calculateAll(updateSubtotal) {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.getElementsByClassName(".product"); //-> to remove
  // -> call updateSubtotal() with every 'tr.product' in the 'table#cart'
  // -> add a new product to index.html : duplicate 'tr' w ze 'class product' : rename the product inside & change the product price OK
  // -> calculateAll reuse the total value calculated in the previous iteration
  // -> calculate the total price for the products by summing all of the subtotals
  // -> return by updateSubtotal() when it was called with each product

  // -> console.log(singleProduct[i]);
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  let allProducts = document
    .getElementsByClassName("product")
    .innerHTML.forEach((product) => {
      return calculateAll;
    });

  // -> Use `calculateAll`to trigger the update of subtotals for every product

  // ITERATION 3
  //... your code goes here
  // -> total value remains untouched - calculate iteration 2 & update the DOM
  // -> calculate the total price for the products in the cart by summing all of the subtotals
  // -> returned by updateSubtotal() when it was called with each product
  let totalPrice = subtotalPrice + calculateAll;
  return totalPrice(updateSubtotal);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here
});
