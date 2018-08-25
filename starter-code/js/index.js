function deleteItem(e){
  var removeProduct1 = document.getElementById("item1");
  // var removeProduct2 = document.getElementById("item2");
 removeProduct1.remove();
 // removeProduct2.remove();

}

function getPriceByProduct(){
  var productsPrices=[];
  var getPrice=document.querySelectorAll(".prices");
  var quantities=document.querySelectorAll(".QTY")
  var totalPrice=document.querySelectorAll(".total-prices")
  for (var i=0;i<totalPrice.length;i++){
    totalPrice[i].textContent="$"+getPrice[i].textContent.slice(1)*quantities[i].value;
    productsPrices.push(totalPrice[i].textContent);
  }
  return productsPrices;
}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  var finalPrice=document.querySelector("#total-price");
  var arrayPrices=getPriceByProduct();
  var sum=0;
  for(var i=0;i<arrayPrices.length;i++){
    arrayPrices[i]=parseFloat(arrayPrices[i].slice(1));
    sum+=arrayPrices[i];
  }
  finalPrice.textContent="$"+sum;
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

  calculatePriceButton.onclick = function(){
   getPriceByProduct();
   getTotalPrice();
  };
  // createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
  

};
