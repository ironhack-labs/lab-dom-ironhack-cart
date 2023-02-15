// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  let priceValue = price.innerHTML; 
  let quantityValue = product.querySelector('.quantity input').value;
  let subtotalValue = priceValue * quantityValue;
  let subtotal = product.querySelector('.subtotal span');
  subtotal.innerHTML = subtotalValue;
  return subtotalValue;

}


function calculateAll() {
  
  let products = document.getElementsByClassName('product');
  let totalValue = 0;
  for (let product of products) {
     updateSubtotal(product);
     totalValue += updateSubtotal(product);
  }
  
  document.querySelector('#total-value span').innerHTML = totalValue;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const row = target.parentNode.parentNode;
  
  const parent = row.parentNode;
  
  parent.removeChild(row);

  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtns = document.querySelectorAll('.btn-remove');
  for (let removeBtn of removeBtns) {
    removeBtn.addEventListener('click', removeProduct);
  }
});
