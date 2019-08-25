function deleteItem(e){

}

function getPriceByProduct(itemNode){

  const price = itemNode.querySelector(".first_price").innerHTML;
  const input = itemNode.querySelector("input").value;
  let price_final = itemNode.querySelector(".price_final");
  let price2 = Number(price.slice(1));
  let price_final2 = price2*input;
  price_final.innerHTML = `$${price_final2}`
  return price_final2
}

function updatePriceByProduct(productPrice, index){

}
function getTotalPrice() {
  var arr = [];
  const totalPrice = document.querySelectorAll(".cart");
  totalPrice.forEach((e) => arr.push(getPriceByProduct(e)));
  const big_total_price = document.querySelector(".big_total_price");
  big_total_price.innerHTML = arr.reduce((acc, curr) => acc + curr);
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
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
