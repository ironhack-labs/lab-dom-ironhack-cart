// ITERATION 1
function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  let price = product.querySelector('.price span').innerHTML;
  let quantity = product.querySelector('.quantity input').value;
  let subtotal = product.querySelector('.subtotal span');

  let cost = price * quantity;
  subtotal.innerHTML = cost

  return cost
}

function calculateAll() {
  // ITERATION 2
    let allProducts = document.querySelectorAll('.product');
    let sum = 0
      allProducts.forEach((product) => {
      sum += updateSubtotal(product)
     });
    
  // ITERATION 3
  let total = document.querySelector('#total-value span');
  total.innerText = sum
}

// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  target.remove()
}

// ITERATION 5
function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtn = document.getElementsByClassName('.btn-remove');
  removeBtn.forEach((button) => {
    button.addEventListener('click', removeProduct)
  })

    updateSubtotal()
    calculateAll()
    removeProduct()
    createProduct()
  })
