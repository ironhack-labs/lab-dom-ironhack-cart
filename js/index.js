// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = Number(product.querySelector('.price span').innerHTML);
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = price * quantity;
  const subtotalAmount = (product.querySelector('.subtotal span').innerHTML = subtotal)
  return subtotalAmount;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const allProducts = document.querySelectorAll('.product');
  allProducts.forEach(product => updateSubtotal(product));

  // ITERATION 3
  //... your code goes here
  const totalPrice = [...allProducts].reduce((acc, val) => acc + updateSubtotal(val), 0);
  const totalValue = (document.querySelector('#total-value span').innerHTML = totalPrice);
}

// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget.parentNode.parentNode;
  //... your code goes here
  console.log('The target in remove is:', target.parentNode.parentNode);
  target.remove();

}

// ITERATION 5

function createProduct() {
  const nameNewProduct = document.querySelector('.create-product input[type="text"]');
  const priceNewProduct = document.querySelector('.create-product input[type="number"]');
  const tr = document.createElement('tr');
  tr.className = 'product';
  tr.innerHTML = `
  <td class="name">
    <span>${nameNewProduct.value}</span>
  </td>
  <td class="price">$<span>${priceNewProduct.value}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
  `
  const table = document.querySelector('#cart tbody');
  table.appendChild(tr)
  tr.querySelector('.btn-remove').addEventListener('click', removeProduct)
  nameNewProduct.value = '';
  priceNewProduct.value = 0;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  //... your code goes here
  const removeProductsButtons = document.getElementsByClassName('btn-remove');
  Array.from(removeProductsButtons).forEach(removeButton => removeButton.addEventListener('click', removeProduct))
  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct);
  //... your code goes here
});