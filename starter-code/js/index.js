function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {

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
  // var calculatePriceButton = document.getElementById('calc-prices-button');
  // var createItemButton = document.getElementById('new-item-create');
  // var deleteButtons = document.getElementsByClassName('btn-delete');

  // calculatePriceButton.onclick = getTotalPrice;
  // createItemButton.onclick = createNewItem;

  // for(var i = 0; i<deleteButtons.length ; i++){
  //   deleteButtons[i].onclick = deleteItem;
  // }
  const calcButton = document.getElementsByClassName("btn-success")[0];

  calcButton.onclick = function(){
  
    let totalCostArray = [...document.getElementsByClassName("single-prod-price")];
    let totalQuantityArray = [...document.getElementsByClassName("prod-qty")];
    let allTotals = 0;
    let totalOrder = document.getElementById("total-order-amount")
    let singleTotalsArray = [...document.getElementsByClassName("single-prod-total")]; 
    const allProductPrices = totalCostArray.map( oneSpan => {
      return +oneSpan.innerHTML.substr(1);
    })
  
    const allQtyPrices = totalQuantityArray.map( oneSpan => {
      return +oneSpan.value;
    })
    
    
    for(let i = 0; i < allProductPrices.length; i++){
      let total = allProductPrices[i] * allQtyPrices[i]; 
      singleTotalsArray[i].innerHTML = "$" + allProductPrices[i] * allQtyPrices[i];
      allTotals += total;
      
    }
    
    totalOrder.innerHTML = 'Total Price: $'+allTotals;
    
  
  }
  

};