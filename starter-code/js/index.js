function deleteItem(e){
  var item = e.currentTarget.parentNode.parentNode;
  var container =document.getElementById("container");
  container.removeChild(item);
}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  var prices = document.getElementsByClassName("price");
  var quantity = document.getElementsByClassName("quantity");
  var totalPrice = 0;
  for (var i = 0; i<prices.length ; i++){
    document.getElementsByClassName("total-price")[i].innerHTML="$"+(prices[i].innerHTML.slice(1)*quantity[i].value).toFixed(2);
    totalPrice+=prices[i].innerHTML.slice(1)*quantity[i].value;
  }
  document.getElementById("gran-total").innerHTML = "$"+totalPrice.toFixed(2);

}

function createQuantityInput(){
  return "<div class=\"col\"><label>QTY</label><input type=\"number\" name=\"quantity\" class=\"quantity\" value=\"0\"/></div>";
}

function createDeleteButton(){
  return "<div class=\"col\"><button class=\"btn btn-delete\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></button></div>";
}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){
    var itemDiv =""
    itemDiv+="<div class=\"item\" name=\"product\">";
    itemDiv+="<div class=\"col\"><span name=\"name\">"+itemData[0]+"</span></div>";
    itemDiv+="<div class=\"col\"><span class=\"price\" name=\"price\">$"+Number(itemData[1]).toFixed(2)+"</span></div>";
    itemDiv+=createQuantityInput();
    itemDiv+="<div class=\"col\"><span class=\"total-price\" name=\"total-price\">$0.00</span></div>"
    itemDiv+=createDeleteButton();
    itemDiv+="</div>";

    return itemDiv;
}

function createNewItemRow(itemName, itemUnitPrice){
  var container =document.getElementById("container");
  var data =[itemName, itemUnitPrice];
  container.innerHTML+=createItemNode("text", data);
  
}

function createNewItem(){
  var newName = document.getElementById("name").value;
  var newPrice = document.getElementById("price").value;
  if (newName!="" && newPrice > 0){
    createNewItemRow(newName, newPrice);
    document.getElementById("name").value="";
    document.getElementById("price").value=0;
    
    var deleteButtons = document.getElementsByClassName('btn-delete');
    for(var i = 0; i<deleteButtons.length ; i++){
      deleteButtons[i].onclick = deleteItem;
    }
    document.getElementById("price").classList.remove("red");
    document.getElementById("name").classList.remove("red");
  } else {
    document.getElementById("name").value="Ingresa Info";
    document.getElementById("price").value=0;
    document.getElementById("name").classList.add("red");
    document.getElementById("price").classList.add("red");

  }
}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
