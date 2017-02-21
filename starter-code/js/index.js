allTheProducts = document.getElementsByClassName('product-row');

function deleteItem(e){
    ((event.currentTarget).parentNode).className="delete";
    ((event.currentTarget).parentNode).innerHTML="";
    getTotalPrice();
    updateProductsInTheCart();
    animateCart();
}

function getPriceByProduct(productId){
  allTheProducts = document.getElementsByClassName('product-row');
  var price = parseInt(((allTheProducts[productId-1].getElementsByClassName('price'))[0].innerHTML).substring(1));
  var quantity = parseInt(((allTheProducts[productId-1].getElementsByClassName('quantity'))[0].value));
  //(allTheProducts[productId-1].getElementsByClassName('sub-total'))[0].innerHTML = "$"+price*quantity;
  (allTheProducts[productId-1].getElementsByClassName('sub-total'))[0].innerHTML = "$"+price*quantity;
  return price*quantity;
}

function updatePriceByProduct(productPrice, index){

}

function updateProductsInTheCart () {
  numberOfProducts = (document.getElementsByClassName('product-row')).length;
  document.getElementById('productsInTheCart').innerHTML = numberOfProducts;
}

function getTotalPrice() {
  numberOfProducts = (document.getElementsByClassName('product-row')).length;
  allTheProducts = document.getElementsByClassName('product-row')
  debugger
  var totalPrice = 0;
  for (var i = 1; i<=numberOfProducts;i++){
    totalPrice += getPriceByProduct(i)
  }

  document.getElementById('total-price').innerHTML = "Total Price: $"+totalPrice;
  document.getElementById('total-price2').innerHTML = "Total Price: $"+totalPrice;

};

function createQuantityInput(){
  newQtyLabel = document.createElement('label');
  newQtyInput = document.createElement('input');
  newQtyLabel.innerHTML = "QTY";
  newQtyInput.setAttribute("value", "0");
  newQtyInput.setAttribute("type", "text");
  newQtyInput.className = "quantity col-xs-7";
  itemSubTotalPrice = document.createElement('span');
  itemSubTotalPrice.innerHTML = "$0";
  itemSubTotalPrice.className = "sub-total col-xs-2";
  allTheProducts = document.getElementsByClassName('product-row');
  (document.getElementsByClassName('product-row'))[allTheProducts.length - 1].appendChild(newQtyLabel);
  (document.getElementsByClassName('product-row'))[allTheProducts.length - 1].appendChild(newQtyInput);
  (document.getElementsByClassName('product-row'))[allTheProducts.length - 1].appendChild(itemSubTotalPrice);
}

function createDeleteButton(){
  deleteButton = document.createElement('button');
  deleteButtonImg = document.createElement('img');
  deleteButton.className = "btn-delete col-xs-7";
  deleteButtonImg.className = "bin-img";
  deleteButtonImg.setAttribute("src", "images/garbage.png");
  allTheProducts = document.getElementsByClassName('product-row');
  (document.getElementsByClassName('product-row'))[allTheProducts.length - 1].appendChild(deleteButton);
  (document.getElementsByClassName('btn-delete'))[allTheProducts.length - 1].appendChild(deleteButtonImg);
}

function createQuantityNode(){

}

function animateCart(){
  document.getElementById('productsInTheCart').className = "productsInTheCartAnimation";
  setTimeout(
    function() {
      document.getElementById('productsInTheCart').className = "";
    }, 1000)
    debugger
}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){
    newRow = document.createElement('div');
    newRow.className = "row product-row";
    (document.getElementsByClassName('products'))[0].appendChild(newRow);
    newName = document.createElement('span');
    newName.id = "product-name";
    newName.className = "col-xs-3";
    newName.innerHTML = itemName;
    newPrice = document.createElement('span');
    newPrice.innerHTML = "$"+itemUnitPrice;
    newPrice.className = "price col-xs-5";
    allTheProducts = document.getElementsByClassName('product-row');
    (document.getElementsByClassName('product-row'))[allTheProducts.length - 1].appendChild(newName);
    (document.getElementsByClassName('product-row'))[allTheProducts.length - 1].appendChild(newPrice);
}

function createNewItem(){
  var newName = document.getElementById('newName').value;
  var newPrice = document.getElementById('newPrice').value;
  createNewItemRow(newName, newPrice);
  createQuantityInput();
  createDeleteButton();
  var deleteButtons = document.getElementsByClassName('btn-delete');
  var calculatePriceButton = document.getElementById('calc-prices-button');
  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
  updateProductsInTheCart();
  animateCart();
}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');
  var allTheProducts = [];
  var numberOfProducts = 0;

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;
  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
  updateProductsInTheCart();
};
