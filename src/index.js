// ITERATION 1

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector('.price span').innerHTML
  const quantity = product.querySelector('.quantity input').value
  const amount = price * quantity
  const subtotal = product.querySelector('.subtotal span')
  subtotal.innerHTML = amount
  return amount
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const products = document.getElementsByClassName('product')
  let totalPrice = 0
  for (let i = 0; i < products.length; i++){
    totalPrice += updateSubtotal(products[i])
  }

  // ITERATION 3
  //... your code goes here
  const totalValue = document.querySelector('#total-value span')
  totalValue.innerHTML = totalPrice
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  //console.log('The target in remove is:', target);
  //... your code goes here
  const productRow = target.parentNode.parentNode
  const tbody = productRow.parentNode
  tbody.removeChild(productRow)
  calculateAll()
}

// ITERATION 5

function createProduct() {

  //... your code goes here
  const productNameInput = document.querySelector('.create-product input[type="text"]')
  const productPriceInput = document.querySelector('.create-product input[type="number"]')
  const productName = productNameInput.value
  const productPrice = parseFloat(productPriceInput.value).toFixed(2)

  if (productName.trim() === '' || isNaN(productPrice) || productPrice <= 0) {
    alert('Please enter a valid product name and price.')
    return
  }

  const newProduct = document.createElement('tr')
  newProduct.classList.add('product')
  newProduct.innerHTML = `
    <td class="name"><span>${productName}</span></td>
    <td class="price">$<span>${productPrice}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity">
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  `
  const cart = document.querySelector('#cart tbody')
  cart.appendChild(newProduct)

  newProduct.querySelector('.btn-remove').addEventListener('click', removeProduct)

  productNameInput.value = ''
  productPriceInput.value = 0
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeButtons = document.getElementsByClassName('btn-remove')
  for (let i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener('click', removeProduct)
  }

  document.getElementById('create').addEventListener('click', createProduct)
});
