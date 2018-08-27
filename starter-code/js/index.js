function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  list_length = document.getElementsByClassName('unit-price').length
  var total = 0;
  for (i = 0; i <list_length; i++){
    price = parseInt(document.getElementsByClassName('unit-price')[i].innerHTML);
    quantity = parseInt(document.getElementsByClassName('input-quantity')[i].value);
    subtotal = document.getElementsByClassName('subtotal')[i];
    calcSubtotal = price * quantity;
    total += calcSubtotal;
    console.log(total)
    subtotal.innerText = "$"+calcSubtotal
  }
  document.querySelector("h2 span").innerHTML = "$" + total.toFixed(2);
}

function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}

function createNewItem(){
  var div = document.createElement('div');
  div.innerHTML = "<form><input type=\"text\" name=\"item\" placeholder=\"Item\" class=\"input-item\" value=\"Item\"></form>";
  div.setAttribute('class', 'list-content');
  document.getElementById("price-table").appendChild(div);


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
