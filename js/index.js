// ITERATION 1

function updateSubtotal(product) {
  console.log('updatetotaltest')
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  let subtotal = price.innerText * quantity.value;
  product.querySelector('.subtotal span').innerText = subtotal;
  return subtotal;
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  var total = 0
  document.querySelectorAll('.product').forEach(item =>  updateSubtotal(item));
console.log(total)
  // ITERATION 3
  //... your code goes here
  
  document.querySelectorAll('.product').forEach(sub => total += updateSubtotal(sub))
  console.log(total)
  document.querySelector('#total-value span').innerText = total
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

  const removeBtn = document.getElementsByClassName("btn-remove");

  removeBtn.addEventListener('click', removeProduct);


}
)