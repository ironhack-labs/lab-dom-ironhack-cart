// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input')
  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerText = Number((price.innerHTML)) * Number((quantity.value));
  return subtotal

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2

  const allProducts = document.getElementsByClassName('product');

  for (let i=0; i<allProducts.length; i++) {
    
  updateSubtotal(allProducts[i]);

  }

  console.log(allProducts)

  // ITERATION 3
  const total = document.querySelector('#total-value span');
  const allSubtotals = document.querySelectorAll('.subtotal span');
  let finalTotal = 0;

  
  for (let j=0; j<allSubtotals.length; j++) {
    finalTotal +=  Number(allSubtotals[j].innerHTML);

  }

  total.innerHTML = finalTotal;

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  let rowToRemove = target.parentNode.parentNode;
  let parent = rowToRemove.parentNode;
  parent.removeChild(rowToRemove);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const newProductName = document.querySelector('.create-product input');
  const newProductPrice = document.querySelector('.create-product input[type="number"]');
  const fixedPrice = Number(newProductPrice.value).toFixed(2);

  let newRow = document.createElement('tr');
  newRow.innerHTML = `<td class="name">
    <span>${newProductName.value}</span>
  </td>
  <td class="price">$<span>${fixedPrice}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>`;

  newRow.classList.add('product');

  let parent = document.querySelector('#cart tbody');
  parent.appendChild(newRow);

  const removeBtn = newRow.querySelector('.btn-remove');
  removeBtn.addEventListener('click', removeProduct);
  
  newProductName.value = '';
  newProductPrice.value = 0;

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtn = document.getElementsByClassName('btn-remove');
  for (let i=0; i<removeBtn.length; i++) {
  removeBtn[i].addEventListener('click', removeProduct);
  }

  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct);

  //... your code goes here
});
