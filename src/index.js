// ITERATION 1



function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  let price = product.querySelector(".price span");
  let quantity = product.querySelector(".quantity input");
  let subtotal = product.querySelector(".subtotal span");
  let total = price.innerHTML * quantity.value;
  return subtotal.innerHTML = total; 
}


function calculateAll() {

  let products = document.getElementsByClassName('product');
  let sumOfProducts = 0;
  for(let i = 0; i < products.length ; i++) {
    sumOfProducts += updateSubtotal(products[i]);
  }
  
  let finalTotal = document.querySelector("#total-value span");
  finalTotal.innerHTML = sumOfProducts;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target.parentNode.parentNode);
  target.parentNode.parentNode.remove();
  calculateAll();
}

// ITERATION 5
// couldn´t figure out this one yet :/

function createProduct() {
  let newProduct = document.createElement(".create-product input");
  console.log(newProduct);
  newProduct.innerHTML = "T-shirt"
  let newContent = document.querySelector(".create-product").appendChild(newProduct);
  document.querySelector("#create").forEach(newProducts => newProducts.addEventListener('click', createProduct));
 
}



window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  document.querySelectorAll(".btn-remove").forEach(removedItems => removedItems.addEventListener('click', removeProduct))

  //... your code goes here
});
