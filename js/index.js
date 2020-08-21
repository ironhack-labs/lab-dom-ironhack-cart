// ITERATION 1

function updateSubtotal(product) {
  let price = product.querySelector(".price span").innerText;
  let quantity = product.querySelector(".quantity input").value;
  let subtotal = product.querySelector(".subtotal span");

  let subtotalValue = price * quantity;
  subtotal.innerHTML = subtotalValue;

  return subtotalValue;
}

function calculateAll() {
  // // // code in the following two lines is added just for testing purposes.

  // ITERATION 2
  //... your code goes here

  let trElements = document.querySelectorAll(".product");
  let total = 0;
  trElements.forEach((element) => {
    total += updateSubtotal(element);
  });

  // ITERATION 3
  //... your code goes here

  document.querySelector("#total-value span").innerText = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target.parentNode.parentNode);
  const product = target.parentNode.parentNode;
  product.remove();
  // target.parentNode.parentNode.parentNode.removeChild(target.parentNode.parentNode);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const product = document.querySelector('.product');
  const newProduct = product.cloneNode(true);
 
  newProduct.querySelector('.name span').innerText = document.querySelector('.create-product td input').value
  newProduct.querySelector('.subtotal span').innerText = 0
  newProduct.querySelector('.price span').innerText = document.querySelector('#cart > tfoot > tr > td:nth-child(2) > input[type=number]').value
  newProduct.querySelector('.action .btn').addEventListener('click', removeProduct)
  const tBody = document.querySelector('tbody')

  tBody.appendChild(newProduct);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeProductBtns = document.querySelectorAll('.btn-remove');
  removeProductBtns.forEach(function (button) {
    button.onclick = removeProduct;
  });

  const createProductBtn = document.querySelector('#create');
  createProductBtn.addEventListener('click', () => {
    createProduct();
  });
});
