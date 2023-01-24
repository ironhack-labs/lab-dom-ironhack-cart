// ITERATION 1

function updateSubtotal(product) {
console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector('.price span').innerHTML;
  
  const quantity = product.querySelector('.quantity input').value;
  
   
  let subtotalPrice = price * quantity;

  let subtotal = product.querySelector('.subtotal span');
   
  subtotal.innerHTML = subtotalPrice

  return subtotalPrice;
  
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.

  // end of test

  // ITERATION 2
  //... your code goes here
  let total = 0;
  const totalProducts = document.getElementsByClassName("product");
  for(let i=0; i<totalProducts.length; i++){

    total += updateSubtotal(totalProducts[i]);
  }
  // ITERATION 3
  //... your code goes here

 document.querySelector("#total-value span").innerHTML = total; //total no final para atribuir o valor anterior a total e não guardar numa variável.
  

  return total;
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
