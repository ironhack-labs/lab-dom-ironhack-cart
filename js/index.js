// ITERATION 1


function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  let total = price * quantity;
  product.querySelector('.subtotal').innerHTML = total;
  
  return total
}

function calculateAll() {
  const productList = document.querySelectorAll('.product');
  let total = 0;
  productList.forEach(product=> total += updateSubtotal(product));
  document.querySelector('#total-value span').innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const parent = target.parentNode.parentNode;
  parent.parentNode.removeChild(parent)
}

// ITERATION 5

function createProduct() {
  
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtn = document.querySelectorAll('.btn-remove');
  removeBtn.forEach(button => button.addEventListener('click', removeProduct));

  const createBtn = document.getElementById('create');
  createBtn.addEvenetListener('click', createProduct);
});
