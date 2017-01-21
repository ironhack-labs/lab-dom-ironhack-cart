function deleteItem(){
  this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  var items = document.getElementsByClassName("item-totals");
  var numberOfItems = items.length;
  var sum=0;

  for (var i=0; i < numberOfItems; i++) {
    var unitPrice = Number(document.getElementById("unit-price" + i).textContent.slice(1));
    var quantity = document.getElementById("qty" + i).value;
    var unitTotal = (unitPrice * quantity).toFixed(2)
    document.getElementById(items[i]["id"]).innerHTML = "$" + unitTotal;
    sum += Number(unitTotal);
    document.getElementById("finalTotal").innerHTML = "$" + sum.toFixed(2);
  }
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
  var section = document.getElementsByClassName("container");
  var sectionClone = section[0].cloneNode(true);
  sectionClone.childNodes[1].childNodes[1].innerHTML = this.parentNode.parentNode.childNodes[1].childNodes[1].value;
  this.parentNode.parentNode.childNodes[1].childNodes[1].value = "";
  console.log(this.parentNode.parentNode.childNodes[3].childNodes);
  sectionClone.childNodes[3].childNodes[1].innerHTML = "$" + Number(this.parentNode.parentNode.childNodes[3].childNodes[3].value).toFixed(2).toString();
  this.parentNode.parentNode.childNodes[3].childNodes[3].value = "";
  this.parentNode.parentNode.parentNode.insertBefore(sectionClone,document.getElementById("create-item-row"));
}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var j = 0; j < deleteButtons.length ; j++){
    deleteButtons[j].onclick = deleteItem;
  }
};
