// ITERATION 1

function updateSubtotal(product) {
  let price = parseFloat(product.querySelector('.price span').innerHTML);
  let quantity = parseFloat(product.querySelector('.quantity input').value);

  let subtotal = product.querySelector('.subtotal span');
  subtotal.innerHTML = (quantity * price).toFixed(2);

  return (quantity * price);
}

function calculateAll() {
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
  const newProduct = document.querySelector('.create-product');
  const inputs = newProduct.querySelectorAll('input');
  const productName = [...inputs][0].value;
  const price = parseFloat([...inputs][1].value);

  const base = document.querySelector('.product');
  const newRow = base.cloneNode(true);

  const nameClone = newRow.querySelector('.name span');
  nameClone.innerHTML = productName;
  const priceClone = newRow.querySelector('.price span');
  priceClone.innerHTML = price.toFixed(2);
  const qtyClone = newRow.querySelector('.quantity input');
  qtyClone.value = 0;
  qtyClone.addEventListener('click', calculateAll);
  const subClone = newRow.querySelector('.subtotal span');
  subClone.innerHTML = 0;
  const btnClone = newRow.querySelector('.btn-remove');
  btnClone.addEventListener('click', removeProduct);

  base.parentElement.appendChild(newRow);

  //Reseting add Form
  [...inputs][0].value = '';
  [...inputs][1].value = 0;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtns = document.querySelectorAll('.btn-remove');
  [...removeBtns].forEach(btn => btn.addEventListener('click', removeProduct));

  const addProductBtn = document.getElementById('create');
  addProductBtn.addEventListener('click', createProduct);

  const numBtns = document.querySelectorAll('.quantity input');
  [...numBtns].forEach(btn => btn.addEventListener('click', calculateAll));
});