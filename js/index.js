// ITERATION 1
 //... your code goes here
function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //HICE YO: const price = product.querySelector('.price span');
  //HICE YO: const quantity = product.querySelector('.quantity input');

  //HICE YO: const subtotal = price.innerHTML*(quantity.value);
  //HICE YO: product.querySelector('.subtotal span').innerHTML=subtotal;
   //HICE YO:return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
   const singleProduct = document.querySelector('.product');
   updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const multipleProducts = document.getElementsByClassName ('.product');
  for(let i=0; i<multipleProducts.length;i++){
    updateSubtotal(multipleProducts[i]);
  }

  // ITERATION 3
  //... your code goes here
   //HICE YO:let total=0;
   //HICE YO:const priceProducts = document.getElementsByClassName ('.subtotal');
   //HICE YO:for(let i=0; i<priceProducts.length;i++){
    //HICE YO: total=total + priceProducts.innerHTML;
  //HICE YO: }
   //HICE YO:document.querySelector('#total-value span').innerHTML=total;
 //HICE YO:}

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
