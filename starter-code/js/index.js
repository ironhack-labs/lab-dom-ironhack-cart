function deleteItem(ele){
  //console.log(e);
 // window.liranBtn = e;
  ele.target.parentElement.parentElement.remove();

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  let rows = document.getElementsByClassName("row");
  console.log(rows);
  for (let i=0; i < rows.length; i++){
    console.log(rows[i]);
    window.liranRow = rows[i];
    let liranRow = rows[i].getElementsByClassName("inputData")[0].value 
    console.log(liranRow)
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

  // calculatePriceButton.onclick = getTotalPrice;
  // createItemButton.onclick = createNewItem;

  for(var i = 0; i < deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
