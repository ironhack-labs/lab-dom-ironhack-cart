function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  const allProducts = document.querySelectorAll(".product");
  let totalPrice = 0;

  for(let i = 0; i < allProducts.length ; i++){
    const quantity = allProducts[i].querySelector(".quantity-input").value || 0;
    const price = allProducts[i].querySelector(".cost-num").innerText;

    const productTotalPrice = (parseFloat(quantity) * parseFloat(price)).toFixed(2); 
    allProducts[i].querySelector(".total-price").innerText = productTotalPrice;

    totalPrice += Number(productTotalPrice);
  }
  // Total price of all products. Will update in the future
  return totalPrice;
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
  // createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
