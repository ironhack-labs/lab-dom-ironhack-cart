var $cart = document.querySelector("#cart tbody");
var $calc = document.getElementById("calc");

function updateSubtot($product) {
  // Iteration 1.1

  let name = $product.querySelector(".product>.name>span").innerHTML;
  let price = parseFloat($product.querySelector(".product>.pu>span").innerHTML);
  let quantity = parseFloat($product.querySelector(".quantity").value);
  $product.querySelector(".subtot>span").innerHTML = price * quantity;
  return price * quantity;
}

function calcAll() {
  // Iteration 1.2
  let total = 0;
  $cart.querySelectorAll(".product").forEach(function(product) {
    total += updateSubtot(product);
  });
  document.querySelector("h2>span").innerHTML = total;
}
$calc.onclick = calcAll;

$cart.querySelectorAll(".product>.rm>.btn-delete").forEach(function(button) {
  button.onclick = function(event) {
    $cart.removeChild(event.target.parentElement.parentElement);
  };
});

document.querySelector("#create").onclick = function(event) {
  let name = document.querySelector(".new input[type=text]");
  let price = document.querySelector(".new input[type=number]");
  let newProduct = document.createElement("tr");
  newProduct.classList.add("product");
  newProduct.innerHTML = `<tr class="product">
  <td class="name">
    <span>${name.value}</span>
  </td>

  <td class="pu">$<span>${price.value}</span></td>

  <td class="qty">
    <label>
      <input class="quantity" type="number" value="0" min="0" />
    </label>
  </td>

  <td class="subtot">$<span>0</span></td>

  <td class="rm">
    <button class="btn btn-delete">Delete</button>
  </td>
</tr>`;
  $cart.appendChild(newProduct);
};
