function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  var totalCost = 0;
  for (var x = 0; x < document.querySelectorAll('.product').length ; x ++) {

  var unitValue = Number(document.querySelectorAll('.cost')[x].innerHTML);
  var totalUnits = Number(document.querySelectorAll('input')[x].value);

  var totalCostProduct = unitValue * totalUnits;

  var totalCost = totalCost + totalCostProduct;


  document.getElementsByClassName('total-cost-product')[x].innerHTML = "$" + totalCostProduct;
  }

  var heading2 = document.querySelectorAll('h2')[0];
    if (document.querySelectorAll('h2')[0])  {
        document.getElementById('total-price-sentence').removeChild(heading2);  
    } 

  var sentenceTotalCostProduct = document.createElement('h2');
  sentenceTotalCostProduct.innerHTML = "Total Price: $" + totalCost;
  document.getElementById('total-price-sentence').appendChild(sentenceTotalCostProduct);
  document.getElementsByTagName('h2')[0].classList.add('finalprice');  
  
  if (typeof document.querySelectorAll('h2')[0].innerHTML.match(/[1-9]/) === "object") {
     document.getElementById('total-price-sentence').removeChild(heading2);    
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

}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  // createItemButton.onclick = createNewItem;

  // for(var i = 0; i<deleteButtons.length ; i++){
  //   deleteButtons[i].onclick = deleteItem;
  // }

};
