// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const priceElement = product.querySelector(".price span");
  const quantityElement = product.querySelector(".quantity input");

  let price = priceElement.innerHTML;
  let quantity = quantityElement.value;

  let totalPrice = Number(price * quantity);

  const subtotalTag = product.querySelector(".subtotal span")
  subtotalTag.innerHTML = totalPrice;

  return totalPrice;
}

function calculateAll() {
  const productsElements = document.getElementsByClassName("product")
  const totalText = document.querySelector("#total-value span")
  let total = 0;

  for (let i = 0; i < productsElements.length; i++) {
    updateSubtotal(productsElements[i])
  }

  for (let i= 0; i < productsElements.length; i++) {
    let subtotalElement = productsElements[i].querySelector(".subtotal span");
    let subtotal = Number(subtotalElement.innerHTML);
    total += subtotal;
  }

  totalText.innerHTML = `${total}`;
  return total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  const productRow = target.parentElement.parentElement;
  productRow.remove();
}

// ITERATION 5

function createProduct() {
  const productTable = document.querySelector("tbody");
  const newProductName = document.querySelector("input[type=text]");
  const newProductPrice = document.querySelector(".create-product input[type=number]");

  const name = newProductName.value;
  const price = newProductPrice.value;

  let newTag = `
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

  productTable.innerHTML += newTag;

  const removeButtons = document.querySelectorAll(".btn-remove");
  for (let i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener('click', removeProduct);
  }
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const createButton = document.getElementById("create")
  createButton.addEventListener("click", createProduct);

  const removeButtons = document.querySelectorAll(".btn-remove");

  for (let i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener('click', removeProduct);
  }
});
