// ITERATION 1

function updateSubtotal(product) {
  // alert('Calculating subtotal, yey!');

  const price = product.getElementsByClassName('price')[0].getElementsByTagName('span')[0].innerHTML;
  // or: const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input').value;

  const subtotal = price * quantity
  
  const subtotalElement = product.getElementsByClassName('subtotal')[0].getElementsByTagName('span')[0];
  subtotalElement.innerHTML = subtotal;

  return subtotal;  
}



function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const products = document.getElementsByClassName('product');
  // end of test

  console.log(products.length)

  // ITERATION 2
  let total = [...products].reduce(function(acc, element){
                  acc += updateSubtotal(element)
                  return acc; 
                }, 0)


  // ITERATION 3
  const totalValueElement = document.getElementById('total-value').getElementsByTagName('span')[0];
  totalValueElement.innerHTML = total 
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
