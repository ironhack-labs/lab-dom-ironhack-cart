// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity input')
  const subtTotal = product.querySelector('.subtotal span')
  const subtotalPrice = Number(price.innerText) * Number(quantity.value)
  subtTotal.innerText = subtotalPrice
  return subtotalPrice
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const products = document.querySelectorAll('.product');
  let total = 0;
  products.forEach(function (product) {
    updateSubtotal(product)
    total += updateSubtotal(product)
  });

  // ITERATION 3
  const totalPrice = document.querySelector('#total-value span')
  totalPrice.innerText = total
}

// ITERATION 4

function removeProduct(event) {
  // console.log(event)
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  target.parentNode.parentNode.parentNode.removeChild(target.parentNode.parentNode)
  calculateAll()
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const productNameInput = document.querySelector('#cart > tfoot > tr > td:nth-child(1) > input[type=text]');
  const productPriceInput = document.querySelector('#cart > tfoot > tr > td:nth-child(2) > input[type=number]');
  const tbody = document.querySelector('tbody')
  const newRow = document.createElement('tr')
  tbody.appendChild(newRow)
  newRow.innerHTML = `
    <td class="name">
      <span>${productNameInput.value}</span>
    </td>
    <td class="price">$<span>${productPriceInput.value}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  `
  newRow.classList.add('product')
  productNameInput.value = ''
  productPriceInput.value = '0'
  calculateAll();
  const newRowRemoveBtn = newRow.childNodes[9].childNodes[1]
  newRowRemoveBtn.addEventListener('click', removeProduct)
  console.log(newRowRemoveBtn)
}
window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  const removeBtn = document.querySelectorAll('.btn.btn-remove')
  const createProductBtn = document.querySelector('#create.btn')
  calculatePricesBtn.addEventListener('click', calculateAll);
  removeBtn.forEach(function (btn) {
    btn.addEventListener('click', removeProduct)
  })
  createProductBtn.addEventListener('click', createProduct)
  //... your code goes here
});
