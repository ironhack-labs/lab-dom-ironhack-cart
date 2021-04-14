// ITERATION 1

function updateSubtotal(product) {
  const price = document.querySelector('.price span').innerHTML //find "price" in html doc and form this take only the inner HTML
  const quantity =  document.querySelector('.quantity input').value //find "quantity" in html doc and from this take only the value
  
  const subtotal = price * quantity //calculate subtotal
  
  const subtotalHolder = document.querySelector('.subtotal span') //find where the subtotal must go

  subtotalHolder.innerText = subtotal //add the subtotal to the subtotal holder

  return subtotal
}

function calculateAll() {

  const products = [...document.querySelectorAll('.product')]; //find all elements with product class and create an array of them

  products.forEach((product) => updateSubtotal(product));
}


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
