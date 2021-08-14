// ITERATION 1

function updateSubtotal(product) {

  //... your code goes here
  
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span'); 
  const quantity = product.querySelector('.quantity input');

  const subtotalProduct = price.innerHTML * quantity.value;
  
  const subtotal = product.querySelector('.subtotal');
  subtotal.innerHTML = '$' + subtotalProduct;


  return subtotalProduct
}


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const allProducts = document.getElementsByClassName('product'); //puedo utilizar el querySelectorAll('#id .class tag') para selecionar desde id, clase o etiqueta
  let totalNumPrice = 0;

  for (let i = 0; i < allProducts.length; i++) {
    totalNumPrice +=  updateSubtotal(allProducts[i])
  }


  // ITERATION 3
  //... your code goes here
  const totalPrice = document.querySelector('#total-value span');
  totalPrice.innerHTML = totalNumPrice;


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
