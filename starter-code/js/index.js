function deleteItem(){
    var child = event.currentTarget.parentNode.parentNode;
    child.parentNode.removeChild(child);
}

//Funciona pero no se como. Estoy un poco angustiado.

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  var unitPrices = document.getElementsByClassName("unit-price");
  var quantities = document.getElementsByClassName("QTY");
  var productTotalPrices = document.getElementsByClassName("product-total-price");
  var totalCart = 0;
  for(i=0;i<unitPrices.length;i++){
    var totalPrice = 0;
    unitPrice = unitPrices[i].innerHTML;
    quantity= parseInt(quantities[i].value);
    finalPrice = parseInt(unitPrice.substring(1,unitPrice.length));
    totalPrice += quantity*finalPrice;
    totalCart += totalPrice;
    productTotalPrices[i].innerHTML = "$"+totalPrice;
  }
  document.getElementById("product-total-cart").innerHTML = totalCart;
}

function createQuantityInput(){
   return '<input type="number" class="QTY" value="0">';
}

function createDeleteButton(){
  return '<div class="col-xs-1"><button onclick="deleteItem()" type="button" class="btn btn-delete" id="0">delete</button></div>';
}

function createQuantityNode(){
  return '<div class="qtyInput"><label for="qty">QTY</label>'+ createQuantityInput() +'</div>';
}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}

function createTotalPriceItem () {
  return '<div class="col-xs-1 product-total-price"</div>';
}

function createNewItemRow(itemName, itemUnitPrice){
  var newItemRow = '<div class="Product"><div class="col-xs-2"><span>'+itemName+'</span></div> <div class="unitPrice"> <p>itemUnitPrice</p></div>'+createQuantityNode()+createTotalPriceItem()+createDeleteButton()+'</div>';
  var section = document.getElementById('parent');
  section.innerHTML += newItemRow;
}

function createNewItem(){
  var itemName = document.getElementById('name').value;
  var itemUnitPrice = document.getElementById('unitPrice').value;
  createNewItemRow(itemName, itemUnitPrice);
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
