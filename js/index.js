// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  window.addEventListener('load', () => {
    const calculatePricesBtn = document.getElementById('calculate');
    calculatePricesBtn.addEventListener('click', calculateAll);
  });
  }

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);

  const price = document.querySelector('.price span');
  let quantity = document.querySelector('.quantity input');
  console.log(price.innerHTML);
  console.log(quantity.value);

  let subtotal = price.innerHTML * quantity.value;
  console.log(subtotal);
  
  let theSubtotal = document.querySelector('.subtotal span');
  theSubtotal.innerHTML = subtotal;
  console.log(theSubtotal.innerHTML);

  let products = document.getElementsByClassName("product");
  let total = 0;
  let theTotal = document.getElementById("#total-value span");
  console.log(theTotal);

  for(let i=0; i<products.length; i++){
    console.log(products[i]);
    const priceProducts = products[i].querySelector('.price span');
    let quantProducts = products[i].querySelector('.quantity input');
    console.log(priceProducts.innerHTML);
    console.log(quantProducts.value);

   let newSubtotal = products[i].querySelector('.subtotal span').innerHTML = priceProducts.innerHTML * quantProducts.value;
  total += newSubtotal;
   console.log(total);
    }
 
    theTotal.innerHTML = total;

  // end of test

  // ITERATION 2
  //... your code goes here

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
