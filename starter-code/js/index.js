function deleteItem(e){
  var item = e.currentTarget.parentNode.parentNode;
  var container = document.getElementById("container");
  container.removeChild(item);
}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  //Toma todos los elementos de la clase price y crea un array
  var prices = document.getElementsByClassName("price");
  //Toma todos los elementos de la clase price y crea un array
  var quantity = document.getElementsByClassName("quantity");
  var totalPrice = 0
  for(var i = 0; i < prices.length; i++)
  {
    //Imprime el precio total por producto
    document.getElementsByClassName("total-price")[i].innerHTML = "$" + (prices[i].innerHTML.slice(1)*quantity[i].value).toFixed(2);
    //Acumula el total a pagar de todos los productos
    totalPrice += prices[i].innerHTML.slice(1)*quantity[i].value;
  }
  //Imprime en el DOM el total de todos los productos
  document.getElementById("gran-total").innerHTML = "$" + totalPrice.toFixed(2);
}

function createQuantityInput(){
  return "<div class=\"col\"><label>QTY</label><input type=\"number\" class=\"quantity\" value=\"0\"/></div>"
}

function createDeleteButton(){
  return "<div class= \"col\"><button class=\"btn btn-delete\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></button></div>";
}

function createQuantityNode(){
 //return "<div class=\"col\"><label>QTY</label><input type=\"number\" class=\"quantity\" value=\"0\"/></div>"
}

function createItemNode(dataType, itemData){
  var itemDiv = "<div class=\"item\" name=\"product\">";
  itemDiv += "<div class=\"col\"><span name=\"name\">" + itemData[0] + "</span></div>";
  itemDiv += "<div class=\"col\"><span class=\"price\">$" + Number(itemData[1]).toFixed(2) + "</span></div>";
  itemDiv += createQuantityInput();
  itemDiv += "<div class=\"col\"><span class=\"total-price\">$0.00</span></div>";
  itemDiv += createDeleteButton()+ "</div>";
  return itemDiv;
}

function createNewItemRow(itemName, itemUnitPrice){ 
  var container = document.getElementById("container");
  container.innerHTML += createItemNode("text", [itemName, itemUnitPrice]);
}

function createNewItem(){
  var newName = document.getElementById("name").value;
  var newPrice = document.getElementById("price").value;

  if(newName != "" && newPrice > 0 ){
      createNewItemRow(newName, newPrice);
      document.getElementById("name").value = "";
      document.getElementById("price").value = 0;
      var deleteButtons = document.getElementsByClassName('btn-delete');
      for(var i = 0; i<deleteButtons.length ; i++){
        deleteButtons[i].onclick = deleteItem;
      }
      document.getElementById("name").classList.remove("red");
      document.getElementById("price").classList.remove("red");
  } else {
      document.getElementById("name").value = "";
      document.getElementById("price").value = 0;
      document.getElementById("name").classList.add("red");
      document.getElementById("price").classList.add("red");
  }
}




window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  var deleteButtons = document.getElementsByClassName('btn-delete');
  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
