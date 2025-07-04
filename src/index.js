// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");

  const priceValue = parseFloat(price.innerText);
  const quantityValue = parseInt(quantity.value);

  const subtotal = priceValue * quantityValue;

  const subtotalElement = product.querySelector(".subtotal span");
  subtotalElement.innerText = subtotal.toFixed(2);

  return subtotal;
}

function calculateAll() {
  // ITERATION 2
  const allProducts = document.getElementsByClassName("product");

  let totalPrice = 0;
  for (let i = 0; i < allProducts.length; i++) {
    const currentProduct = allProducts[i];
    const subtotalValue = updateSubtotal(currentProduct);
    totalPrice += subtotalValue;
  }

  /* Otra posibilidad:
  for (let product of allProducts) total += updateSubtotal(product);
  */

  // ITERATION 3
  const totalPriceElement = document.querySelector("#total-value span");
  totalPriceElement.innerText = totalPrice.toFixed(2);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const productRow = target.closest(".product");
  productRow.remove();

  calculateAll();

  console.log("The target in remove is:", target);
}

// ITERATION 5

function createProduct() {
  const nameInput = document.querySelector(
    ".create-product td input[type='text']"
  );

  const priceInput = document.querySelector(
    ".create-product td input[type='number']"
  );

  const name = nameInput.value.trim();
  const price = parseFloat(priceInput.value).toFixed(2);

  if (!name || isNaN(price) || price < 0) {
    alert("Comprueba los inputs");
    return;
  }

  const tbody = document.querySelector("#cart tbody");
  const newRow = document.createElement("tr");
  newRow.classList.add("product");
  newRow.innerHTML = ` 
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
          </td>`;

  tbody.appendChild(newRow);
  newRow.querySelector(".btn-remove").addEventListener("click", removeProduct);

  nameInput.value = "";
  priceInput.value = 0;
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  const removeBtns = document.querySelectorAll(".btn-remove");
  removeBtns.forEach((btn) => {
    btn.addEventListener("click", removeProduct);
  });
  const createBtn = document.getElementById("create");
  createBtn.addEventListener("click", createProduct);
});
