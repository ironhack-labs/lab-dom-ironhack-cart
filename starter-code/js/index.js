
function deleteItem(e){

  e.currentTarget.parentNode.parentNode.remove();

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {

  var numIT = document.getElementsByClassName("price").length
  var granTotal = document.getElementById("granTotal");
    
    granTotal.innerHTML = 0

  for (products = 0; products < numIT; products++) {
    var precio = document.getElementsByClassName("price")[products];
    var cantidad = document.getElementsByClassName("qty")[products];
    var total = document.getElementsByClassName("total")[products];
    var sumaTotal = document.getElementsByClassName("quantify total")[products];
    

    var precioNum = ""
    
    for (num = 0; num < precio.innerHTML.length; num++) {
      if (isNaN(precio.innerHTML.substr(num,1)) === false || precio.innerHTML.substr(num,1) === "." ) {
        precioNum = precioNum + precio.innerHTML.substr(num,1);
      };
    }

    total.innerHTML = (parseFloat(precioNum) * parseInt(cantidad.value)) 
    
    granTotal.innerHTML = parseFloat(granTotal.innerHTML) + parseFloat(sumaTotal.innerHTML);
    console.log((parseFloat(granTotal.innerHTML)));
  }

  granTotal.innerHTML = "$" + granTotal.innerHTML;

  for (num = 0; num < precio.innerHTML.length; num++) {
    var total = document.getElementsByClassName("total")[num];
    
    total.innerHTML = "$" + total.innerHTML;
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
  var item = createElement("span");
  item.innerHTML = itemName;
  var newItemRow = document.getElementById("padre");
    newItemRow.appendChild(item);
  var price = createElement("span");
    price.innerHTML = itemUnitPrice;
    var newItemPrice = document.getElementById("padre");
      newItemPrice.appendChild(price);
}

function createNewItem(){
  createNewItemRow("Ironcup","$30.00");

  console.log("agrega")
}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  deleteButtons.onclick = deleteItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
