// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!'); 
  let price = product.querySelector('.price span').textContent;
  let quantity = product.querySelector(".quantity input").value;
  let subtotal = price*quantity;

  product.querySelector(".subtotal span").innerHTML = subtotal;

  return subtotal;
  
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // end of test

  // ITERATION 2
   const product = document.getElementsByClassName("product");
   const arrayProduct = [...product] 
   
   for (let i = 0; i<arrayProduct.length; i++){
    updateSubtotal(arrayProduct[i]);
   }

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
