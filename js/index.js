// ITERATION 1

function updateSubtotal(product) {
  const price = Number(product.querySelector('.price span').innerHTML);
  const quantity = product.querySelector('.quantity input').valueAsNumber;
  const total = price * quantity;
  product.querySelector('.subtotal span').innerHTML = total.toFixed(2);
  return total.toFixed(2);
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //updateSubtotal(singleProduct);
  // end of test
  
  // ITERATION 2
  const products = document.querySelectorAll('.product');
  products.forEach(product => {
    updateSubtotal(product)
  });

  // ITERATION 3
  const subtotals = []
  products.forEach(product => {
    subtotals.push(Number(product.querySelector('.subtotal span').innerHTML))
  })
  const total = subtotals.reduce((x, y) => {
    if(!subtotals[0]) return 0
    return x + y
  })
  document.querySelector('#total-value span').innerText = total.toFixed(2)
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  const table = document.getElementById('body')
  const product = document.querySelector('.product').innerHTML
  const newProduct = document.createElement('tr')

  newProduct.className = 'product'
  newProduct.innerHTML = product

  const newProductName = document.querySelector('#name-input').value
  const newProductPrice = Number(document.querySelector('#quantity-input').value).toFixed(2)

  newProduct.querySelector('.product span').innerText = newProductName
  newProduct.querySelector('.price span').innerText = newProductPrice

  table.appendChild(newProduct)

  document.querySelector('#name-input').value = ''
  document.querySelector('#quantity-input').value = 0
}

const createProductBtn = document.querySelector('#create')
createProductBtn.addEventListener('click', createProduct)

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
});
