// ITERATION 1

function updateSubtotal(product) {
 // console.log('Calculating subtotal, yey!');

  //... your code goes here
  let price = product.querySelector('.price span').textContent;

  let quantity = product.querySelector('.quantity input').value;

  let subtotal= product.querySelector('.subtotal span');

  let total= price * quantity;

  subtotal.innerHTML = total
  product.querySelector('.subtotal span');

  return total;
}

function calculateAll() {

  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //let singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test: 


  // ITERATION 2
  //... your code goes here
  let suma = 0;
  let someProducts= document.getElementsByClassName('product');
  for(let i = 0; i <someProducts.length; i++) {
    suma += updateSubtotal(someProducts[i])
  }

  // ITERATION 3
  //... your code goes here

document.querySelector('#total-value span').innerHTML = suma;

}

//utilizar queryselector!!

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  
  //... your code goes here
  let remove= target.parentNode;
  document.querySelector('#cart tbody').removeChild(remove);

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
