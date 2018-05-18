var calculatePriceButton = document.getElementById('calc-prices-button');
var deleteButtons = document.getElementsByClassName('btn btn-delete');
var createItemButton = document.getElementById('new-button');
var items = document.getElementsByClassName('item');


calculatePriceButton.onclick = function() {
  var items = document.getElementsByClassName('item');
  for(var i = 0; i < items.length; i++) {
    var item = items[i];

    var itemQuantity = item.getElementsByClassName('quantity');
    itemQuantity = itemQuantity[0].value
    //console.log(itemQuantity);

    var itemPrice = item.getElementsByClassName('price');
    itemPrice = Number(itemPrice[0].innerText);
    //console.log(itemPrice);

    var itemTotalPrice = item.getElementsByClassName('total-price');
    itemTotalPrice = itemTotalPrice[0].innerText;
    

    itemTotalPrice = itemQuantity * itemPrice;
    console.log(itemTotalPrice.toFixed(2));

    updatePriceByProduct(itemTotalPrice, item);
  }
  
  getTotalPrice(items);
}

//delete item click event: 
for(var i = 0; i < deleteButtons.length; i++) {
  deleteButtons[i].onclick = function(){
    deleteItem(this);
  }
}

function deleteItem(e){
  var item = e.closest('.item');
  var wrap = document.getElementById('wrapper');
  wrap.removeChild(item);
}


function getPriceByProduct(price){
  price = Number(price[0].textContent);
  return price;
}

function updatePriceByProduct(productPrice, index){

  var totalPrice = index.getElementsByClassName('total-price');

  return totalPrice[0].innerText = productPrice.toFixed(2);
}

function getTotalPrice(items) {
  var totalResult = document.getElementById('total-result');
  var prices = [];
  for(var i = 0; i < items.length; i++){
    var item = items[i];
    var itemPrice = item.getElementsByClassName('total-price');
    
    var arrPrices = getPriceByProduct(itemPrice);  

    prices.push(arrPrices);

  }

  return prices.reduce(function(acc, curr){
    var total = acc + curr;
    return totalResult.innerText = '$' + total.toFixed(2);
  });

}

createItemButton.onclick  = function(){
  var inputName = document.getElementById('new-item').value;
  var inputPrice = document.getElementById('new-price').value;
  console.log([inputName, inputPrice]);

  createNewItemRow(inputName, inputPrice);
}

function createQuantityInput(){
  
}

function createDeleteButton(){

}

function createQuantityNode(){
  var newQuantity = document.getElementById('new-price');
  newItem.value
}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){
  var clon = document.getElementsByClassName('item')[0];
  var newProduct = clon.cloneNode(true);
  var insertHere = document.getElementById('wrapper');
  insertHere.appendChild(newProduct);

  var productName = newProduct.getElementsByClassName('product-name');
  productName[0].innerText = itemName;

  var productPrice = newProduct.getElementsByClassName('price');
  productPrice[0].innerText = Number(itemUnitPrice).toFixed(2);

  console.log(productPrice);

}

function createNewItem(){
  var newItem = document.getElementById('new-item');
  newItem.value
}

/*window.onload = function(){
};*/
