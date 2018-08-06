function deleteItem(e) {
  document.querySelector(".content-wrapper").removeChild(e.currentTarget.parentNode.parentNode);
}


function getPriceByProduct(product) {
  var price = product.querySelector(".product-cost-wrapper span").innerHTML.replace("$", "")

  price = parseFloat(price)
  console.log(price);
  return price
}


function updatePriceByProduct(productPrice, product) {
  var quantity = parseInt(product.querySelector(".product-amount-wrapper input").value)

  var totalProductPrice = quantity * productPrice;
  console.log(totalProductPrice)
  product.querySelector(".product-total-cost-wrapper").innerHTML = "$" + totalProductPrice
  return totalProductPrice
}


function getTotalPrice() {
  var products = Array.from(document.getElementsByClassName("product-wrapper"));
  var totalPrice = 0;
  products.forEach(function (product) {

    totalPrice += updatePriceByProduct(getPriceByProduct(product), product)
    //totalPrice+= parseInt(document.querySelector("product-cost-wrapper").innerHTML)*parseInt(document.querySelector("product-amount-wrapper input"));
    //Console.log()product
  })

  document.querySelector(".calculate-prices h2").innerHTML = "$" + totalPrice;
}

function createProductName(name) {
  var pName = document.createElement("div");
  pName.className = "product-name-wrapper";
  var span = document.createElement("span");
  span.innerHTML = name;
  pName.appendChild(span);
  return pName;
}


function createProductCost(cost) {
  var pCost = document.createElement("div");
  pCost.className = "product-cost-wrapper";
  var span = document.createElement("span");
  span.innerHTML = "$"+cost;
  pCost.appendChild(span);
  return pCost;
}


function createQuantityInput() {
  var qInput = document.createElement("div");
  qInput.className = "product-amount-wrapper";

  var qty = document.createElement("label");
  qty.innerHTML = "QTY";

  var quantityInput = document.createElement("input");
  quantityInput.value = 0;
  quantityInput.type = "number"
  quantityInput.min = 0;

  qInput.appendChild(qty);
  qInput.appendChild(quantityInput);
  return qInput;
}

function createProductTotalCost() {
  var ptCost = document.createElement("div");
  ptCost.className = "product-total-cost-wrapper";
  var span = document.createElement("span");
  ptCost.appendChild(span);
  span.innerHTML = "$0";
  return ptCost;
}

function createDeleteButton() {

  var deleteButtonDiv = document.createElement("div");
  deleteButtonDiv.className = "product-delete";
  var deleteButton = document.createElement("button");
  deleteButton.classList.add("btn");
  deleteButton.classList.add("btn-delete");
  deleteButton.innerHTML = "Delete";
  deleteButtonDiv.appendChild(deleteButton);
  deleteButton.onclick = deleteItem;
  return deleteButtonDiv;


}

function createNewItemRow(itemName, price) {

  var wrapper = document.createElement("div");
  wrapper.className = "product-wrapper";
  wrapper.appendChild(createProductName(itemName));
  wrapper.appendChild(createProductCost(price));
  wrapper.appendChild(createQuantityInput());
  wrapper.appendChild(createProductTotalCost());
  wrapper.appendChild(createDeleteButton());
  return wrapper
}

function createNewItem() {
  var input = document.querySelector(".content-wrapper");

  input.appendChild(createNewItemRow(
    document.querySelector("#input-name").value,
    document.querySelector("#input-price").value
  ))

}

window.onload = function () {
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  console.log(deleteButtons)
  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;


};
