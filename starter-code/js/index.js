var $cart = document.querySelector("#cart tbody");
var $calc = document.getElementById("calc");
const $total = document.querySelector("body > h2 > span");
var $createBtn = document.querySelector("#create");

function updateSubtot($product) {
  // Iteration 1.1

  const qty = Number($product.querySelector(".qty input").value);
  const pricePerUnit = Number($product.querySelector(".pu span").innerHTML);
  const $subTotal = $product.querySelector(".subtot span");

  $subTotal.innerHTML = qty * pricePerUnit;

  return qty * pricePerUnit;
}

function calcAll() {
  // Iteration 1.2
  console.log("Test");
  let total = 0;

  const $productList = $cart.querySelectorAll(".product");

  $productList.forEach(product => (total += updateSubtot(product)));
  $total.innerHTML = total;
}

function deleteProduct(event) {
  $cart.removeChild(event.target.parentElement.parentElement);
}

function addProductToCart(event) {
  const $name = document.querySelector(".new input[type=text]");
  const $price = document.querySelector(".new input[type=number]");

  const tr = document.createElement("tr");
  tr.className = "product";
  tr.innerHTML = `<td class="name">
  <span>${$name.value}</span>
</td>

<td class="pu">$<span>${$price.value}</span></td>

<td class="qty">
  <label>
    <input type="number" value="0" min="0" />
  </label>
</td>

<td class="subtot">$<span>0</span></td>

<td class="rm">
  <button class="btn btn-delete">Delete</button>
</td>`;

  $cart.appendChild(tr);
}

$calc.onclick = calcAll;
$cart
  .querySelectorAll(".btn-delete")
  .forEach(button => (button.onclick = deleteProduct));

$createBtn.onclick = addProductToCart;
