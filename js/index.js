// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  console.log(price)
  const quantity = product.querySelector('.quantity input').value;
  console.log(quantity)
  const subtotal = Number(price) * Number(quantity);
  console.log('Calculating subtotal, yey!');
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
  const productList = document.querySelectorAll('.product');
  const totalValue = document.querySelector('#total-value span');
  const totalAmount = [];
  productList.forEach((product) => {
    updateSubtotal(product);
    totalAmount.push(updateSubtotal(product));
  });

  // ITERATION 3
  totalValue.innerHTML = totalAmount.reduce((sum, subtotal) => {
    return sum + subtotal;
  }, 0);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.target;
  const row = target.parentNode.parentNode;
  row.remove();
}

// ITERATION 5

function createProduct() {
  const nameInput = document.querySelector('.create-product input[type="text"]');
  const nameValue = nameInput.value;
  const priceInput = document.querySelector('.create-product input[type="number"]');
  const priceValue = priceInput.valueAsNumber;

  const newProduct = `
  <tr class="product">
    <td class="name">
      <span>${nameValue}</span>
    </td>
    <td class="price">$<span>${priceValue}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  </tr>
  `;

  const tbody = document.querySelector('#cart tbody');
  tbody.innerHTML += newProduct;

  const removeBtns = document.getElementsByClassName('btn-remove');
  for (let button of removeBtns) {
    button.addEventListener('click', removeProduct);
  }

  nameInput.value = '';
  priceInput.value = 0;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtns = document.getElementsByClassName('btn-remove');
  for (let button of removeBtns) {
    button.addEventListener('click', removeProduct);
  }

  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct);
});
