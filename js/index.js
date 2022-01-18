// ITERATION 1

function updateSubtotal(product) {

  const price = product.querySelector('.price span');
  const quantity = product.querySelector(".quantity>input");
  const priceValue = parseFloat(price.innerHTML);
  const quantityValue = parseInt(quantity.value);
  let subtotal = (priceValue * quantityValue);
  product.querySelector(".subtotal span").innerText = subtotal.toFixed(2);
  return subtotal;
  
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const products = document.querySelectorAll('.product');
  let total = 0;

  for (i = 0; i < products.length; i++) {
    total += updateSubtotal(products[i]);
  }

  document.querySelector("#total-value span").innerText = total.toFixed(2);
  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const product = target.parentNode.parentNode;
  product.parentNode.removeChild(product);
}

// ITERATION 5

function createProduct() {
  
  const productName = document.getElementById('new-product-name').value;
  const productPrice = document.getElementById('new-product-price').value;

  const table = document.getElementById('cart');

  const newRow = document.querySelector('.product').cloneNode(true);
  newRow.querySelector('.name span').innerText = productName;
  newRow.querySelector('.price span').innerText = productPrice;

  table.appendChild(newRow);
}

window.addEventListener('load', () => {
  
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = document.getElementsByClassName('btn btn-remove');
  const removeButtonList = [...removeButtons];
  removeButtonList.forEach(button => button.addEventListener('click', removeProduct))

  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', () => {
    createProduct();
    document.getElementById("new-product-name").value = "";
    document.getElementById("new-product-price").value = 0;
  });

});
