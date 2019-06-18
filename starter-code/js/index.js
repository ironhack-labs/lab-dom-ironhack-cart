

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  // createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }






  function deleteItem(e){

  }
  
  function getPriceByProduct(itemNode){
  
  }
  
  function updatePriceByProduct(productPrice, index){
  
  }
  
  function getTotalPrice() {
  
    let itemPrice = document.getElementsByClassName('item-price');
    let itemQty = document.getElementsByClassName('quantity');
    let itemValue = document.getElementsByClassName('item-value');
    let grandTotal = document.getElementsByClassName('grandTotal');
    console.log(itemValue)
    
    let value = 0
    for(let i = 0; i < itemPrice.length; i ++){
      itemValue[i].innerHTML = `${(Number(itemPrice[i].innerHTML) * itemQty[i].valueAsNumber).toFixed(2)}`
      value += (Number(itemValue[i].innerHTML))
    }
    
    grandTotal[0].innerHTML = `${(Number(value)).toFixed(2)}`
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
};
