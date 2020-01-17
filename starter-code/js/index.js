var $cart = document.querySelector("#cart tbody");
var $calc = document.getElementById("calc");
var $del = document.getElementsByClassName("btn-delete");
var $create = document.getElementById("create");

function updateSubtot($product) {
  let productPrice = $product.querySelector(".pu span").textContent;
  let productQuantity = $product.querySelector(".qty label input").value;
  let subTotal = Number(productPrice) * Number(productQuantity);

  $product.querySelector(".subtot span").textContent = `${subTotal}`;

  return subTotal;
}

function calcAll() {
  let product = document.querySelectorAll(".product");
  let productOccurrences = document.querySelectorAll(".product").length;
  let totalPrice = 0;

  for (let i = 0; i < productOccurrences; i++) {
    updateSubtot(product[i]);
    totalPrice += updateSubtot(product[i]);
  }

  document.querySelector("h2 span").textContent = totalPrice;
  return totalPrice;
}

function deleteBtn(event) {
  event.currentTarget.parentNode.parentNode.remove();
}

function createBtn() {
  document.querySelector("tbody").insertAdjacentHTML(
    "beforeend",
    `<tr class="product">

  <td class="name">
    <span>${document.getElementById("newProductName").value}</span>
  </td>
  
  <td class="pu">
    $<span>${document.getElementById("newProductPrice").value}</span>
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
  </tr>`
  );
  listenClicks()
}

function listenClicks() {
  [...$del].forEach(deleteClick => {
    deleteClick.onclick = deleteBtn;
  });
}

$calc.onclick = calcAll;
$create.onclick = createBtn;

