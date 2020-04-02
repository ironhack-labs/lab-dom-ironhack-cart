// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subtotalPrice = price.textContent * quantity.value
  const subtotal = product.querySelector('.subtotal span')
  subtotal.textContent = `${subtotalPrice}`
  console.log(subtotal.textContent)
  return subtotalPrice

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const products = document.querySelectorAll(".product")
  let total = 0
  products.forEach(product => {
    total += updateSubtotal(product)
  });
  // ITERATION 3
  const totalValue = document.querySelector('#total-value span')
  totalValue.textContent = `${total}`
  return total

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target.parentNode.parentNode);
  target.parentNode.parentNode.parentNode.removeChild(target.parentNode.parentNode)
  calculateAll()
  //... your code goes here
}

// ITERATION 5

function createProduct(event) {
  const name = document.querySelector('td:nth-child(1) input')
  const price = document.querySelector('td:nth-child(2) input')
  newProduct = document.createElement('tr')
  document.querySelector('tbody').appendChild(newProduct)
  newProduct.innerHTML = `
  <td class="name">
    <span>${name.value}</span>
  </td>
  <td class="price">$<span>${price.value}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>`
  newProduct.classList.add("product")
  removeButtonListener()
  name.value = ""
  price.value = ""

}

function removeButtonListener() {
  let removeButtons = document.querySelectorAll('.btn-remove')
  removeButtons.forEach(removebtn => {
    removebtn.addEventListener('click', removeProduct)
  });
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  removeButtonListener()

  const createButton = document.querySelector('#create')
  createButton.addEventListener('click', createProduct);

  //... your code goes here
});