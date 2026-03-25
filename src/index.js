// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");

  const priceElement = product.querySelector(".price span");

  const priceValue = Number(priceElement.innerText);

  const quantityElement = product.querySelector(".quantity input");

  const quantityValue = Number(quantityElement.value);

  const subtotal = priceValue * quantityValue;

  const subtotalElement = product.querySelector(".subtotal span");

  subtotalElement.innerText = subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector(".product");
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
function updateSubtotal(product) {
  const priceElement = product.querySelector('.price span');
  const priceValue = Number(priceElement.innerText);
  const quantityElement = product.querySelector('.quantity input');
  const quantityValue = Number(quantityElement.value);

  const subtotal = priceValue * quantityValue;
  const subtotalElement = product.querySelector('.subtotal span');
  
  subtotalElement.innerText = subtotal;
  return subtotal;
}

function calculateAll() {
  const allProducts = document.querySelectorAll('.product');
  let total = 0;

  allProducts.forEach(product => {
    total += updateSubtotal(product);
  });


}
  // ITERATION 3
const totalElement = document.querySelector('#total-value span');
  totalElement.innerText = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  const removeButtons = document.querySelectorAll ('.btn-remove')
  
  removeButtons.forEach(button => {

button.addEventListener('click', removeProduct);

});
}

// ITERATION 5

function createProduct() {
  const nameInput = document.querySelector('.create-product input[type="text"]');
  const priceInput = document.querySelector('.create-product input[type="number"]');

  const nameValue = nameInput.value;
  const priceValue = priceInput.value;
  const parent = document.querySelector('tbody');

  const newRow = document.createElement('tr');
  newRow.classList.add('product');

  newRow.innerHTML = `
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
  `;

  parent.appendChild(newRow);

  newRow.querySelector('.btn-remove').addEventListener('click', removeProduct);

  nameInput.value = '';
  priceInput.value = 0;
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  const createBtn = document.getElementById("create");
  if (createBtn) {
    createBtn.addEventListener("click", createProduct);
  }

  const removeButtons = document.querySelectorAll('.btn-remove');
  removeButtons.forEach(button => {
    button.addEventListener('click', removeProduct);
  });
});
