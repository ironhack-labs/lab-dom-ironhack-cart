function deleteItem(e){

}

function getPriceByProduct(itemNode){
  return document.querySelector('#'+itemNode).innerHTML.slice(1);
}

function getUnitsByProduct(itemNode){
  var unitsElem = document.querySelector('#'+itemNode).value;
  return +unitsElem;
}

function updatePriceByProduct(productPrice, index){
  document.getElementById(index).innerHTML='$'+productPrice;
}

function getTotalPrice() {
    var productos = document.querySelectorAll(".product-qty");
    var sumtotal = 0;
    productos.forEach( function(product, idx) {
      var priceElemId = document.querySelectorAll(".product-price")[idx].id;
      var qtyElemId = document.querySelectorAll(".product-qty")[idx].id;
      var totalElemId = document.querySelectorAll(".product-total")[idx].id;

      var productPrice = getPriceByProduct(priceElemId);
      var productUnits = getUnitsByProduct(qtyElemId);
      var productTotal = productPrice * productUnits;
      updatePriceByProduct( productTotal, totalElemId );

      
      console.log(`Precio producto ${priceElemId}  cantidad ${qtyElemId}  total ${productTotal}`);
      sumtotal += productTotal;
    });
    
    console.log(`Total  total ${sumtotal}`);
    var productsTotalElem = document.querySelector('#products-total');
    document.getElementById(productsTotalElem.id).innerHTML='$'+sumtotal;

    

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
/*   var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete'); */

  calculatePriceButton.onclick = getTotalPrice;
//  createItemButton.onclick = createNewItem;

/*   for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  } */
};
