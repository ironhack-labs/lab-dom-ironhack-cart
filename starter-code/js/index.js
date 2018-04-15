function deleteItem(e){

}

//calculate's product's individual price
// let button = document.getElementById("calc-price")
// button.onClick = function(){
//   let x = document.getElementById('price');
//   let pPrice = x.textContent;
//   let y = document.getElementById('quantity').value;
//   return pPrice * y
//   document.getElementById("priceq").innerHTML = "$" + productPrice();
//   }

function getPriceByProduct(itemNode){
  
}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  for (var i=0; i< document.getElementsByClassName('price').length; i++){
    let x = document.getElementsByClassName('price')[i].innerHTML;
    let y = document.getElementsByClassName('quantity')[i].value;
    pPrice = x*y;
    document.getElementsByClassName('product-price')[i].innerHTML = '$' + pPrice;
  }
  for (var i=0; i<document.getElementsByClassName('product-price').length; i++){
    let x = document.getElementsByClassName('product-price')[i].textContent;
    document.getElementsByClassName('total-price')[0].innerHTML = x;
  }
  // let x = document.getElementsByClassName('product-price')[0].textContent;
  //   document.getElementsByClassName('total-price')[0].innerHTML = x;

  // let x = document.getElementsByClassName('price')[0];
  // let pPrice = x.textContent;
  // let y = document.getElementsByClassName('quantity').value;
  // let productPrice = pPrice * y;
  // document.getElementsByClassName('priceq').innerHTML = "$" + productPrice;
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
