var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

function updateSubtot($product, cb) {
  // Iteration 1.1
  let quantity = $product.querySelector(".qty label input").value;
  let price = parseInt($product.querySelector(".pu span").innerText);

  $product.querySelector(".subtot span").innerText = price * quantity;

  cb(price * quantity);
}

function calcAll() {
  // Iteration 1.2
  let products = $cart.querySelectorAll("tr");
  let total = 0;
  products.forEach(product => updateSubtot(product, (sub => total += sub)));

  document.querySelector("h2 span").innerText = total;
}

function newItemBuilder() {
  let product = event.target.parentElement.parentElement
  let name = product.querySelector("input[type=text]").value
  let price = product.querySelector("input[type=number]").value
  console.log(name)
  console.log(price)
  createItem(name, price, 1)
}

function newItemListener() {
  document.querySelector("#create").onclick = newItemBuilder;
}

function deleteItem() {
  let row = event.target.parentElement.parentElement;
  row.parentElement.removeChild(row)
}

function deleteListeners() {
  document.querySelectorAll(".btn.btn-delete").forEach(button => button.onclick = deleteItem)
}

function createItem(productName, productPrice, quantity) {
  let newItem = document.createElement("tr").className = "product";
  newItem.innerHTML = `
  <tr class="product">
  <td class="name">
    <span>${productName}</span>
  </td>

  <td class="pu">
    $
    <span>${productPrice}</span>
  </td>

  <td class="qty">
    <label>
      <input type="number"
             value="1"
             min="0">
    </label>
  </td>

  <td class="subtot">
    $
    <span>${updateSubtot(newItem)}</span>
  </td>

  <td class="rm">
    <button class="btn btn-delete">Delete</button>
  </td>
</tr>
  `
}
$calc.onclick = calcAll;
deleteListeners();
newItemListener();