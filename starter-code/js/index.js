// at least 3 onclick events
// at least one getElementById
// at least one getElementsByTagName
// at least one getElementsByClassName


// declare variable by selecting by class name
// use map to sum
// 
// function changeColor() {
//   var discoBoxes = document.getElementsByClassName("disco-box");
//   for (i=0; i<discoBoxes.length; i++) {
//     discoBoxes[i].style.backgroundColor = generateRandomColor();
//   }
// }



window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

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
    let priceItem = document.getElementsByTagName('span');
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