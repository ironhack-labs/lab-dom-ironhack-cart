// ITERATION 1, 2 AND 3

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  
  const priceSpan = product.querySelector('.price span');
  const price = Number(priceSpan.innerHTML);

  const quantityInput = product.querySelector('.quantity input');
  const quantity = Number(quantityInput.value);

  const subTotal = price * quantity
  const subTotalSpan = product.querySelector('.subtotal span');
  subTotalSpan.innerText = subTotal

  return subTotal
}

function calculateAll() {

  const allProducts = document.querySelectorAll('.product');

  let total = 0

  allProducts.forEach(product => {
    total +=updateSubtotal(product)
  })

  document.querySelector('#total-value span').innerText = total
}

// ITERATION 4

function removeProduct(removeBtn) {
  const target = removeBtn.currentTarget;
  console.log('The target in remove is:', target);

  const productRemoved = document.querySelector('.btn-remove').parentNode;



  productRemoved.removeChild(removeBtn)
  
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtn = document.querySelectorAll('.btn-remove')
  removeBtn.forEach(removeBtn => {
    removeBtn.addEventListener('click', removeProduct)
  })
  
});
