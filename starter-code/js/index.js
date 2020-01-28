var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

function updateSubtot($product, cb) {
  // Iteration 1.1
  let price = parseInt($product.querySelector(".pu span").innerText); // can just use Number instead of parseInt
  let quantity = $product.querySelector(".qty label input").value;

  $product.querySelector(".subtot span").innerText = price * quantity;

  cb(price * quantity);
}

function calcAll() {
  // Iteration 1.2
  var products = document.querySelectorAll(".product");
  let total = 0;
  console.log(products);
  products.forEach(product => updateSubtot(product, (sub => total += sub)));

  document.querySelector("h2 span").innerText = total;
}

function newItemBuilder() {
  // let product = event.target.parentElement.parentElement
  let product = event.target.closest(".product");
  console.log(product);
  let name = product.querySelector("input[type=text]").value;
  let price = product.querySelector("input[type=number]").value;
  createItem(name, price)
}

function newItemListener() {
  document.querySelector("#create").onclick = () => newItemBuilder();
}

function deleteItem() {
  let row = event.target.closest(".product");
  //thank you Tatijana haha!
  row.parentElement.removeChild(row)
}

function deleteListeners() {
  document.querySelectorAll(".btn.btn-delete").forEach(button => button.onclick = deleteItem)
}

function createItem(productName, productPrice) {
  let newItem = document.createElement("tr")
  newItem.className = "product";
  console.log(typeof newItem)
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
     <span>${productPrice}</span>
  </td>

  <td class="rm">
    <button class="btn btn-delete">Delete</button>
  </td>
</tr>
  `
  console.log(document.querySelector("tbody").appendChild(newItem))
  console.log(typeof newItem)
}
$calc.onclick = calcAll;
deleteListeners();
newItemListener();