// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const subtotalElement = product.querySelector('.subtotal span');

  const subTotalPrice = Number(price) * Number(quantity);
  subtotalElement.innerHTML = subTotalPrice;

  return subTotalPrice
}

function calculateAll() {
  const allProduct = document.querySelectorAll('.product')

  let allPrices = [...allProduct].reduce(( allPrices, product ) => {
    return allPrices += updateSubtotal(product)
  }, 0)

  const totalElementPrices = document.querySelector('#total-value span')
  totalElementPrices.innerHTML = allPrices
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
