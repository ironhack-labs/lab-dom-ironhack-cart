// ITERATION 1

function updateSubtotal(product) {


  //... your code goes here
  const priceElm = product.querySelector('.price span').innerHTML;
  const quantityElm = product.querySelector('.quantity input').value;
  const subtotal = Number(priceElm) * Number(quantityElm);
  const subtotalElm = product.querySelector('.subtotal span');
  subtotalElm.innerHTML = subtotal
  return subtotal;

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const allProducts = document.getElementsByClassName('product');
  const productsCopy = [...allProducts];
  let total = 0;
  productsCopy.forEach(product => total += updateSubtotal(product))
  const totalElm = document.querySelector('#total-value span')
  totalElm.innerText = total;
  const removeButtons = document.querySelectorAll('.btn-remove');
  removeButtons.forEach(button => {
    button.addEventListener('click', removeProduct)
  })




  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const buttom = event.currentTarget;
  const productRow = buttom.parentNode.parentNode;
  const cartBody = productRow.parentNode;
  cartBody.removeChild(productRow);
  const allProducts = document.getElementsByClassName('product');
  const productsCopy = [...allProducts];
  let total = 0;
  productsCopy.forEach(product => total += updateSubtotal(product));
  const totalElm = document.querySelector('#total-value span');
  totalElm.innerText = total;
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const nameInput = document.querySelector('.create-product input[type="text"]');
  const priceInput = document.querySelector('.create-product input[type="number"]');
  const name = nameInput.value;
  const price = parseFloat(priceInput.value);
  const newRow = document.createElement('tr');
  newRow.className = 'product';
  newRow.innerHTML = `
  <td class="name">
    <span>${name}</span>
  </td>
  <td class="price">
    $<span>${price.toFixed(2)}</span>
  </td>
  <td class="quantity">
    <input type="number" value="0" min="0">
  </td>
  <td class="subtotal">
    $<span>0.00</span>
  </td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
`;
  const tableBody = document.querySelector('tbody');
  tableBody.appendChild(newRow);
  const removeButton = newRow.querySelector('.btn-remove');
  removeButton.addEventListener('click', removeProduct);
  newInput.value = '';
  priceInput.value = '';
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);
});
