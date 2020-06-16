// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price=product.querySelector('.price span').innerHTML;
  const quantity=product.querySelector('.quantity input').value;
  let total=price*quantity
  
  product.querySelector('.subtotal').innerHTML=`$<span>${total}</span>`
  return total
}




function calculateAll() {

  // ITERATION 2
  const products=document.querySelectorAll('.product')
  products.forEach(curProduct=>updateSubtotal(curProduct))
  

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

