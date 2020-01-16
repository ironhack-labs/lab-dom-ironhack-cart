const $cart = document.querySelector("#cart tbody");
const $calc = document.getElementById("calc");
const $totalCart = document.querySelector("h2 span");

// Variables for Create button logic
const createBtn = document.getElementById("create");
const newProductName = document.querySelector(".new input[type=text]");
const newProductPrice = document.querySelector(".new input[type=number]");

function updateSubtot($product) {
  const unitPrice = $product.querySelector(".pu span").textContent;
  const quantity = $product.querySelector(".qty input").value;
  const subTotalEl = $product.querySelector(".subtot span");
  const subTotal = unitPrice * quantity;
  subTotalEl.textContent = subTotal;
  $product.querySelector(".rm").onclick = deleteProduct;
  $product.querySelector(".qty input").onchange = calcAll;
  return subTotal;
}

function calcAll() {
  let totalCart = 0;
  $cart.querySelectorAll(".product").forEach(product => (totalCart += updateSubtot(product)));
  $totalCart.textContent = totalCart;
  return totalCart;
}

function deleteProduct(el) {
  el.target.closest(".product").remove();
  calcAll();
}

function appendProduct() {
  $cart.appendChild(createProduct(newProductName.value, newProductPrice.value));
  clearNewProduct();
}

function clearNewProduct() {
  newProductName.value = "";
  newProductPrice.value = "";
}

function createProduct(name, price) {
  let product = document.createElement("tr");
  product.innerHTML = `
          <td class="name">
            <span>${name}</span>
          </td>

          <td class="pu">$<span>${display2Decimals(price)}</span></td>

          <td class="qty">
            <label>
              <input type="number" value="0" min="0" />
            </label>
          </td>

          <td class="subtot">$<span>0</span></td>

          <td class="rm">
            <button class="btn btn-delete">Delete</button>
          </td>
        `;
  product.className = "product";
  product.querySelector(".rm button").onclick = deleteProduct;
  product.querySelector(".qty input").onchange = calcAll;
  return product;
}

function display2Decimals(n) {
  return Number(n).toFixed(2);
}

$calc.onclick = calcAll;
createBtn.onclick = appendProduct;

(function() {
  calcAll();
})();
