// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subtotal = product.querySelector('.subtotal span');
  const resultSubtotal = parseInt(price.textContent, 10) * parseInt(quantity.value, 10);
  subtotal.innerText = resultSubtotal.toString();
  return resultSubtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  
  const allProducts = document.getElementsByClassName('product');
  const allProductsArray = [...allProducts];
  const total = allProductsArray.reduce((acc, product) => {
    return acc + updateSubtotal(product);
  }, 0) 
  console.log(total);
  // ITERATION 3
  
  const totalPrice = document.querySelector('#total-value span');
  totalPrice.innerText = total.toString();
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const parent = target.parentNode.parentNode.parentNode;
  const elmToRemove = target.parentNode.parentNode;
  console.log(elmToRemove);
  parent.removeChild(elmToRemove);
  calculateAll();
  

  
}


// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeButtons = document.getElementsByClassName("btn-remove");
  for (button of removeButtons) {
    button.addEventListener("click", removeProduct)
  }
  //... your code goes here
});
