// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");
  const subTotal = product.querySelector(".subtotal span");

  subTotal.innerHTML = calculateSub(price, quantity);

  return calculateSub(price, quantity);
}

function calculateSub(price, quantity) {
  const subTotal = quantity !== 0 ? price.innerHTML * quantity.value : price;
  return subTotal;
}

function calculateAll() {
  // ITERATION 2
  const allProducts = document.querySelectorAll(".product");
  allProducts.forEach((product) => {
    updateSubtotal(product);
  });

  // ITERATION 3
  const getTotalValue = document.getElementById("total-value");
  let setTotalValue = 0;

  allProducts.forEach((product) => {
    setTotalValue += updateSubtotal(product);
  });

  getTotalValue.innerHTML = `Total: $${setTotalValue}`;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const getProduct = target.parentNode.parentNode;
  getProduct.remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const getProductName = document.getElementById("create-product-name");
  const getProductPrice = document.getElementById("create-product-price");
  const getProductList = document.querySelector("#products-list");

  if (getProductName.value !== "" && getProductPrice.value > 0) {
    const tr = document.createElement("tr");
    tr.className = "product";
    tr.innerHTML += `<td class="name">
        <span>${getProductName.value}</span>
      </td>
      <td class="price">$<span>${getProductPrice.value}</span></td>
      <td class="quantity">
       <input type="number" value="0" min="0" placeholder="Quantity" />
      </td>
      <td class="subtotal">$<span>0</span></td>
      <td class="action">
      <button class="btn btn-remove">Remove</button>
      </td>`;
    getProductList.appendChild(tr);
  }

  getProductName.value = "";
  getProductPrice.value = "";

  const getRemove = document.querySelectorAll(".btn-remove");
  getRemove.forEach((btn) => (btn.onclick = removeProduct));
}

const calculatePricesBtn = document.getElementById("calculate");
calculatePricesBtn.addEventListener("click", calculateAll);

const getRemove = document.querySelectorAll(".btn-remove");
getRemove.forEach((btn) => (btn.onclick = removeProduct));

const createProductBtn = document.getElementById("create");
createProductBtn.addEventListener("click", createProduct);
