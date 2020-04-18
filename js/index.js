// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  let price = parseFloat(product.querySelector('.price span').innerHTML);
  let quantity = parseFloat(product.querySelector('.quantity input').value);

  let subtotal = product.querySelector('.subtotal span');
  subtotal.innerHTML = (quantity * price).toFixed(2);

  return (quantity * price);
}

function calculateAll() {
  console.log('Calculating ALL');
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);

  // ITERATION 2
  //... your code goes here
  const allProducts = document.querySelectorAll('.product');
  let totalCart = [...allProducts].reduce((tot, prod) => tot + updateSubtotal(prod), 0);

  // ITERATION 3
  //... your code goes here
  let totalElem = document.querySelector('#total-value span');
  totalElem.innerHTML = totalCart.toFixed(2);

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const tbody = target.parentElement.parentElement.parentElement;
  const trow = target.parentElement.parentElement;
  tbody.removeChild(trow);

  calculateAll();

}

// ITERATION 5

function createProduct(event) {
  const target = event.currentTarget;
  const productName = target.querySelector('');

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtns = document.querySelectorAll('.btn-remove');
  [...removeBtns].forEach(btn => btn.addEventListener('click', removeProduct));

  const addProductBtn = document.getElementById('create');
  addProductBtn.addEventListener('click', createProduct);
});