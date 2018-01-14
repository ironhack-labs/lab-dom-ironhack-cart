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
  var prodQuantities= document.querySelectorAll(".prod-quantity input");
  var totalPrices = document.querySelectorAll(".prod-total-price span");
  var totalPriceAll = 0;
  
  for(i = 0; i < prodPrices.length; i++) {
    var totalPrice = parseFloat((parseFloat(prodPrices[i].innerHTML) * prodQuantities[i].value).toFixed(2));
    totalPrices[i].innerHTML = totalPrice + "€";
    totalPriceAll += totalPrice;
  }

  document.getElementById("total-price").innerHTML = totalPriceAll + "€"
  
}

function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){
  var nameNode = document.createElement("div");
 // nameNode.innerHTML = 
}

function createNewItemRow(itemName, itemUnitPrice){
  var prodContainer = document.createElement("div");
  prodContainer.id = "prod-" + ++totalProducts;
  prodContainer.className = "prod-container"; 
  console.log(totalProducts)
  document.getElementById("prod-container-all").appendChild(prodContainer)
}

function createNewItem(){
  var newProductName = document.getElementById("new-prod-name").value;
  var newProductPrice = document.getElementById("new-prod-name").value;
  createNewItemRow();
  createItemNode(newProductName, newProductPrice);
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
