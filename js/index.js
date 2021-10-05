// ITERATION 1

function updateSubtotal(product) {
  const price = +product.querySelector('.price span').textContent;
  const quantity = +product.querySelector('.quantity input').value;
  const subTotal = price * quantity;
  product.querySelector('.subtotal span').textContent = subTotal;
  console.log('price: ', price);
  console.log('quantity: ', quantity);
  console.log('subTotal: ', subTotal);
  return subTotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const products = document.querySelectorAll('.product');
  let total = 0;
  [...products].forEach((singleProduct) => {
    updateSubtotal(singleProduct);
    total += +singleProduct.querySelector('.subtotal span').textContent;
    // Karla's solution
    // total = +updateSubtotal(singleProduct);
  });
  document.querySelector('#total-value span').textContent = total.toString();
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  console.log('total: ', total);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  target.closest('tr').remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const newProduct = document.querySelector('.product').cloneNode(true);
  const createProduct = document.querySelector('.create-product');
  const name = createProduct.querySelector('input[type="text"]').value;
  newProduct.querySelector('.name span').textContent = name;
  const price = createProduct.querySelector('input[type="number"]').value;
  newProduct.querySelector('.price span').textContent = price.toString();
  newProduct.querySelector('.quantity input').value = '0';
  newProduct.querySelector('.subtotal span').textContent = '0';
  newProduct
    .querySelector('.btn-remove')
    .addEventListener('click', removeProduct);

  document.querySelector('tbody').append(newProduct);
  createProduct.querySelector('input[type="text"]').value = '';
  createProduct.querySelector('input[type="number"]').value = 0;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeBtn = document.querySelectorAll('.btn-remove');
  [...removeBtn].forEach((button) =>
    button.addEventListener('click', removeProduct)
  );
  document.querySelector('#create').addEventListener('click', createProduct);
});
