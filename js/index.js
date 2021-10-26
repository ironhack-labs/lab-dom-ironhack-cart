// ITERATION 1

function updateSubtotal(product) {
 let unitPrice = product.querySelector('.price span').innerText;
 let quantity = product.querySelector('.quantity input').value;
 let subtotal = unitPrice * quantity;
 let elementSubtotal = product.querySelector('.subtotal span');
 elementSubtotal.innerHTML = subtotal;
 return subtotal;
  
}
  // ITERATION 2
function calculateAll() {
  let total = 0;
  let products = document.getElementsByClassName('product');
  for (let i=0; i<products.length;i++){
    total +=updateSubtotal(products[i])
  }
  
  

  // ITERATION 3
  let totalCart = document.querySelector('#total-value span');
  totalCart.innerHTML = total;
  return (total);
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
