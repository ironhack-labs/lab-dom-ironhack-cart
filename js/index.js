// ITERATION 1

function updateSubtotal(product) {
  const price  = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");
  let productPrice = price.innerHTML;
  let productQuantity = quantity.value;
  let productSubtotal = productPrice * productQuantity;
  const subtotal = product.querySelector(".subtotal span");
  subtotal.innerHTML = `${productSubtotal}`;
  return productSubtotal;
}

function calculateAll() {
  // ITERATION 2
  const products = document.querySelectorAll(".product");
  products.forEach(product => {
    updateSubtotal(product);
  });

  // ITERATION 3
  const subtotals = document.querySelectorAll(".subtotal span");
  let totalValue = 0;
  subtotals.forEach(subtotal => {
    totalValue += Number(subtotal.innerHTML);
  });

  const totalDisplay = document.querySelector("#total-value span");
  totalDisplay.innerHTML = `${totalValue}.00`;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  let parent = target.parentNode;
  let grandParent = parent.parentNode;
  let greatGrandParent = grandParent.parentNode;
  greatGrandParent.removeChild(grandParent);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const table = document.querySelector("tbody");
  const nameInput = document.querySelector(".create-product input:first-child");
  const priceInput = document.querySelector(".create-product input[type=number]");
  const products = document.querySelectorAll(".product");
  let givenName = nameInput.value;
  let givenPrice = priceInput.value;
  if (givenName !== "" && givenPrice !== 0) {
    let row = table.insertRow(products.length);
    row.setAttribute('class', 'product');
    row.innerHTML = `<td class="name">
      <span>${givenName}</span>
      </td>
      <td class="price">$<span>${givenPrice}.00</span></td>
      <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
      </td>
      <td class="subtotal">$<span>0</span></td>
      <td class="action">
      <button class="btn btn-remove">Remove</button>
      </td>`;
    } else {
      alert('🙏 You need to enter a product name & a price! 🙏');
    }
  nameInput.value = "";
  priceInput.value = "";
  }

window.addEventListener('click', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  
  const removeBtns = document.querySelectorAll(".btn.btn-remove");
  removeBtns.forEach(button => {
    button.addEventListener('click', removeProduct);
  });

  const createBtn = document.getElementById("create");
  createBtn.addEventListener('click', createProduct);
});