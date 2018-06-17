function deleteItem(e){
    var elem = document.getElementById('firstItem');
    elem.parentNode.removeChild(elem);
  
    var elem = document.getElementById('secondItem');
    elem.parentNode.removeChild(elem);

    var elem = document.getElementById('thirdItem');
    elem.parentNode.removeChild(elem);

    var elem = document.getElementById('fourItem');
    elem.parentNode.removeChild(elem);

    var elem = document.getElementById('fiveItem');
    elem.parentNode.removeChild(elem);
   }

   deleteItem(e)

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
{
        var valor1=verificar("precio1 valor1");
        var valor2=verificar("precio2 valor2");
        var valor3=verificar("precio3 valor3");
        var valor4=verificar("precio4 valor4");
        var valor4=verificar("precio5 valor5");
        
        document.getElementById("total").value=parseFloat(precio1)+parseFloat(precio2)+parseFloat(precio3)+parseFloat(precio4)+parseFloat(precio5);
    }
}

getTotalPrice()

function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){
 var newItem= document.createElement(NodeList);
 document
}

function createNewItemRow(itemName, itemUnitPrice){
  document.createElement(tagName);

  var parent = document.getElementsByTagName("body")[0];
     parent.appendChild(rowElement);


}

function createNewItem(){
document.createElement(tagName);

var parent1 = document.getElementsByTagName("body")[0];
   parent.appendChild(element);

var parent2 = document.getElementsByTagName("body")[1];
   parent.appendChild(element);

var parent3 = document.getElementsByTagName("body")[2];
   parent.appendChild(element);

var parent4 = document.getElementsByTagName("body")[3];
   parent.appendChild(element);

var parent5 = document.getElementsByTagName("body")[4];
   parent.appendChild(element);
}

createNewItem()

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
