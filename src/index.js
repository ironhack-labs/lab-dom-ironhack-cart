// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  let price = product.querySelector('.price span').innerText;
  let quantity = product.querySelector('.quantity input').value;
  let subtotalValue = price * quantity;

  let subtotalDom = product.querySelector('.subtotal span')
  subtotalDom.innerText = subtotalValue;

  return subtotalValue;
  


}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const multipleProduct = document.getElementsByClassName('product');
  
  for (let i = 0; i < multipleProduct.length; i++) {
    updateSubtotal(multipleProduct[i]);
    
  }
  

  // ITERATION 3
  //... your code goes here
  let subtotals = document.querySelectorAll('.subtotal span');
  let totalValue = 0;

  for (let i = 0; i < subtotals.length; i++) {
    totalValue += Number(subtotals[i].innerText);
  }

  let totalProductDom = document.querySelector('#total-value span');
  totalProductDom.innerText = totalValue

  

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



  // window.addEventListener('click', () => {
  //   const removeProductsBtn = document.getElementsByClassName('btn-remove');
  //   removeProductsBtn.addEventListener('click', removeProduct);

  // });