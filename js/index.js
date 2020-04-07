`use strict`;

// ITERATION 1

function updateSubtotal(product) {
  const price = Number(product.querySelector(`.price span`).innerHTML);
  const quantity = Number(product.querySelector(`.quantity input`).value);
  let subtotal = price * quantity;
  const subtotalElement = product.querySelector(`.subtotal span`);
  subtotalElement.innerHTML = `${subtotal}`;
  return subtotal;
}

function calculateAll() {
  const allProducts = document.querySelectorAll(`.product`);
  const totalPriceLabel = document.querySelector(`#total-value span`);
  let totalPriceInt = 0;

  allProducts.forEach(function (product) {
    totalPriceInt += updateSubtotal(product);
  });
  totalPriceLabel.innerHTML = `${totalPriceInt}`;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const productRow = target.parentElement.parentElement;
  productRow.remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {
  let productTitle = document.querySelector(`.create-product input[type=text]`);
  let productPrice = document.querySelector(
    `.create-product input[type=number]`
  );

  const tableBody = document.querySelector(`#cart tbody`);
  const newRow = document.createElement(`tr`);
  newRow.classList.add(`product`);

  newRow.innerHTML = `
    <td class="name">
      <span>${productTitle.value}</span>
    </td>
    <td class="price">$<span>${productPrice.value}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>`;

  tableBody.appendChild(newRow);

  productTitle.value = ``;
  productPrice.value = `0`;
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  const removeProductBtns = document.querySelectorAll(`.btn-remove`);

  removeProductBtns.forEach(function (btn) {
    btn.addEventListener(`click`, removeProduct);
  });

  const createProductBtn = document.querySelector(`#create`);
  createProductBtn.addEventListener(`click`, createProduct);
});
