// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const priceHolder = parseFloat(price.innerText);
  const quantityHolder = quantity.valueAsNumber;
  const sub = priceHolder * quantityHolder;

  const subToAdd = document.createTextNode(sub);

  const subT = product.querySelector('.subtotal span');

  subT.innerHTML = '';

  subT.appendChild(subToAdd);

  console.log(priceHolder,quantityHolder,sub,subT);

  return sub;

 


}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
 // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

    const allOfProducts = document.getElementsByClassName('product');

    let counter = 0;

    for (let i = 0; i < allOfProducts.length; i++) {

      counter += updateSubtotal(allOfProducts[i]);
  
    }


  // ITERATION 3
  //... your code goes here

  const finalTotal = document.querySelector('#total-value span');

  finalTotal.innerHTML = '';

  finalTotal.innerHTML = parseInt(counter);
  
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
