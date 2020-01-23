var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
var $total = document.querySelector("body > h2 > span");
var $createBtn = document.querySelector("#create");



function updateSubtot($product) {
  // Iteration 1.1

  const price = $product.querySelector(".pu span").innerHTML;
  const quantity = $product.querySelector(".qty input").value;
  const subTot = $product.querySelector(".subtot span");

  subtotal = quantity * price;
  subTot.innerHTML = subtotal;
  return subtotal;
}


function calcAll() {
  // Iteration 1.2

  let totalPrice = 0;

  const totalProducts = $cart.querySelectorAll(".product");

  totalProducts.forEach(product => {
    totalPrice += updateSubtot(product);
    $totalPrice.innerHTML = totalPrice;  
  });
}
$calc.onclick = calcAll;

// Iteration 4

function deleteProduct(event) {
  $cart.removeChild(event.target.parentElement.parentElement);

  $cart
.querySelectorAll(".btn-delete")
.forEach(button => (button.onclick = deleteProduct));

// Iteration 5 


function newProduct() {

  const newName = document.querySelector(".new input[type=text]");
  const newPrice = document.querySelector(".new input[type=number]");

  const tr = document.createElement("tr");
  tr.className = "product";
  tr.innerHTML = `<td class="name"><span>${newName.value}</span></td><td class="pu">$<span>${newPrice.value}</span></td><td class="qty"><label><input type="number" value="0" min="0" /></label></td><td class="subtot">$<span>0</span></td><td class="rm"><button class="btn btn-delete">Delete</button></td>`;

  $cart.appendChild(tr);
}

$createBtn.onclick = newProduct }