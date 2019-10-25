let pu = document.getElementsByClassName("pu");
let productQuantity = document.getElementsByTagName("input");
let subtot = document.getElementsByClassName("subtot");
let productRow = document.getElementsByClassName("product");
let tbody = document.querySelector(".table");

function deleteItem(e) {
  console.log(e.target);
  e.target.parentElement.parentElement.remove();
  // for (var i = 0; i < productRow.length; i++) {
  //   tbody.removeChild(productRow[i]);
  // }
}

function getPriceByProduct(itemNode) {}

function updatePriceByProduct() {
  for (let i = 0; i < pu.length; i++) {
    subtot[i].firstElementChild.innerHTML =
      Number(pu[i].firstElementChild.innerHTML) *
      Number(productQuantity[i].value);
  }
}

function getTotalPrice() {
  updatePriceByProduct();
  var sum = 0;
  for (let i = 0; i < subtot.length; i++) {
    sum += Number(
      document.getElementsByClassName("subtot")[i].firstElementChild.innerHTML
    );
  }
  document.querySelector("h2").firstElementChild.innerHTML = sum;
}

function createQuantityInput() {}

function createDeleteButton() {}

function createQuantityNode() {}

function createItemNode(dataType, itemData) {}

function createNewItemRow(itemName, itemUnitPrice) {}

function createNewItem() {
  let newRow = document.createElement("tr");
  newRow.setAttribute("class", "product");
  newRow.innerHTML = `<td class="name">
  <span>${document.getElementById("new-name").value}</span>
</td>

<td class="pu">
  $<span>${document.getElementById("new-price").value}</span>
</td>

<td class="qty">
  <label>
    <input type="number" value=0 min="0">
  </label>
</td>

<td class="subtot">
  $<span>0</span>
</td>

<td class="rm">
  <button class="btn btn-delete">Delete</button>
</td>
</tr>
`;
  tbody.appendChild(newRow);
  newRow.querySelector(".btn-delete").onclick = deleteItem;
}

window.onload = function() {
  var calculatePriceButton = document.getElementById("calc");
  var createItemButton = document.getElementById("create");
  var deleteButtons = document.getElementsByClassName("btn-delete");

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};
