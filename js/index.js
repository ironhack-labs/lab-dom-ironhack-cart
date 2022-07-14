// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');

  const price2 = price.innerText;
  const quantity2 = quantity.value;


  const quantityxPrice = price2 * quantity2;

  const subtotal = product.querySelector('.subtotal span');

  subtotal.innerHTML = quantityxPrice;
  return quantityxPrice;

}



function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test
  
  // ITERATION 2

  const allProducts = document.getElementsByClassName('product')

  let total = 0;

  for (let i = 0; i < allProducts.length; i++){
  //  updateSubtotal(allProducts[i])
   total += updateSubtotal(allProducts[i])
  }
  
  
  // ITERATION 3
  const totalValue = document.querySelector('#total-value span');
  totalValue.innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  const allProducts = document.getElementsByClassName('product');

  const btn = product.querySelectorAll('.btn btn-remove');


  for (let i = 0; i < allProducts.length; i++ ){
  allProducts[i].addEventListener('click', removeProduct);
  }

  //const btn = product.querySelectorAll('.btn btn-remove');
 // btn.addEventListener('click', removeProduct);
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
