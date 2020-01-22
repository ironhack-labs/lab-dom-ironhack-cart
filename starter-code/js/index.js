var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
var $total = document.querySelector("body > h2 > span");
var $createBtn = document.querySelector("#create");



function updateSubtot($product) {
  // Iteration 1.1

  const price = Number($product.querySelector(".pu span").innerHTML);
  const quantity = Number($product.querySelector(".qty input").value);
  const subTotal = $product.querySelector(".subtot span")

  result = quantity * price;
  subTotal.innerHTML = result;
  return result;
}

function calcAll() {
  // Iteration 1.2

  let total = 0;
  
  const productList = $cart.querySelectorAll(".product");

  productList.forEach(product => {
    total += updateSubtot(product);
    $total.innerHTML = total;  
  });

}
$calc.onclick = calcAll;

// Iteration 4

function deleteProduct(event) {
  $cart.removeChild(event.target.parentElement.parentElement);
}

$cart
.querySelectorAll(".btn-delete")
.forEach(button => (button.onclick = deleteProduct));

// Iteration 5 


function addProduct(event) {

  const addName = document.querySelector(".new input[type=text]");
  const addPrice = document.querySelector(".new input[type=number]");

  const tr = document.createElement("tr");
  tr.className = "product";
  tr.innerHTML = `<td class="name">
  <span>${addName.value}</span>
</td>
<td class="pu">$<span>${addPrice.value}</span></td>
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

$createBtn.onclick = addProduct;