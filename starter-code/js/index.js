var $calc = document.getElementById("calc");
var $newprod = document.getElementById("create");
var $tableBody = document.getElementById("table-body");

function updateSubtot($product) {
  // Iteration 1.1
  var price = Number($product.querySelector(".pu span").innerHTML);
  var quantity = Number($product.querySelector(".qty label input").value);
  var subtotal = Math.round(price * quantity * 100) / 100;
  $product.querySelector(".subtot").innerHTML = "$" + subtotal;
  return subtotal;
}

function calcAll() {
  // Iteration 1.2
  var $cart = document.querySelectorAll("#cart tbody tr");
  console.log($cart);
  var total = 0;
  $cart.forEach(function(node) {
    let subTot = updateSubtot(node);

    total += subTot;
  });
  document.querySelector("h2 span").innerHTML = total;
}
$calc.onclick = calcAll;
$newprod.onclick = createNewItem;
$tableBody.onclick = deleteProduct;

function deleteProduct(evt) {
  if (evt.target.classList.contains("btn-delete"))
    evt.target.parentElement.parentElement.remove();
}

function createNewItem() {
  var name = document.querySelector(".new td input").value;
  var price = Number(
    document.querySelector(".new td:nth-child(2) input").value
  );
  newProduct = document.createElement("tr");
  newProduct.classname = "product";
  document.querySelector("#cart tbody").appendChild(newProduct);
  newProduct.innerHTML = `
  <td class="name">
  <span>${name}</span>
</td>
<td class="pu">
  $<span>${price}.00</span>
</td>
<td class="qty">
  <label>
    <input type="number" value="0" min="0">
  </label>
</td>
<td class="subtot">
  $<span>0</span>
</td>
<td class="rm">
  <button class="btn btn-delete">Delete</button>
</td> 
  `;
}
