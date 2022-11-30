// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector(`.price span`).innerHTML;
  const quantity = product.querySelector(`.quantity input`).value;
  const subtotal = price * quantity;
  const subtotalElm = product.querySelector(`.subtotal span`);
  subtotalElm.innerText = subtotal;
  

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2

  let subtotalSum = 0;

  const allProducts = document.querySelectorAll('.product');
  
  eachProductsTotalPrice = allProducts.forEach(eachProduct => {
    subtotalSum += updateSubtotal(eachProduct);     
  });
  
  
  // ITERATION 3
 
  const totalElm = document.querySelector(`#total-value span`);
  totalElm.innerHTML = subtotalSum;  
  
}


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const removeBtn = document.querySelectorAll(`.btn btn-remove`);
  removeBtn.addEventListener(`click`, )
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
