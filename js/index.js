// ITERATION 1

function updateSubtotal(product) {
  let price = Number(product.querySelector('.price span').innerText);
  let quantity = Number(product.querySelector('.quantity input').value);
  let subtotal = price * quantity;
  product.querySelector('.subtotal span').innerText = subtotal;
  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  let total = 0;
  let products = document.querySelectorAll('.product');
  products.forEach((elem) => {
    total += updateSubtotal(elem);
  });

  // ITERATION 3
  //... your code goes here
  document.querySelector('#total-value span').innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  target.closest('.product').remove();
}

// ITERATION 5

function createProduct() {
  let productName = document.querySelector('.create-product td input').value;
  let unitPrice = document.querySelector(
    '.create-product td:nth-of-type(2) input'
  ).value;
  if (productName === '' && unitPrice === 0) {
    alert('Debes rellenar el nombre del producto y el precio');
  } else if (productName === '') {
    alert('Debes rellenar el nombre del producto');
  } else if (Number(unitPrice) === 0) {
    alert('Debes rellenar el precio');
  } else {
    document.querySelector('tbody').innerHTML += `<tr class="product">
    <td class="name">
      <span>${productName}</span>
    </td>
    <td class="price">$<span>${unitPrice}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  </tr>
  `;
  }
  createRemoveEvents();
}

function createRemoveEvents() {
  let removeButtons = document.querySelectorAll('.btn-remove');
  removeButtons.forEach((elem) => {
    elem.addEventListener('click', removeProduct);
  });
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  // Movido a function arriba para no repetir codigo
  // let removeButtons = document.querySelectorAll('.btn-remove');
  // removeButtons.forEach((elem) => {
  //   elem.addEventListener('click', removeProduct);
  // });

  createRemoveEvents();

  let createButton = document.querySelector('#create');
  createButton.addEventListener('click', createProduct);
});
