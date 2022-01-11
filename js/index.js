// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;
  let subtotal = product.querySelector('.subtotal span');
  const result = Number(price) * Number(quantity);
  subtotal.innerText = result;
  return result;
}

function calculateAll() {
  // ITERATION 2
  const allProducts = document.querySelectorAll('.product');
  let counter = 0;
  console.log(allProducts.length);
  for (let i = 0; i < allProducts.length; i++) {
    counter += updateSubtotal(allProducts[i]);
  }

  // ITERATION 3
  let total = document.querySelector('#total-value span');
  total.innerHTML = counter;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  target.parentNode.parentNode.remove();
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  const newProductName = document.querySelector(
    '.create-product td input:first-child'
  ).value;
  const newProductPrice = document.querySelector('#new-price-value').value;
  const parent = document.getElementById('table-body');
  const newProduct = document.createElement('tr');
  newProduct.innerHTML = `<tr class='product'>
  <td class='name'>
    <span>${newProductName}</span>
  </td>
  <td class='price'>$<span>${newProductPrice}</span></td>
  <td class='quantity'>
    <input type='number' value='0' min='0' placeholder="Quantity" />
  </td>
  <td class='subtotal'>$<span>0</span></td>
  <td class='action'>
    <button class='btn btn-remove'>Remove</button>
  </td>
</tr>`;
  console.log(newProduct);
  parent.appendChild(newProduct);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  //... your code goes here
  const removeButtons = document.getElementsByClassName('btn btn-remove');
  console.log(removeButtons);
  for (let j = 0; j < removeButtons.length; j++) {
    removeButtons[j].addEventListener('click', removeProduct);
  }

  const addProduct = document.getElementById('create');
  addProduct.addEventListener('click', createProduct);
});
