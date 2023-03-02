// ITERATION 1

function updateSubtotal(product) {
  const priceElm = product.querySelector(".price span");
  const quantityElm = product.querySelector(".quantity input");
  const subtotalElm = product.querySelector(".subtotal span");

  const priceValue = priceElm.innerHTML;
  const quantityValue = quantityElm.value;

  const subquantityValue = priceValue * quantityValue;

  subtotalElm.innerHTML = subquantityValue;

  return subquantityValue;
}

// ITERATION 2 / 3
function calculateAll() {
  const productElm = document.getElementsByClassName("product");
  const totalProdValueElm = document.querySelector("#total-value span");
  let totalProductsPrice = 0;

  for (let i = 0; i < productElm.length; i++) {
    const currentProduct = productElm[i];
    const currentTotal = updateSubtotal(currentProduct);
    totalProductsPrice += currentTotal;
  }

  totalProdValueElm.innerHTML = totalProductsPrice;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const targetProductRow = target.parentNode.parentNode;
  targetProductRow.parentNode.removeChild(targetProductRow);
  
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const inputProductName = document.querySelector('.create-product input[type="text"]');
  const inputProductPrice = document.querySelector('.create-product input[type="number"]');

  const valueProductName = inputProductName.value;
  const valueProductPrice = Number(inputProductPrice.value).toFixed(2);

  const fullTableBody = document.querySelector('#cart tbody');
  const newProductRow = fullTableBody.insertRow(-1);

  newProductRow.classList.add('product');

  newProductRow.innerHTML = `
    <td class="name">
      <span>${valueProductName}</span>
    </td>
    <td class="price">
      $<span>${valueProductPrice}</span>
    </td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">
      $<span>0</span>
    </td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  `;

  const removeBtn = newProductRow.querySelector('.btn-remove');
  removeBtn.addEventListener('click', removeProduct);

  inputProductName.value = '';
  inputProductPrice.value = '';

  calculateAll();
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtn = document.querySelectorAll('.btn-remove');
  removeBtn.forEach(btnElement => {
    btnElement.addEventListener('click', removeProduct);
  });

  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);
});
