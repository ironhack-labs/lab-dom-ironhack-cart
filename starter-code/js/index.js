function deleteItem(e){

}

function getPriceByProduct(itemNode){



  
  }

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {

  var priceSelector = parseInt(document.querySelector(".unit-Price").innerHTML);
  console.log(priceSelector)

  for(var i=0; i < priceSelector.length; i++){
    priceSelector[i].onclick = function(e){
      console.log(e.currentTarget.innerHTML);
    }
  }


  var itemQuantity = parseInt(document.querySelector("input").value);
  //console.log(typeof itemQuantity)
  
  var subtotal = document.querySelector(".total-Price").innerHTML;
  //console.log(total);

  document.querySelector(".total-Price").innerHTML=priceSelector*itemQuantity;
   console.log(subtotal)

  var total = document.querySelector(".section");
  console.log(total);
   
 
  
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
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.addEventListener("click",getTotalPrice)
  //createItemButton.addEventListener("click",createNewItem)

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};

