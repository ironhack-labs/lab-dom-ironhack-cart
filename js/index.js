let product = document.querySelectorAll('.product');
let removeBtn = document.querySelectorAll('.btn-remove');
const table = document.querySelector('tbody');
const createBtn = document.querySelector('#create');

// ITERATION 1

function updateSubtotal() {
  console.log('Calculating subtotal, yey!');

  let price = document.querySelectorAll('.price span');
  let subtotal = document.querySelectorAll('.subtotal span');
  let acc = 0;
  [...price].map((eachPrice, i) => {
    let unit = document.querySelectorAll('.amount');
    unit = [...unit][i].value;
    let parcial = Number(eachPrice.innerHTML) * unit;
    [...subtotal][i].innerHTML = parcial;
    acc += parcial;
  });
  return acc;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let total = document.querySelector('#total-value span');
  let totalSum = updateSubtotal();

  // ITERATION 3
  total.innerHTML = totalSum;
}

// ITERATION 4
function removeProduct(event) {
  let currentProduct = event.target.parentNode.parentNode;
  table.removeChild(currentProduct);
  calculateAll();
}

// ITERATION 5
function createProduct() {
  let productName = document.querySelector(
    ".create-product input[type='text']"
  );
  let productPrice = document.querySelector(
    ".create-product input[type='number']"
  );
  let subtotal = document.querySelectorAll('.subtotal span');

  if (productPrice.value != '' && productName.value != '') {
    table.innerHTML += `
        <tr class= "product">
            <td class="name">
                <span>${productName.value}</span>
            </td>
            <td class="price">$<span>${productPrice.value}</span></td>
            <td class="quantity">
                <input class="amount" type="number" value="0" min="0" placeholder="Quantity" />
            </td>
            <td class="subtotal">$<span>0</span></td>
            <td class="action">
                <button class="btn btn-remove">Remove</button>
            </td>
        </tr>`;

    removeBtn = document.querySelectorAll('.btn-remove');
    [...removeBtn].map((elem) =>
      elem.addEventListener('click', function (e) {
        removeProduct(e);
      })
    );

    productName.value = '';
    productPrice.value = '';
  } else {
    alert('You must enter a price and a product');
  }
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
});

[...removeBtn].map((elem) =>
  elem.addEventListener('click', function (event) {
    removeProduct(event);
  })
);

createBtn.addEventListener('click', function (e) {
  createProduct(e);
});
