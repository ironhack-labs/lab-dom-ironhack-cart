// ITERATION 1


function updateSubtotal(product) {
  console.log(product)
  //... your code goes here
  const price = product.querySelector('.price span').textContent
  const quantity = product.querySelector('.quantity input').value
  const subtotal = price * quantity
  const subtotalDom = product.querySelector('.subtotal span')
  subtotalDom.innerHTML = subtotal
  return subtotal
}

function calculateAll() {

  let total = 0
  const allProduct = document.querySelectorAll('.product');
  allProduct.forEach((oneProduct) => {
    const subtotal = updateSubtotal(oneProduct)
   total = total + subtotal
  })
  const totalDom = document.querySelector('#total-value span')
  totalDom.innerHTML = total;
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
