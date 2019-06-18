function deleteItem(e){

}

function getPriceByProduct(itemNode){
  return Number(itemNode.children[1].children[0].innerHTML.split('$')[1]);
}

function updatePriceByProduct(productPrice, index){
  let quantity =  document.getElementsByClassName("whole-product")[index].children[2].children[1].value;
  // console.log(quantity);
  let priceProduct = quantity * productPrice;
  document.getElementsByClassName("whole-product")[index].children[3].children[0].innerHTML  = "$" + priceProduct;
  return priceProduct;
}

function getTotalPrice() {
  let totalCartValue = 0;
  // Get all of the current products in the cart
  let currProductsInCart = document.getElementsByClassName("whole-product");

  for(index = 0 ; index < currProductsInCart.length; index++){
   let sum = updatePriceByProduct(getPriceByProduct(currProductsInCart[index]), index);
    totalCartValue += sum;
  }
  console.log(totalCartValue);
  // let totalCart = document.createElement("H1");
  // let cartContent = document.createTextNode("Total Price: $" + totalCartValue);
  // totalCart.appendChild(cartContent);
  document.getElementById("totalDiv").innerHTML = totalCartValue.toFixed(2);
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


