// ITERATION 1
// Step 1. Crear dos variables price y quantity

const price = product.querySelector('.price span');
const quantity = product.querySelector ('.quantity input');

// Step 2. Extraer los valores de price y quantity
 
const priceVal = number(price.textContent);
const quantityVal = quantity.value.textContent;

// Step 3. Calculate subtotal price.

const subtotalPrice = priceVal * quantityVal

// Step 4. Unir al DOM el subtotalPrice

const subTotalDom = product.querySelector(".subtotal span");
  subTotalDom.innerHTML = subTotal;
  subTotalDom.appendChild(subTotal);
  return subTotal

// Step 5. Poner el subtotal en el elemento del DOM

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const singleProduct = document.querySelector ('.product');
    return updateSubtotal (singleProduct);
}
  

function calculateAll() {

  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
 

  // Iteración 2. Llama la función updateSubtotal con cada tr.product DOM en el table#cart.
  

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
