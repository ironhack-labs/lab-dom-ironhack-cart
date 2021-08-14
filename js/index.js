// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = price * quantity;
  const subtotalElement = product.querySelector('.subtotal span');

  subtotalElement.innerHTML = subtotal;
  return subtotal;
}

function calculateAll() {
  // ITERATION 2

  const elements = document.getElementsByClassName('product');
  let total = 0;
  for (let i = 0; i < elements.length; i++) {
    total += updateSubtotal(elements[i]);
  }

  // ITERATION 3
  const totalElement = document.querySelector('#total-value span');
  totalElement.innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const toRemove = target.parentNode.parentNode;

  // Deletes the product
  if (toRemove.parentNode) {
    toRemove.parentNode.removeChild(toRemove);
  }

  //Updates the total substracting the subtotal of the removed product
  let totalElement = document.querySelector('#total-value span');
  const subtotalElement = toRemove.querySelector('.subtotal span');
  const newTotal = totalElement.innerHTML - subtotalElement.innerHTML;

  totalElement.innerHTML = newTotal;
}

function updateRemoveBtns() {
  const removeProductBtns = document.getElementsByClassName('btn-remove');
  for (let i = 0; i < removeProductBtns.length; i++) {
    removeProductBtns[i].addEventListener('click', removeProduct);
  }
}

// ITERATION 5

function createProduct() {
  const cart = document.querySelector('#cart tbody');

  //Select the nodes that contain the new product's name and price
  let productName = document.querySelector('.new-product-name input');
  let productPrice = document.querySelector('.new-product-price input');

  //String that will be included in the .html with the productName and productPrice
  const newProduct = `
    <tr class="product">
    <td class="name">
      <span>${productName.value}</span>
    </td>
    <td class="price">$<span>${productPrice.value}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
     <button class="btn btn-remove">Remove</button>
    </td>
  </tr>
  `;

  cart.innerHTML += newProduct;

  //Resets the New Product input fields
  productName.value = '';
  productPrice.value = 0;

  //Updates the remove buttons event listener so it is functional also for the new product
  updateRemoveBtns();
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  updateRemoveBtns();

  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);
});

