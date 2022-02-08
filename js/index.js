// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');

  price.value = price.innerText;

  const subTotalProduct = price.value * quantity.value;
  const subTotal = product.querySelector('.subtotal span');
  subTotal.innerText = subTotalProduct;

  return subTotalProduct;

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
  let totalProducts = 0;
  const allProducts = document.getElementsByClassName('product');

  for (let i = 0; i < allProducts.length; i++) {
    totalProducts += updateSubtotal(allProducts[i]);
  }

  // ITERATION 3
  //... your code goes here

  const total = document.getElementById('numberTotalValue');
  total.innerHTML = totalProducts;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here

  const productToRemove = target.parentNode.parentNode;
  productToRemove.parentNode.removeChild(productToRemove);

  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const newProductName = document.getElementById('newName');
  const newProductPrice = document.getElementById('newPrice');
  const list = document.getElementById('listProducts');
  const entry = `        <tr class="product">
  <td class="name">
    <span>${newProductName.value}</span>
  </td>
  <td class="price">$<span>${newProductPrice.value}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
</tr>`;

  list.insertAdjacentHTML('beforeend', entry);
  newProductName.value = '';
  newProductPrice.value = '0';
  remove();
}

function remove() {
  const removeBtn = document.querySelectorAll(`.btn-remove`);
  for (let i = 0; i < removeBtn.length; i++) {
    removeBtn[i].addEventListener(`click`, removeProduct);
    console.log(removeBtn);
  }
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  remove();

  const createProductBtn = document.getElementById(`create`);
  createProductBtn.addEventListener(`click`, createProduct);
  //... your code goes here
});
