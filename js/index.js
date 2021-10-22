// ITERATION 1


function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');

  let valorPrice=parseFloat(price.innerHTML);
  let valorQuan=parseInt(quantity.value);

  let total=valorPrice*valorQuan;

  product.querySelector('.subtotal span').innerHTML=total;

  console.log(valorPrice);
  console.log(valorQuan)

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2

  let products = document.querySelectorAll('.product');
  console.log(products)


  products.forEach(eachProduct => {
    updateSubtotal(eachProduct);
  });



  //... your code goes here
  let total=0;
  products.forEach(eachProduct => {
    total+=parseFloat(eachProduct.querySelector('.subtotal span').innerHTML);
  });

  document.querySelector('#total-value span').innerHTML=total;


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
