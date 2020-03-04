// ITERATION 1

function updateSubtotal($product) {

  const $price = parseInt($product.querySelector('.price span').innerText);
  //console.log($price);

  const $quantity = $product.querySelector('.quantity input').value;
  //console.log($quantity)

  let $subtotal = $product.querySelector('.subtotal span');
  console.log($subtotal)
  //let subtotalResult = $price * $quantity

  return $subtotal.innerText = $price * $quantity;
  
}
//just console logging the result of the function -- NOT IN ORIGINAL CODE
//updateSubtotal();

function calculateAll() {

  // ITERATION 2
  let listOfProducts = document.querySelectorAll(".product")

  let sumOfSubtotals = 0;

  for (let product of listOfProducts){
    console.log(product);
    let updatedProduct = updateSubtotal(product);

    sumOfSubtotals += updatedProduct;
  }

  // ITERATION 3
  document.querySelector("#total-value span").innerText = sumOfSubtotals
}

window.addEventListener('load', () => {
  const $calculateTrigger = document.getElementById('calculate');

  $calculateTrigger.addEventListener('click', calculateAll);
});

// ITERATION 4

function productRemoveListener(event) {
  // ...
}

// ITERATION 5

function createProduct(event) {
  // ...
  //grab the whole row and use innerHTML to change the values
}
