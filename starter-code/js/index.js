function deleteItem0(){
  var container = document.getElementById("total-products");
  var remove = document.getElementById("product0");
  container.removeChild(remove);
}
function deleteItem1(){
  var container = document.getElementById("total-products");
  var remove = document.getElementById("product1");
  container.removeChild(remove);
}
// function getPriceByProduct(itemNode){
//   return itemNode.getElementsByClassName("price")[0].innerHTML;
// }
// function updatePriceByProduct(productPrice, index){
//   productPrice = getPriceByProduct;
// }
function getTotalPrice() {
  var superTotalPrice = 0;
  for(var i=0; i < document.getElementsByClassName("price").length ;i++){
    var price = document.getElementsByClassName("price")[i].innerHTML;
    var quantity = document.getElementsByClassName("qty")[i].value;
    var totalPrice = (price * quantity);
    document.getElementsByClassName("total-price")[i].innerHTML = totalPrice;
    superTotalPrice += totalPrice;
  }
  document.getElementById("super-total-price").innerHTML = superTotalPrice;
}
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
window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons0 = document.getElementById('delete0');
  var deleteButtons1 = document.getElementById('delete1');
  calculatePriceButton.onclick = getTotalPrice;
  // createItemButton.onclick = createNewItem;
  // var price = document.getElementsByClassName("price")[0].innerHTML;
  // var quantity = document.getElementsByClassName("qty")[0].value;
  // console.log(price * quantity);

    deleteButtons0.onclick = deleteItem0;
    deleteButtons1.onclick = deleteItem1;
};
