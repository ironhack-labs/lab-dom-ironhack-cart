// ITERATION 1

function updateSubtotal(product) {
  let price = product.querySelector('.price span');
  let quantity = product.querySelector('.quantity input');

  let subtotal = Number(price.innerHTML) * Number(quantity.value);

  let subT = product.querySelector('.subtotal span');

  return (subT.innerHTML = subtotal);
}

function calculateAll() {
  // ITERATION 2
  const allProducts = document.getElementsByClassName('product');
  const twoProductsArr = [...allProducts];
  const sum = twoProductsArr.forEach((el) => {
    updateSubtotal(el);
  });

  // ITERATION 3
  const total = document.querySelector('#total-value span');
  const subtotals = document.querySelectorAll('.subtotal span');
  const totalsArr = [...subtotals];
  let totalSum = 0;
  totalsArr.forEach((product) => {
    totalSum += Number(product.innerHTML);
  });
  total.innerHTML = totalSum;
}

// ITERATION 4

// ITERATION 5

/*function createProduct() {
  let productList = document.querySelector('tbody');

  let newProduct = document.createElement('tr', { class: 'product' });

  newProduct.innerHTML = `
  <td class="name">
      <span>Ironhack Beach Towel</span>
    </td>
    <td class="price">$<span>12.50</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  `;

  productList.appendChild(newProduct);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
}); */
