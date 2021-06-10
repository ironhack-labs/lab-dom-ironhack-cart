// ITERATION 1

function updateSubtotal(product) {

  console.log('Calculating subtotal, yey!');
  let price = product.querySelector('.price span').innerHTML;
  let quantity = product.querySelector('.quantity input').value;
  let subtotalPrice = quantity * price;
  let subtotalEl = product.querySelector(".subtotal span");
  subtotalEl.innerHTML = subtotalPrice;
  return subtotalPrice;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let total = document.querySelector('#total-value span');
  let products = document.querySelectorAll('.product');
  let sum = 0;
  products.forEach((product) => {
    updateSubtotal(product);
    let subtotal = product.querySelector('.subtotal span');
    sum += Number(subtotal.innerText);
  });
  // ITERATION 3
  total.innerText = sum;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  target.parentElement.parentElement.remove();
}

// ITERATION 5

function createProduct() {
  const createName = document.querySelector('#productName').value;
  console.log(createName);
  const createPrice = document.querySelector('#productPrice').value;
  const tableBody = document.querySelector('#table-body');
  
  const newRow = document.createElement('tr')
  tableBody.appendChild(newRow);
  newRow.classList.add("product");

  newRow.innerHTML = `
    <td class="name">
      <span>${createName}</span>
    </td>
    <td class="price">$<span>${createPrice}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" id = "myInput"/>
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>`

  document.querySelector('#productName').value = "";
  document.querySelector('#productPrice').value = "";

  let allRemoveButtons = document.querySelectorAll(`.btn-remove`);

  allRemoveButtons.forEach((btn) => {
    btn.addEventListener(`click`, removeProduct);
  });
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  let allRemoveButtons = document.querySelectorAll(`.btn-remove`);

  allRemoveButtons.forEach((btn) => {
    btn.addEventListener(`click`, removeProduct);
  });

  const createBtn = document.querySelector(`#create`);
  createBtn.addEventListener(`click`, createProduct);
});
