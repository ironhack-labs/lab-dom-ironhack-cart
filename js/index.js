// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').textContent;
  const quantity = product.querySelector('.quantity input').value;
  const subtotalPrice = price * quantity

  product.querySelector('.subtotal span').textContent = subtotalPrice
  console.log('Calculating subtotal, yey!');
  return subtotalPrice
}

function calculateAll() {
  const allProducts = document.getElementsByClassName('product')
  let total = 0
  for (let i = 0; i < allProducts.length; i++) {
    updateSubtotal(allProducts[i]);
    total = total + Number(allProducts[i].querySelector('.subtotal span').innerText)
  }
  let totalValue = document.querySelector('#total-value span')
  totalValue.innerText = total
  return total

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
