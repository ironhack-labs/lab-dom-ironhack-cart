function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subtotal = product.querySelector('.subtotal span');

  subtotal.innerText = quantity.value * Number(price.innerText);
  return Number(subtotal.innerText);
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  let total = 0;
  const products = document.querySelectorAll('.product');
  products.forEach(product => {
    total += updateSubtotal(product);
  });
  console.log(total);
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  const totalValue = document.getElementById('total-value');
  totalValue.innerText = `Total: $${total}`;
}

// ITERATION 4

function removeProduct(event) {
  const bisabuelo = event.currentTarget.parentNode.parentNode.parentNode;
  const abuelo = event.currentTarget.parentNode.parentNode;
  bisabuelo.removeChild(abuelo);
}

// ITERATION 5

function createProduct() {
  const newProductName = document.querySelector(".new-product-name").value
  const newProductPrice = document.querySelector(".new-product-price").value
  const productTable = document.querySelector("tbody")
  const newTable = document.createElement("tr")
  newTable.innerHTML = `<tr class="product">
  <td class="name">
    <span>${newProductName}</span>
  </td>
  <td class="price">$<span>${newProductPrice}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
</tr>`
productTable.appendChild(newTable)
addEvents()
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  
  const removeButtons = document.querySelectorAll('.btn-remove');
  removeButtons.forEach(button => button.addEventListener('click', removeProduct));

  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);
  


  //... your code goes here
});

function addEvents() {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  
  const removeButtons = document.querySelectorAll('.btn-remove');
  removeButtons.forEach(button => button.addEventListener('click', removeProduct));

  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);
  


  //... your code goes here
}
