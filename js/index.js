function updateSubtotal(product) {
  const priceHtmlElement = product.querySelector('.price span');
  const price = Number(priceHtmlElement.innerHTML);

  const quantityHtmlElement = product.querySelector('.quantity input');
  const quantity = Number(quantityHtmlElement.value);

  const subtotal = price * quantity;
  product.querySelector('.subtotal span').textContent = subtotal;

  // alert('Calculating subtotal, yey!\n' + 'Price: ' + price + '\nQuantity: ' + quantity);
  return subtotal;

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  let cartTotal = 0;
  const products = document.querySelectorAll('.product');
  console.log(products);

  /** BOTH ARE ACCEPTABLE SOLUTIONS FOR ITERATING THROUGH OUR PRODUCTS */
  // [...products].forEach(element => {
  //   cartTotal = cartTotal + updateSubtotal(element);
  // })
  /** BOTH ARE ACCEPTABLE SOLUTIONS FOR ITERATING THROUGH OUR PRODUCTS */
  for (let counter = 0; counter < products.length; counter++) {
    cartTotal = cartTotal + updateSubtotal(products[counter]);
  }

  document.querySelector('#total-value span').innerText = cartTotal;

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const rowToBeRemoved = target.parentNode.parentNode;
  const rowParent = target.parentNode.parentNode.parentNode;
  rowParent.removeChild(rowToBeRemoved);

  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const productNameInputElement = document.querySelector(
    '.create-product [type="text"]'
  );
  const productName = productNameInputElement.value;

  const productPriceInputElement = document.querySelector(
    '.create-product [type="number"]'
  );
  const productPrice = productPriceInputElement.value;

  console.log(productName, productPrice);

  const tableBody = document.querySelector('tbody');

  tableBody.insertAdjacentHTML(
    'beforeend',
    `
  <tr class="product">
    <td class="name">
      <span>${productName}</span>
    </td>
    <td class="price">$<span>${Number(productPrice).toFixed(2)}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  </tr>
  `
  );

  const removeButtons = document.querySelectorAll('.btn-remove');

  const newRemoveButton = removeButtons[removeButtons.length - 1];

  newRemoveButton.addEventListener('click', removeProduct);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeButtons = document.querySelectorAll('.btn-remove');
  console.log(removeButtons);
  for (let i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener('click', removeProduct);
  }

  const createButton = document.querySelector('#create');
  createButton.addEventListener('click', createProduct);
});
