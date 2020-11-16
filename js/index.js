// ITERATION 1
function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const subtotalPrice = Number(product.querySelector('.price span').innerText) * Number(product.querySelector('.quantity input').value);
  product.querySelector('.subtotal span').innerText = subtotalPrice;
  return subtotalPrice;
}

function calculateAll() {

  // ITERATION 2
  let total = 0;
  const productsArr = document.querySelectorAll('.product');
  for (let product of productsArr) {
    total += updateSubtotal(product);
  }

  // ITERATION 3
  document.querySelector('#total-value span').innerText = total;
}

// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  target.closest('.product').remove()
}

// ITERATION 5
function createProduct(row) {
  const productName = document.querySelector('.create-product td input').value;
  const productPrice = document.querySelector('.create-product td:nth-of-type(2) input').value.replace(/^0+/, '');
  if (productName ==='' && productPrice === '0') {
    alert('Please, type the product name and enter its price');
  } else if (productName === '') {
    alert('Please, type the product name');
  } else if (productPrice === '0') {
    alert('Please, enter the product price');
  } else {
      const clone = row.cloneNode(true);
      clone.querySelector('.name span').innerText = productName;
      clone.querySelector('.price span').innerText = productPrice;
      clone.querySelector('.quantity input').value = '0';
      document.querySelector('tbody').appendChild(clone);
      document.querySelector('.create-product td input').value = "";
      document.querySelector('.create-product td:nth-of-type(2) input').value = '0';
      clone.querySelector('.btn-remove').addEventListener('click', removeProduct);
    }
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtn = document.querySelectorAll('.btn-remove');
  for (let btn of removeBtn) {
    btn.addEventListener('click', removeProduct);
  }
  
  const row = document.querySelector('.product');
  const addProduct = document.getElementById('create');
  addProduct.addEventListener('click', () => createProduct(row));
});
