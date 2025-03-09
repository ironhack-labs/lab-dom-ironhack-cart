// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");
  const price = product.querySelector(".price span").innerText;
  const quantity = product.querySelector(".quantity input").value;
  const subtotal = product.querySelector(".subtotal span");

  const priceValue = parseFloat(price);
  const quantityValue = parseInt(quantity);
  const subtotalValue = priceValue * quantityValue;

  subtotal.innerText = subtotalValue.toFixed(2);
  return subtotalValue;
}

function calculateAll() {
  // ITERATION 2
  let totalValue = 0;
  const products = document.getElementsByClassName("product");
  for (let product of products) {
    totalValue += updateSubtotal(product);
  }

  // ITERATION 3
  const totalElement = document.querySelector("#total-value span");
  totalElement.innerText = totalValue.toFixed(2);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);

  const product = target.parentNode.parentNode;
  product.parentNode.removeChild(product);
}

// ITERATION 5

function createProduct() {
  const name = document.querySelector('.create-product td input[type="text"]');
  const price = document.querySelector('.create-product td input[type="number"]');
  const nameValue = name.value;
  const priceValue = parseFloat(price.value);

  if (!nameValue || isNaN(priceValue) || priceValue < 0) {
    console.error("Invalid product details");
    return;
  }

  const tbody = document.querySelector("tbody");
  const newTR = document.createElement("tr");
  newTR.classList.add("product");
  
  newTR.innerHTML = `
    <td class="name">
      <span>${nameValue}</span>
    </td>
    <td class="price">$<span>${priceValue.toFixed(2)}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  `;

  tbody.append(newTR);
  name.value = "";
  price.value = "0";

  newTR.querySelector(".btn-remove").addEventListener("click", removeProduct);
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);
  const removeProductsBtn = document.getElementsByClassName("btn-remove");
  for (const removeProductBtn of removeProductsBtn) {
    removeProductBtn.addEventListener("click", removeProduct);
  }
  const createProductBtn = document.getElementById("create");
  createProductBtn.addEventListener("click", createProduct);
});
