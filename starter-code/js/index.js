function deleteItem(){
  let btn = document.getElementById('btn-delete');
  btn.onclick = function () {
      document.getElementById('productList').remove();
      this.remove();
  };
  // let deleteButton = e.parentElement.parentNode;
  // let content = document.querySelector.product-line;
  // content.removeChild(deleteButton);
 
  // let deleteButtons = document.getElementbyId("btn-delete");
  // deleteButtons.onclick = searchDelete();
  // e.currentTarget
  // function searchDelete () {
  //   for (i = 0; i < deleteButtons.length; i++) {
  //     deleteButtons[i]
      
  //   }
  // }

}



function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  let products = document.getElementsByClassName("product");
  let sum = 0.0;
  for (i = 0 ; i < products.length; i++) {
    let inputQty = products[i].getElementsByClassName("quantity");
    let productCost = products[i].getElementsByClassName("productCost");
    let price = parseFloat(productCost[0].innerHTML);
    let quantity = parseInt(inputQty[0].value);
    let result = price * quantity;
    let totalPrice = products[i].getElementsByClassName("totalPrice");
    if (isNaN(result)) {
      totalPrice[0].innerHTML = 0;
  }   else {
      totalPrice[0].innerHTML = result;
      sum += result;
  }
  }
  document.getElementById("sum").innerHTML = sum;
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
  deleteProduct = deleteItem(deleteButtons);
  //createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};

console.log("Hello")