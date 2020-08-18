// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const totalPrice = price * quantity
  product.querySelector('.subtotal span').innerText = totalPrice
  console.log('Calculating subtotal, yey!');
  console.log(quantity, price, totalPrice);
  return totalPrice
}

function calculateAll() {
    const everyProduct = document.querySelectorAll('.product');
    let total = 0;
    everyProduct.forEach(function(product) {
    total += updateSubtotal(product);
    });
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
  const removeProductBtn = document.querySelectorAll('.btn-remove');
  removeProductBtn.forEach(function(product){
  removeProductBtn.addEventListener('click', removeProduct);
  })
});

