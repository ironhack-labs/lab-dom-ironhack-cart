// Function to calculate the total price of each type of product
function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = parseFloat(product.querySelector('.price span').innerHTML);
  const quantity = parseFloat(product.querySelector('.quantity input').value);
  let subtotal = price * quantity;

  return product.querySelector('.subtotal span').innerHTML = subtotal;
}

// Function to calculate the total of the products in the cart
function calculateAll() {
  const total = document.querySelectorAll('.product');
  let totalGeneral = 0;

  for (let i = 0; i < total.length; i++) {
    totalGeneral += updateSubtotal(total[i]);
  }

  document.querySelector('#total-value span').innerHTML = totalGeneral;
}

// Remove the product from the cart
function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  let firstParent = target.parentNode;
  let grandParent = firstParent.parentNode;
  let removeOneProduct = grandParent.parentNode.removeChild(grandParent);

  calculateAll();
}

// Create a new product with a button
function createProduct() {
  let nameProduct = document.querySelector(".create-product input:first-child");
  let namePrice = document.querySelector(".create-product td:nth-child(2) input");

  let basicRow = document.querySelector("tbody tr");
  let table = document.querySelector("tbody");

  const newRow = basicRow.cloneNode(true);
  table.appendChild(newRow);

  newRow.querySelector(".name span").innerHTML = nameProduct.value;
  newRow.querySelector(".price span").innerHTML = namePrice.value;
  newRow.querySelector('.btn-remove').addEventListener('click', removeProduct);
}

// Event listeners for calculate button and remove button
window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeProductBtn = document.querySelectorAll('.btn-remove');
  for (let i = 0; i < removeProductBtn.length; i++) {
    removeProductBtn[i].addEventListener('click', removeProduct);
  }

  const addProductBtn = document.getElementById('create');
  addProductBtn.addEventListener('click', createProduct);
});