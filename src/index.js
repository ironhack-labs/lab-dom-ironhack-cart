// ITERATION 1

function updateSubtotal(product) {
  let price = product.querySelector('.price span').innerHTML;
  let quantity = product.querySelector('.quantity input').value;

  let total = price * quantity;
  let subtotal = product.querySelector('.subtotal span');

  subtotal.innerHTML = total;
  console.log(total)
  console.log('Calculating subtotal, yey!');

  return total;
}

function calculateAll() {
  /* // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test */

  // ITERATION 2

  const totalProducts = document.getElementsByClassName('product');

  let total = 0;
  for(let i = 0; i < totalProducts.length; i++) {
    total += updateSubtotal(totalProducts[i]);
  } 

  let showTotal = document.querySelector('#total-value span');
  showTotal.innerHTML = total

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  const deleteRow = target.parentNode.parentNode;
  const parentRow = target.parentNode.parentNode.parentNode;

  parentRow.removeChild(deleteRow)

  calculateAll();
}

// ITERATION 5

function createProduct() {
  const productName = document.getElementById('productName').value;
  const productPrice = document.getElementById('productPrice').value;

  let createRow = document.getElementById('cart-row');
  let addRow = document.createElement('tr');
  
  addRow.classList.add('product');

  addRow.innerHTML = `<td class="name">
  <span>${productName}</span>
  </td>
  <td class="price">$<span>${productPrice}</span></td>
  <td class="quantity">
  <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
  <button class="btn btn-remove">Remove</button>
  </td>`
  
  createRow.appendChild(addRow)
  
  const remove = document.getElementsByClassName('btn-remove');
  for(let i = 0; i < remove.length; i++) {
    remove[i].addEventListener('click', removeProduct);
  }

  //BONUS EXTRA DOS BONUS
  const clearValueName = document.getElementById('productName');
  clearValueName.value = '';
  const clearValuePrice = document.getElementById('productPrice');
  clearValuePrice.value = 0;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //Remove Product
  const remove = document.getElementsByClassName('btn-remove');
  for(let i = 0; i < remove.length; i++) {
    remove[i].addEventListener('click', removeProduct);
  }

  //Create Product
  /* const productName = document.querySelector('.create-product input[0]');
  const productPrice = document.querySelector('.create-product input[1]'); */

  const create = document.querySelector('#create');
  create.addEventListener('click', createProduct);
});
