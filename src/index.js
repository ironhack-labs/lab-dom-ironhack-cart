// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");

  const price = Number(product.querySelector(".price span").textContent);
  const quantity = Number(product.querySelector(".quantity input").value);

  product.querySelector(".subtotal span").textContent = price * quantity;

  return price * quantity;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector(".product");
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const allProducts = document.querySelectorAll(".product");

  // ITERATION 3
  let total = 0;

  for (let i = 0; i < allProducts.length; i++) {
    const product = allProducts[i];
    const productSubtotal = updateSubtotal(product);
    total = total + productSubtotal;
  }

  const totalElement = document.querySelector("#total-value span");
  totalElement.textContent = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);

  const row = target.parentNode.parentNode;
  const tableBody = row.parentNode;

  tableBody.removeChild(row);

  calculateAll();
}

// ITERATION 5

function createProduct() {
  const nameInput = document.querySelector(
    '.create-product input[type="text"]',
  );
  const priceInput = document.querySelector(
    '.create-product input[type="number"]',
  );

  const productName = nameInput.value;
  const productPrice = Number(priceInput.value);

  if (!productName || !productPrice) {
    return;
  }

  const row = document.createElement("tr");
  row.className = "product";

  row.innerHTML = `
    <td class="name">
      <span>${productName}</span>
    </td>
    <td class="price">
      $<span>${productPrice}</span>
    </td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">
      $<span>0</span>
    </td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  `;

  const cartBody = document.querySelector("#cart tbody");
  cartBody.appendChild(row);

  const removeButton = row.querySelector(".btn-remove");
  removeButton.addEventListener("click", removeProduct);

  nameInput.value = "";
  priceInput.value = "";
}

window.addEventListener("load", function () {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  const removeButtons = document.querySelectorAll(".btn-remove");
  removeButtons.forEach(function (button) {
    button.addEventListener("click", removeProduct);
  });

  const createBtn = document.getElementById("create");
  createBtn.addEventListener("click", createProduct);
});
