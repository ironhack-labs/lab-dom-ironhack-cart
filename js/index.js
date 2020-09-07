// ITERATION 1

function updateSubtotal(product) {
  const price = Number(product.querySelector(".price span").innerText);
  const quantity = product.querySelector(".quantity input").value;
  const total = price * quantity;

  const subtotal = product.querySelector(".subtotal span");
  subtotal.innerText = total;

  return total;
}

function calculateAll() {
  let total = 0;
  const products = document.getElementsByClassName("product");

  for (let item of products) {
    total += updateSubtotal(item);
  }

  const totalValue = document.querySelector("#total-value span");
  totalValue.innerText = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const product = target.parentNode.parentNode;
  product.parentNode.removeChild(product);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const product = document.querySelector(".create-product");
  const attributes = product.querySelectorAll("td input");
  const productName = attributes[0].value;
  const price = attributes[1].value;

  const newProduct = document.createElement("tr");
  newProduct.className = "product";
  newProduct.innerHTML = `<td class="name">
    <span>${productName}</span>
    </td>
    <td class="price">$<span>${price}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>`;
  const removeBtn = newProduct.querySelector(".btn-remove");
  removeBtn.addEventListener("click", removeProduct);
  const tbody = document.querySelector("#cart tbody");
  tbody.append(newProduct);

  attributes[0].value = "";
  attributes[1].value = "0";
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  const removeButtons = document.getElementsByClassName("btn-remove");
  console.log(removeButtons);
  for (let btn of removeButtons) {
    btn.addEventListener("click", removeProduct);
  }

  const createButton = document.getElementById("create");
  createButton.addEventListener("click", createProduct);
});
