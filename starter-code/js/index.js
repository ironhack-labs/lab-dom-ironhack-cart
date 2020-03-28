// ITERATION 1

function updateSubtotal($product) {
  /*let everyProductArray = document.querySelectorAll(".product"); //Un Array con todos los productos

  let productPrice;
  let productQuantity;
  let productSubtotal;

  for (let i = 0; i < everyProductArray.length - 1; i++) {
    
    // tendría que conseguir el precio de cada producto del array, 
    //es decir, para cada index encontrar la clase "price"
    
    productPrice = everyProductArray[i].querySelector(".price")
    productQuantity = everyProductArray[i].querySelector(".quantity")
    productSubtotal = productPrice * productQuantity

  }
 
everyProductArray.forEach(elm => {
    productPrice = elm.querySelector(".price")
    productQuantity = elm.querySelector(".quantity")
    productSubtotal = productPrice * productQuantity

}) 
 
*/
  let productPriceNumber = parseInt(
    $product.querySelector(".price > span").innerHTML
  );

  let productQuantity = $product.querySelector(".quantity > input").value;

  let productSubtotal = productPriceNumber * productQuantity;

  $product.querySelector(".subtotal > span").innerHTML = productSubtotal;
}

function calculateAll() {
  // For development testing purposes, paste the following code inside of `calculateAll`:
  const $singleProduct = document.querySelector(".product");
  updateSubtotal($singleProduct);
  // End of test

  // ITERATION 2
  //...
  // ITERATION 3
  //...
}

window.addEventListener("load", () => {
  const $calculateTrigger = document.getElementById("calculate");

  $calculateTrigger.addEventListener("click", calculateAll);
});

// ITERATION 4

function productRemoveListener(event) {
  // ...
}

// ITERATION 5

function createProduct(event) {
  // ...
}

// ESTOY PROBANDO SSH
