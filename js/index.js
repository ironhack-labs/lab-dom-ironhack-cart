// ITERATION 1

function updateSubtotal(product) {
  let price = document.querySelector(".price span");
  let quantity = document.querySelector(".quantity input");
  let subtotal = price.innerHTML * quantity.value;
  product.querySelector(".subtotal span").innerHTML = subtotal;
      

  return subtotal
  //console.log('Calculating subtotal, yey!');

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let products = document.getElementsByClassName("product");
  let total = 0;
  for (let i = 0; i < products.length; i++) {total += updateSubtotal(products[i])
    
    
    
  }
  // ITERATION 3
  //... your code goes here
  document.querySelector("#total-value span").innerHTML = total
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
