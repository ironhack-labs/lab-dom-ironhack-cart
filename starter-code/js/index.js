
// function deleteItem(e){

// }


// function getPriceByProduct(itemNode){

  let inputCost = document.getElementsByTagName("input")[0]
  console.log(inputCost)

  let calButton = document.getElementById("calBut")


  let cost = document.getElementsByClassName("prodCost")[0]
  console.log(cost);

  let totalProductCost = document.getElementsByClassName("totalProduct")[0]
  console.log(totalProductCost);


  calButton.onclick = () => {
    totalProductCost = inputCost.value * cost.innerHTML
    totalProduct.innerHTML = totalProductCost
  } 
// }
// getPriceByProduct(totalProductCost)

// function updatePriceByProduct(productPrice, index){

// }

// function getTotalPrice() {

// }

// function createQuantityInput(){

// }

// function createDeleteButton(){

// }

// function createQuantityNode(){

// }

// function createItemNode(dataType, itemData){

// }

// function createNewItemRow(itemName, itemUnitPrice){

// }

// function createNewItem(){

// }

// window.onload = function(){
//   var calculatePriceButton = document.getElementById('calc-prices-button');
//   var createItemButton = document.getElementById('new-item-create');
//   var deleteButtons = document.getElementsByClassName('btn-delete');

//   calculatePriceButton.onclick = getTotalPrice;
//   createItemButton.onclick = createNewItem;

//   for(var i = 0; i<deleteButtons.length ; i++){
//     deleteButtons[i].onclick = deleteItem;
//   }
// }
