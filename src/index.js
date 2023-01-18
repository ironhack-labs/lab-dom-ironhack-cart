// ITERATION 1

function updateSubtotal(product) {
  let priceElem = product.querySelector(".price span");
  let quantityElem = product.querySelector(".quantity input");
  let subtotalElem = product.querySelector(".subtotal span");

  let subtotal = priceElem.innerText * quantityElem.value;
  subtotalElem.innerHTML = subtotal.toFixed(2);

  return subtotal;
}

function calculateAll() {
  // ITERATION 2
  // Create variables that store the needed HTML elements
  const productElems = document.querySelectorAll(".product");
  const totalElem = document.querySelector("#total-value span");
  
  // Create a variable that tracks the total price
  let totalPrice = 0;

  // Iterate over each product and add the returend value from updateSubtotal to the totalPrice
  productElems.forEach(product => totalPrice += updateSubtotal(product));

  // ITERATION 3
  // Set the text of the total span to the total price (with two decimals)
  totalElem.innerText = totalPrice.toFixed(2);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  
  target.parentElement.parentElement.remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {
  // Extract values from product name input and price input
  const nameElem = document.querySelector(".create-product input[type=text]");
  const priceElem = document.querySelector(".create-product input[type=number]");
  let name = nameElem.value;
  let price = priceElem.value;

  // Create new variable that contains the HTML for a row with product name and price
  let product = `
    <tr class="product">
      <td class="name">
        <span>${name}</span>
      </td>
      <td class="price">$<span>${price}</span></td>
      <td class="quantity">
        <input type="number" value="0" min="0" placeholder="Quantity" />
      </td>
      <td class="subtotal">$<span>0</span></td>
      <td class="action">
        <button class="btn btn-remove">Remove</button>
      </td>
    </tr>
  `;

  // Select cart and append new product as a child
  document.querySelector("#cart tbody").insertAdjacentHTML( "beforeend", product);

  // Remove all event listeners for the remove button, then add event listeners again to all (including the new) remove buttons
  const removeProductBtns = document.querySelectorAll(".btn-remove");
  console.log(removeProductBtns);
  removeProductBtns.forEach(product => {
    product.removeEventListener("click", removeProduct);
    product.addEventListener("click", removeProduct);
  })

  // Reset input for product name and price
  nameElem.value = null;
  priceElem.value = null;
}


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  
  const removeProductBtns = document.querySelectorAll(".btn-remove");
  console.log(removeProductBtns);
  removeProductBtns.forEach(product => {
    product.addEventListener("click", removeProduct);
  })

  const createProductBtn = document.getElementById("create");
  createProductBtn.addEventListener("click", createProduct);
});
