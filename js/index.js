// ITERATION 1

function updateSubtotal(products) {
  // console.log('Calculating subtotal, yey!');
  //... your code goes here
  let totalArr = [];
  for (let item of products) {
    let price = item.querySelector('.price span');
    let quantity = item.querySelector('.quantity input');
    let subtotal = item.querySelector('.subtotal span');
    price = parseFloat(price.innerHTML);
    quantity = parseFloat(quantity.value);
    subtotal.innerHTML = `${price * quantity}`;
    totalArr.push(price * quantity);
  }
  return totalArr.reduce((total, item) => total + item, 0);
}

function calculateAll() {
  const totalTag = document.querySelector('#total-value span');
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // ITERATION 1 & 2

  const products = document.getElementsByClassName('product');

  // ITERATION 3
  let total = updateSubtotal(products);
  totalTag.innerHTML = total;
  // end of test
}

// ITERATION 4

function removeProduct(btn) {
  let row = btn.parentNode.parentNode;
  row.parentNode.removeChild(row);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const inputName = document.getElementById('newProductName');

  const inputPrice = document.getElementById('newProductPrice');

  const cartTableBodyElement = document.querySelector('#cart tbody');

  cartTableBodyElement.innerHTML += `
      <tr class="product">
        <td class="name">
          <span>${inputName.value}</span>
        </td>
        <td class="price">$<span>${inputPrice.value}</span></td>
        <td class="quantity">
          <input type="number" value="0" min="0" placeholder="Quantity" />
        </td>
        <td class="subtotal">$<span>0</span></td>
        <td class="action">
          <button onclick="removeProduct(this)" class="btn btn-remove">Remove</button>
        </td>
      </tr>
    `;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  // const removeProductBtn = document.querySelector('.btn-remove');
  // removeProductBtn.addEventListener('click', removeProduct);
  const addProduct = document.getElementById('create');
  addProduct.addEventListener('click', createProduct);
  //... your code goes here
});
