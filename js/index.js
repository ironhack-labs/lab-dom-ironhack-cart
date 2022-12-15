let cartProduct = document.querySelector('tbody');

// ITERATION 1

function updateSubtotal(product) {
  const price = +product.querySelector('.price span').innerText;
  const quantity = +product.querySelector('.quantity input').value;
  let subtotal = product.querySelector('.subtotal span');
  subtotal.innerText = price * quantity;
  return subtotal.innerText;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const row1 = document.querySelector('.product');
  updateSubtotal(row1);
  const row2 = document.querySelector('.product2');
  updateSubtotal(row2);
  // ITERATION 3
  //... your code goes here total-value
  let total = document.querySelector("[id='total-value'] span");
  console.log(total);
  total.innerText = +updateSubtotal(row1) + +updateSubtotal(row2);
  console.log(total);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  //console.log('The target in remove is:', target);
  //... your code goes here
  cartProduct.removeChild(target.parentNode.parentNode);
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const productName = document.querySelector('.create-product input[id="productName"]');
  const productPrice = document.querySelector('.create-product input[id="productPrice"]');

  const newProduct = document.createElement('tr');
  newProduct.setAttribute('class', 'product');

  newProduct.innerHTML = `<td class="name">
    <span>${productName.value}</span>
  </td>
  <td class="price">$<span>${productPrice.value}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>`;

  cartProduct.appendChild(newProduct);
  let removeBtnNew = newProduct.querySelector('.btn-remove');
  removeBtnNew.addEventListener('click', removeProduct);

  productName.value = "";
  productPrice.value = 0;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  // Query the document for all "Remove" buttons
  const removeButtons = document.getElementsByClassName('btn-remove');
  // Loop through the buttons and add a click event listener to each
  [...removeButtons].forEach(button => {
    button.addEventListener('click', removeProduct);
  });

  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);
});
