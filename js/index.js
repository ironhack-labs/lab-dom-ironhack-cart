// ITERATION 1

function updateSubtotal(product) {
 // alert('Calculate Prices clicked!');

  const $price = document.querySelector(".price span").innerText; // Selección del texto correspondiente al nodo de precio
  const $quantity = document.querySelector(".quantity input").value;// Selección del texto correspondiente al nodo de cantidad
  const $subtotal = document.querySelector(".subtotal span"); // Selección del texto correspondiente al nodo se subtotal
  const subTotalCalc = $price * $quantity; // calculo del subtotal (precio * cantidad)
  return $subtotal.innerHTML = subTotalCalc; //retorno del subtotal y actualización del dom
}

function calculateAll() {
  //update subtotals of all products

  const $allProducts = document.getElementsByClassName('product'); 
  updateSubtotal($allProducts)

  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
