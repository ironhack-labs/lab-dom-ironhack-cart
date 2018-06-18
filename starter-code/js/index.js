
innerElement.setAttribute("class", "buttonn btn-delete");
innerElement.innerHTML="Delete";
innerElement.onclick = deleteItem;

function deleteItem(e){
  parent = document.getElementsByTagName("div")[0];
  parent.removeChild(e.currentTarget.parentNode.parentNode);

}

function getPriceByProduct(){

var product = document.getElementsByClassName("name");

var unit = document.getElementsByClassName("number");

var quantity = document.getElementsByClassName("barra");

var total = document.getElementsByClassName("multiplication");

for (i = 0; i < quantity.length; i++) {
    if(parseInt(quantity[i].value)>0){
    total[i].innerHTML= (parseInt(unit[i].innerHTML) * parseInt(quantity[i].value))+".00";
   
  }
  console.log(unit)
  console.log(quantity)  
  }

} 

function updatePriceByProduct(){

}

function getTotalPrice() {

var acquisitions = document.getElementsByClassName("multiplication");
var final = document.getElementById("buy");
var addition = 0;
for (i = 0; i < acquisitions.length; i++) {
var price = parseInt(acquisitions[i].innerHTML);
 additon += price;

} if (addition > 0) {
       final.innerHTML = addition + ".00"
    }
    console.log(unit)
    console.log(quantity) 
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

}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
 // var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
 // createItemButton.onclick = createNewItem;

  for(var i = 0; i < deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
