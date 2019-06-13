const qtyIntem = document.querySelectorAll("input")
const product = document.querySelector(".product") 
const name = document.querySelector('.pr-name')
const priceStr = document.querySelectorAll(".pr-price")
const deleteBtn = document.querySelector('.btn-delete')
const clacBtn = document.querySelector('.btn-success')
const itemTotal = document.querySelectorAll(".item-total")



function deleteItem(e){

}

function getPriceByProduct(itemNode,index){
  let priceNum = parseInt(itemNode[index].textContent.substring(1))
  return priceNum
}

function updatePriceByProduct(){
  for(let i = 0; i <itemTotal.length; i++)
  itemTotal[i].textContent = `$${getTotalPrice(priceStr,i)}.00`
}

function getTotalPrice(itemNode,index) {
 return getPriceByProduct(itemNode,index)*createQuantityInput(index)
}

function createQuantityInput(index){
  return qtyIntem[index].value
}

//function createDeleteButton(){}

//function createQuantityNode(){}

//function createItemNode(dataType, itemData){}

//function createNewItemRow(itemName, itemUnitPrice){}

//function createNewItem(){}

clacBtn.onclick = function(){
  updatePriceByProduct()
}

/*window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

 //calculatePriceButton.onclick = getTotalPrice;
 //createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};*/
