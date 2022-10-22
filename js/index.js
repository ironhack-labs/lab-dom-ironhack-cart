function updateSubtotal(product) {
  let price = product.querySelector('.price span').textContent;
  let quantity = product.querySelector('.quantity input').value;
  
  let subtotal = product.querySelector('.subtotal span');
  subtotal.innerHTML = price * quantity;
  
  return price * quantity;
}

function calculateAll() {
  const allProducts = document.getElementsByClassName('product');
  console.log(allProducts)
  let totalFinal = 0;
  for(let i = 0; i < allProducts.length; i++) {
    totalFinal += updateSubtotal(allProducts[i]);  
  }

  let total = document.querySelector('#total-value span');
  total.innerHTML = totalFinal;
  
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
