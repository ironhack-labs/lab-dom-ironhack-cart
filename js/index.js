// ITERATION 1

function updateSubtotal(product) {
  // console.log('Calculating subtotal, yey!');
  //... your code goes here
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  //you can extract the value from an input by accessing an the input element's value property.
  const subTotalValue = Number(quantity.value * price.innerHTML);
  const subtotal = product.querySelector('.subtotal span');
  return (subtotal.innerHTML = subTotalValue);
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const getProducts = document.querySelectorAll('.product');
  let total = document.querySelector('#total-value span');
  let suma = 0;
  getProducts.forEach((product) => {
    suma += updateSubtotal(product);
  });

  // ITERATION 3
  //... your code goes here
  return (total.innerHTML = suma);

  // ITERATION 4
}
function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  let child = document.querySelector(target);
  target.removeChild(child);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const productsContainer = document.querySelector('tbody');
  const newName = document.querySelector('.create-product td input');
  const newPrice = document.querySelector('.new-price');
  const product = document.createElement('tr');
  product.classList.add('product');
  product.innerHTML = `
  <td class="name">
    <span>${newName.value}</span>
  </td>
  <td class="price">$<span>${newPrice.value}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>

`;
  productsContainer.appendChild(product);
  updateSubtotal(productsContainer);
  //clear the input fields
  newPrice.value = '';
  newName.value = '';
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});

window.addEventListener('load', () => {
  const newProduct = document.getElementById('create');
  newProduct.addEventListener('click', createProduct);
});

//remove listener
window.addEventListener('load', () => {
  const removeItem = document.querySelector('.btn, .btn-remove');
  removeItem.addEventListener('click', removeProduct);
});
