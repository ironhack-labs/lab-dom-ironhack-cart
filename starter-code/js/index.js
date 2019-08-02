function deleteItem(e){
  var deleteButtons = document.getElementsByClassName('btn-delete');
  let child = e.currentTarget;
  let parent = child.parentElement;
  let grandparent = parent.parentElement;
  let greatGrandparent = grandparent.parentElement;
  console.log("Someone's calling this bastard "+child+" Who is this bastard's "+parent+" son");
  console.log(child);
  console.log(parent);
  console.log(grandparent);
  console.log(greatGrandparent);
  grandparent.innerHTML = "";
  grandparent.setAttribute("id","remove");
  greatGrandparent.removeChild(grandparent);
}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  let costs = document.getElementsByClassName("cost");
  let quantities = document.getElementsByClassName("quantity");
  let subtotals = document.getElementsByClassName("subtotal");
  let totalPrice = document.getElementById("total-price");
  let newValue = 0, newTotal = 0;
    
  console.log("User requested for price calculation");
  console.log(subtotals);
    
  for( let i = 0 ; i < costs.length ; i++ ) {
    newValue = parseInt(costs[i].dataset.cost) * parseInt(quantities[i].value);
    console.log(newValue);
    subtotals[i].innerText = "$"+newValue+".00";
    newTotal += newValue;
    totalPrice.innerText = "$"+newTotal+".00";
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
  //createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
