var $cart = document.querySelector("#cart tbody");
var $calc = document.getElementById("calc");
var $create = document.getElementById("create");

function updateSubtot($product) {
  const priceValue = $product
    .querySelector(".pu")
    .getElementsByTagName("span")[0].innerHTML;
  const qtyValue = $product
    .querySelector(".qty")
    .getElementsByTagName("input")[0].value;
  const subTotalElement = $product
    .querySelector(".subtot")
    .getElementsByTagName("span")[0];
  const subTotal = parseInt(priceValue) * parseInt(qtyValue);
  subTotalElement.innerHTML = `${subTotal}`;
  return subTotal;
}

function calcAll() {
  var total = 0;
  const allProducts = document.querySelectorAll(".product");
  for (let i = 0; i < allProducts.length; i++) {
    const subTotal = updateSubtot(allProducts[i]);
    total += subTotal;
  }
  const totalElement = document
    .querySelector(".total")
    .getElementsByTagName("span")[0];
  totalElement.innerHTML = `${total}`;
}

function deleteElement() {
  const allDeleteButtons = document.querySelectorAll(".btn-delete");
  for (let i = 0; i < allDeleteButtons.length; i++) {
    allDeleteButtons[i].onclick = function() {
      const tdParentElement = allDeleteButtons[i].parentElement.parentElement;
      const bodyParentElement = tdParentElement.parentElement;
      bodyParentElement.removeChild(tdParentElement);
    };
  }
}

function createElement() {
  const nameElement = document
    .querySelector(".new")
    .getElementsByTagName("input")[0];

  const puElement = document
    .querySelector(".new")
    .getElementsByTagName("input")[1];

  const newElement = `<tr class="product"><td class="name"><span>${nameElement.value}</span></td><td class="pu">$<span>${puElement.value}</span></td>
  <td class="qty"><label><input type="number" value="0" min="0" /></label></td><td class="subtot">$<span>0</span></td><td class="rm"><button class="btn btn-delete">Delete</button></td></tr>`;

  nameElement.value = "";
  puElement.value = "";

  const tpl = document.createElement("template");
  tpl.innerHTML = newElement;
  $cart.appendChild(tpl.content.childNodes[0]);
  deleteElement();
}

deleteElement();
$calc.onclick = calcAll;
$create.onclick = createElement;
