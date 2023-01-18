// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML
  const quantity = product.querySelector('input').value

  let subtotalPrice = price * quantity
  
  let subTotal = product.querySelector('.subtotal span')
subTotal.innerHTML = subtotalPrice

return subtotalPrice
}


function calculateAll() {
/*   // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test */

  // ITERATION 2 & 3
  const allProducts = document.querySelectorAll('.product')
  let sum = 0
  allProducts.forEach(function(element) {
  sum+= updateSubtotal(element)
  });

  let total = document.querySelector('h2 span')
total.innerHTML = sum

    return sum
  
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
