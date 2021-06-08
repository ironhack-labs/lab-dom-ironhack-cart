// ITERATION 1

function updateSubtotal(product) {

  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subtotalPlaceHolder = product.querySelector('.subtotal span')

  const subtotal = price.innerText*quantity.value;

  subtotalPlaceHolder.innerText = subtotal;
  
  console.log('Calculating subtotal, yey!');
  console.log(subtotal);
  return subtotal;
}


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  const listOfProducts = document.getElementsByClassName('product');

  const arrOfProducts = [...listOfProducts]
  

  let sum = 0;

  
  
  for (let i =0; i < arrOfProducts.length; i++) {
        sum += updateSubtotal(arrOfProducts[i]);

      }

      const theTotal = document.querySelector('#total-value span');
      theTotal.innerHTML = sum;


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
