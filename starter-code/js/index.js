function deleteItem(e) {
  document.querySelector(".lista").removeChild(e.currentTarget.parentNode.parentNode);
}

function getPriceByProduct(product) {
  var precio = product.querySelector(".costo span").innerHTML.replace("$", "")
  precio = parseFloat(precio)
  return precio;
}

function updatePriceByProduct(productPrice, product) {
  var cantidad = parseInt(product.querySelector(".cantidad input").value)
  var totalProductPrice = cantidad * productPrice;
  product.querySelector(".total-producto").innerHTML = "$" + totalProductPrice
  return totalProductPrice;
}

function getTotalPrice() {
  var products = Array.from(document.getElementsByClassName("producto-fila"));
  var totalPrice = 0;
  products.forEach(function (product) {
    totalPrice += updatePriceByProduct(getPriceByProduct(product), product)
  })
  document.querySelector(".calculate-prices h2").innerHTML = "Total Price: $" + totalPrice;
}

function createProductName(name) {
  var productName = document.createElement("div");
  productName.className = "nombre";
  var span = document.createElement("span");
  span.innerHTML = name;
  productName.appendChild(span);
  return productName;
}

function createProductCost(cost) {
  var productCost = document.createElement("div");
  productCost.className = "costo";
  var span = document.createElement("span");
  span.innerHTML = "$"+cost;
  productCost.appendChild(span);
  return productCost;
}

function createQuantityInput() {
  var cantidadInput = document.createElement("div");
  cantidadInput.className = "cantidad";
  var qty = document.createElement("label");
  var quantityInput = document.createElement("input");
  quantityInput.value = 0;
  quantityInput.type = "number"
  quantityInput.min = 0;
  cantidadInput.appendChild(qty);
  cantidadInput.appendChild(quantityInput);
  return cantidadInput;
}

function createProductTotalCost() {
  var productTotalCost = document.createElement("div");
  productTotalCost.className = "total-producto";
  var span = document.createElement("span");
  productTotalCost.appendChild(span);
  span.innerHTML = "$0";
  return productTotalCost;
}

function createDeleteButton() {
  var deleteBtn = document.createElement("div");
  deleteBtn.className = "borrar-producto";
  var deleteButton = document.createElement("button");
  deleteButton.classList.add("btn");
  deleteButton.classList.add("btn-delete");
  deleteButton.innerHTML = "Delete";
  deleteBtn.appendChild(deleteButton);
  deleteButton.onclick = deleteItem;
  return deleteBtn;
}

function createNewItemRow(itemName, price) {
  var wrapper = document.createElement("div");
  wrapper.className = "producto-fila";
  wrapper.appendChild(createProductName(itemName));
  wrapper.appendChild(createProductCost(price));
  wrapper.appendChild(createQuantityInput());
  wrapper.appendChild(createProductTotalCost());
  wrapper.appendChild(createDeleteButton());
  return wrapper;
}

function createNewItem() {
  var input = document.querySelector(".lista");
  input.appendChild(createNewItemRow(
    document.querySelector("#input-nombre").value,
    document.querySelector("#input-precio").value
  ))
}

window.onload = function () {
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');
  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;
};