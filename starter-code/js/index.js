function deleteItem(e){
  var line = e.currentTarget.parentNode;
  wrapper = line.parentNode;
  wrapper.parentNode.removeChild(wrapper);
}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
    var price = document.getElementsByClassName('precio');
    var cantidad = document.getElementsByClassName('input');
    var debe = document.getElementsByClassName('total');
    var colecTotal = 0;
      for (i=0; i< price.length; i++){
      var priceNum = price[i].innerHTML.slice(1);
      var total = cantidad[i].value*parseFloat(priceNum);
      debe[i].innerHTML = '$' + total;    
      colecTotal += total;
      
    }    
    var imprimeTotal = document.getElementById('sumasuma');
    imprimeTotal.innerHTML = 'Total Price: $' + colecTotal;
   
     
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
  var nombre = document.getElementById('new-name');
  var precio = document.getElementById('new-price');
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

function calculatePrices(){
  
  }
  

};
