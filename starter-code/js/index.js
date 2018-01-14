var totalProducts = 0

function deleteItem(e){
  e.path[2].remove();
  totalProducts--;
}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {

  var prodPrices = document.getElementsByClassName("prod-price");
  var prodQuantities= document.querySelectorAll(".prod-quantity");
  var totalPrices = document.querySelectorAll(".prod-total-price span");
  var totalPriceAll = 0;
  
  for(i = 0; i < prodPrices.length; i++) {
    var totalPrice = parseFloat((parseFloat(prodPrices[i].innerHTML) * prodQuantities[i].value).toFixed(2));
    totalPrices[i].innerHTML = totalPrice + "€";
    totalPriceAll += totalPrice;
  }

  document.getElementById("total-price").innerHTML = totalPriceAll + "€"
  
}

function createDeleteButton(productRow){
  var newDeleteBtn = document.createElement("button");
  newDeleteBtn.className = "btn btn-delete";
  newDeleteBtn.setAttribute("type","button");
  newDeleteBtn.innerHTML = "Delete";
  newDeleteBtn.onclick = deleteItem;
  productRow[4].appendChild(newDeleteBtn);
}

function createQuantityNode(productRow){
  productRow[3].className = "prod-total-price";
  productRow[3].innerHTML = "<span>0.00€</span>"
}

function createQuantityInput(productRow){
  productRow[2].innerHTML = "<label for='prod-quantity-input-" + totalProducts + "'>Quantity:</label> <input id='prod-quantity-input-" + totalProducts + "' class='prod-quantity' type='text' value='0'>"
}

function createItemNode(dataType, itemData, productRow){
  productRow[0].innerHTML = "<span>" + dataType + "</span>";
  productRow[1].innerHTML = "<span class='prod-price'>" + parseFloat(itemData).toFixed(2) + "€</span>";
}

function createNewItemRow(itemName, itemUnitPrice){
  var prodContainer = document.createElement("tr");
  prodContainer.id = "prod-" + ++totalProducts;
  prodContainer.className = "prod-container"; 
  document.querySelector("#prod-container-all tbody").appendChild(prodContainer);
  for (i = 0; i < 5; i++){
    var cell = document.createElement("td");
    document.getElementById("prod-" + totalProducts).appendChild(cell);
  }
}

function createNewItem(){
  var newProductName = document.getElementById("new-prod-name").value;
  var newProductPrice = document.getElementById("new-prod-price").value;
  createNewItemRow();
  var newProductRow = document.querySelectorAll("#prod-" + totalProducts + " td")
  createItemNode(newProductName, newProductPrice, newProductRow);
  createQuantityInput(newProductRow);
  createQuantityNode(newProductRow);
  createDeleteButton(newProductRow);
}

window.onload = function(){
  var calculatePriceButton = document.getElementById("calc-prices-button");
  var createItemButton = document.getElementById("new-item-create");
  var deleteButtons = document.getElementsByClassName("btn-delete");
  var createItemButton = document.getElementById("create-prod-btn")

  totalProducts = deleteButtons.length;

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i< deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
