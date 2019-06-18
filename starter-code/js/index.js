// let price = Number(document.getElementsByClassName("unit-price")[0].innerText.split('$')[1]);
let price = document.getElementsByClassName("unit-price");
// let quantity = document.getElementsByClassName("quantity")[0].childNodes[1].value;
let quantity = document.getElementsByClassName("quantity");
// let totalPrice = document.getElementsByClassName("product-price")[0].childNodes[0].innerHTML = `$${25.00}`;
let totalPrice = document.getElementsByClassName("product-price");


function deleteItem(e){

}

function getPriceByProduct(){
for(i=0; i<price.length; i++){

  totalPrice[i].childNodes[0].innerHTML = `$${Number(price[i].innerText.split('$')[1]) * Number(quantity[i].childNodes[1].value).toFixed(2)}`;
}
}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {

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

console.log("quantity[0]", quantity);




window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');
  
  getPriceByProduct()
  quantity[0].childNodes[1].value.onChange = getPriceByProduct();

  console.log(calculatePriceButton);
  console.log(createItemButton);
  console.log(deleteButtons);
  console.log("==============");
  console.log(Number(document.getElementsByClassName("unit-price")[0].innerText.split('$')[1]));
  console.log(document.getElementsByClassName("quantity")[0].childNodes[1].value);
  console.log("==============");
  // console.log(document.getElementsByClassName("product-price")[0].childNodes[0].innerHTML);
  // document.getElementsByClassName("product-price")[0].childNodes[0].innerHTML = `$${25.00}`;

  calculatePriceButton.onclick = getTotalPrice;
//  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};

