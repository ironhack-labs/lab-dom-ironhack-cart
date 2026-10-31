function updateSubtotal(product) {

  const price = Number(product.querySelector(".price span").textContent);

  const quantity = Number(product.querySelector(".quantity input").value);

  const subtotal = price * quantity;

  product.querySelector(".subtotal span").textContent = subtotal.toFixed(2);
  return subtotal;
}

function calculateAll() {

  const products = document.querySelectorAll("#cart tbody .product");
  let total = 0;

  products.forEach((product) => {

    total += updateSubtotal(product);
  });

  document.querySelector("#total-value span").textContent = total.toFixed(2);
}

function removeProduct(event) {

  const target = event.currentTarget;

  const product = target.closest(".product");

  product.remove();

  calculateAll();
}

function createProduct() {

  const nameInput = document.querySelector(
    '.create-product input[type="text"]',
  );
  const priceInput = document.querySelector(
    '.create-product input[type="number"]',
  );
  const name = nameInput.value.trim();
  const price = Number(priceInput.value);

  if (
    !name ||
    priceInput.value.trim() === "" ||
    !Number.isFinite(price) ||
    price < 0
  ) {
    return;
  }

  const product = document.createElement("tr");

  product.classList.add("product");

  product.innerHTML = `

    <td class="name"><span></span></td>
    <td class="price">$<span></span></td>
    <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0.00</span></td>
    <td class="action"><button class="btn btn-remove">Remove</button></td>
  `;
  product.querySelector(".name span").textContent = name;

  product.querySelector(".price span").textContent = price.toFixed(2);

  product.querySelector(".btn-remove").addEventListener("click", removeProduct);

  document.querySelector("#cart tbody").appendChild(product);

  nameInput.value = "";
  priceInput.value = "";
}

window.addEventListener("load", () => {
  
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  document.querySelectorAll(".btn-remove").forEach((button) => {
    button.addEventListener("click", removeProduct);
  });

  document.getElementById("create").addEventListener("click", createProduct);
});
