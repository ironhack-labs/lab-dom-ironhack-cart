var price;
var priceFloat;
var qty;
var qtyInt;
var total;
var amount;
var priceSum =0;


function deleteItem(e){

}

function getPriceByProduct(){
  price = document.querySelectorAll(".price");
  qty = document.querySelectorAll(".qty");
  

  for(var i=0; i<price.length ; i++){
  
    priceFloat =  parseFloat(price[i].textContent.substring(1));
    amount = parseFloat(qty[i].value);

    total = priceFloat*amount; 
    document.querySelectorAll(".total")[i].innerHTML = `\$${total}`;
    priceSum += total;
    console.log(total);
  }
  
  document.querySelectorAll(".pricesum")[0].innerHTML = `\$${priceSum}`;
  
  }



function updatePriceByProduct(productPrice, index){
}

function getTotalPrice() {
  getPriceByProduct();

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

   calculatePriceButton.onclick = getTotalPrice;
 // createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
