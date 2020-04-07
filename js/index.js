"use strict"; // remember this!
// ITERATION 1

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');

  const price = product.querySelector(".price span"); // nyt targetoidaan nimenomaan span-tagia sen elementin, jonka luokka on .price, sisällä
  const quantity = product.querySelector(".quantity input"); // .quantity-luokkaan kuuluvan elementin sisällä on tämä input-elementti, joka halutaan
  //  <td class="price">$<span>25.00</span></td> <-------- price is easy to get
  const strPrice = price.innerHTML; // string "25.00"
  const strQty = quantity.value; // string too
  //make itemPrice + item qty into float and do arithmetics
  const itemPrice = parseFloat(strPrice);
  const itemQty = parseFloat(strQty);
  const sTotal = itemQty * itemPrice;

  // need to put the subtotal in its right place in the table
  const subtotal = product.querySelector(".subtotal span"); // siellä on tommonen str!
  subtotal.innerHTML = `${sTotal}`; // using str interpolation to skirt possible issued (i'm suspicious about just giving it a value that is a float)
  //console.log("updateSubtotal up and running!!");
  //console.log(subtotal);
  return sTotal; // returnig the float value here!!!
}

function calculateAll() {
  // ITERATION 2
  //... your code goes here

  let total = 0; // btw not rounding this at any point but thats just window dressing at this time of the day
  const productArr = document.querySelectorAll(".product"); // puts all product objects into an array
  productArr.forEach((product) => {
    let stot = updateSubtotal(product); // this bad girl returns a float, yay!
    total += stot;
  });

  // ITERATION 3

  // reduce() toimii näin!!!
  /*
  const total = productArr.reduce( function (acc, currProduct, dontNeedIndex, dontNeedOrigArray) {
    let updatedTotal = acc + currProduct.sTotal; // making it as clear as day
    return updatedTotal;
  }, 0 );
  */

  // pass the value of total to show it on screen
  let displayedTotal = document.querySelector("#total-value span");
  displayedTotal.innerHTML = `${total}`;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);

  // note to self: jokainen product on <tr> tagin sisällä, class = "product", ja tr:n äiti on <tbody>
  // syntax: node.removeChild(child); removeChild palauttaa refernssin poistettuun childiin mutta me ei tarvita
  //tätä tietoa mihinkään eli EI tarvi tallentaa muuttujaan

  //console.log(target.parentNode.parentNode);

  // climbing the tree, dum-de-dum..
  let cell = target.parentNode;
  let currProduct = cell.parentNode;
  let productTable = currProduct.parentNode;
  productTable.removeChild(currProduct);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here
  /* start with querying the document for all "Remove" buttons, 
  loop through them, and 
  add a click event listener to each, passing a named function removeProduct as the callback argument. */

  //const rmvButtons = document.querySelector(".btn btn-remove"); thats giving error bc 2 classes! just give one class

  const rmvButtons = document.querySelectorAll(".btn-remove");
  console.log(rmvButtons);
  console.log(typeof rmvButtons);

  rmvButtons.forEach((rmvBtn) => {
    rmvBtn.addEventListener("click", removeProduct);
  });

  /* the following gives you a) a headache, b) html collection :
  
  const rmvButtons = document.getElementsByClassName(".btn btn-remove");
  for (const button in rmvButtons) {
    button.addEventListener("click", console.log("you clicked a remove button!") )};
  */
});
