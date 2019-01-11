function deleteItem(e){

  var element = document.getElementsByClassName("element");
  e.path[1].remove();
  //var deleteButtons = document.getElementsByClassName('btn-delete');

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {

}

function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(){

var nameProduct = document.getElementById("name-product");
var priceProduct = document.getElementById("price-product");

createNewItemRow(nameProduct.value, parseFloat(priceProduct.value));
}

function createNewItemRow(itemName, itemUnitPrice){

  createNewItem();
  var name = document.getElementsByClassName("name");
  var units = name.length;

  name[units-1].innerHTML = itemName;
  var cost = document.getElementsByClassName("cost");

  cost[units-1].innerHTML = itemUnitPrice;



}

function createNewItem(){
  
  var createItem = document.createElement("div");
  createItem.setAttribute("class","element");
  var divName = document.createElement("div"); 
  var spanName = document.createElement("span");
  spanName.setAttribute("class","name");

  divName.appendChild(spanName);


  var cost = document.createElement("div");
  var costUnit = document.createElement("span");
  costUnit.setAttribute("class","cost");

  cost.appendChild(costUnit);

  var divUnits = document.createElement("div");
  var labelUnits = document.createElement("label");
  var inputUnits = document.createElement("input");
  inputUnits.setAttribute("class","number-units");

  divUnits.innerHTML = "Label";

  divUnits.appendChild(labelUnits);
  divUnits.appendChild(inputUnits);

  var total = document.createElement("div");
  var spanTotal = document.createElement("span");
  spanTotal.setAttribute("class","total-price");

  
  spanTotal.innerHTML = "0€";
  total.appendChild(spanTotal);

  var buttonDelete = document.createElement("button");
  buttonDelete.setAttribute("class","btn-delete");
  buttonDelete.innerHTML = "Delete";
  buttonDelete.onclick = deleteItem;

  createItem.appendChild(divName);
  var parent = document.getElementsByTagName("body")[0]
 
  createItem.appendChild(cost);
  createItem.appendChild(divUnits);
  createItem.appendChild(total);
  createItem.appendChild(buttonDelete);

  parent.appendChild(createItem);

}

function getTotalPrice(){

  var cost = document.getElementsByClassName("cost");
  var quantity = document.getElementsByClassName("number-units");
  var total = document.getElementsByClassName("total-price");
  var buyTotal = document.getElementById("buyTotal");

  var totalBuy = 0;
  for(var i = 0; i < cost.length; i++){
    var sumTotal = parseFloat(cost[i].innerHTML) * parseFloat(quantity[i].value)
  
  total[i].innerHTML = sumTotal;
 totalBuy += sumTotal

  


    }

    buyTotal.innerHTML = "$" + totalBuy;

}  

window.onload = function(){

 



  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');


  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createItemNode;

};
