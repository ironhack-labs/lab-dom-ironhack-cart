function deleteItem(e){

}

function getPriceByProduct(itemNode){
  console.log(itemNode);
  let price = itemNode[1].children[0].innerHTML;
  price = price.substring(1);
  return price;
  
  
}

function updatePriceByProduct(productPrice, index){
  let quantity =  document.getElementsByClassName("whole-product")[index].children[2].children[1].value;
  console.log(quantity);
  let priceProduct = quantity * productPrice;
  document.getElementsByClassName("whole-product")[index].children[3].children[0].innerHTML  = "$" + priceProduct;
  return priceProduct;
}

function getTotalPrice() {
  let totalCartValue = 0;
  for(index = 0 ; index <= document.getElementsByClassName("whole-product").length; index++){
   let sum = updatePriceByProduct(getPriceByProduct(document.getElementsByClassName("whole-product")[index].children), index);
    totalCartValue += sum;
  }
  let totalCart = document.createElement("H1");
  let cartContent = document.createTextNode("Total Price: $" + totalCartValue);
  totalCart.appendChild(cartContent);
  document.getElementById("totalDiv").appendChild(totalCart);
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
 
  //getPriceByProduct(document.getElementsByClassName("whole-product")[0].children);
  //console.log(document.getElementsByClassName("whole-product"));
  
   calculatePriceButton.onclick = getTotalPrice;
  //createItemButton.onclick = createNewItem;
  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};


