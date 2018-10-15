function deleteItem(e){
  document.querySelector('.all-products').removeChild(e.currentTarget.parentElement.parentElement)
  getTotalPrice()
}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  var quantities = document.querySelectorAll('.quantity input')
  var unitPrices = document.querySelectorAll('.product-price span')
  var totalPrices = document.querySelectorAll('.total-price')
  var $grandTotal = document.querySelector('.grand-total h2 span')
  var grandTotal = 0;
  for (var i=0;i<quantities.length;i++) {
    var totalPriceOfProduct = Number(quantities[i].value) * Number(unitPrices[i].innerText);
    grandTotal += totalPriceOfProduct;
    totalPrices[i].innerText = "$" + totalPriceOfProduct.toFixed(2);
  }
  $grandTotal.innerText = "$" + grandTotal.toFixed(2);
}

function createTotalPrice() {
  var $totalPrice = document.createElement('div');
  $totalPrice.setAttribute('class','total-price');
  $totalPrice.innerText = "$0.00";
  return $totalPrice
}

function createQuantityInput(){
  var $quantityInput = document.createElement('input');
  $quantityInput.setAttribute("type","text");
  $quantityInput.setAttribute("class","quantity");
  $quantityInput.setAttribute("placeholder","0");
  return $quantityInput
}

function createDeleteButton(){
  var $deleteButton = document.createElement('button');
  $deleteButton.setAttribute("class","btn-delete btn");
  $deleteButton.innerText = "DELETE";
  var $div = document.createElement('div');
  $div.appendChild($deleteButton);    //add delete button to new div
  return $div     //returns div
}

function createQuantityNode(){
  var $quantityInput = createQuantityInput()
  var $quantityLabel = document.createElement('label');
  $quantityLabel.innerText = "QTY";
  var $div = document.createElement('div');
  $div.setAttribute("class","quantity");
  $div.appendChild($quantityLabel);
  $div.appendChild($quantityInput);
  return $div
}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){
  var $productNameSpan = document.createElement('span');
  $productNameSpan.innerText = itemName;
  var $productNameDiv = document.createElement('div');
  $productNameDiv.setAttribute("class","product-name");
  $productNameDiv.appendChild($productNameSpan);

  var $productPriceSpan = document.createElement('span');
  $productPriceSpan.innerText = itemUnitPrice;
  var $productPriceDiv = document.createElement('div');
  $productPriceDiv.innerText = "$"
  $productPriceDiv.setAttribute("class","product-price");
  $productPriceDiv.appendChild($productPriceSpan);

  return [$productNameDiv,$productPriceDiv]
}

function createNewItem(){
  var $allProducts = document.querySelector('.all-products');     //selects all-products div
  var $newProduct = document.createElement('div');                //creates empty div
  $newProduct.setAttribute("class","product-container");          //sets class to product-container

  var newProductName = document.querySelector('.new-product-name').value;   //saves name of new product
  var newProductPrice = document.querySelector('.new-product-price').value; //saves price of new product
  var newProductInfo = createNewItemRow(newProductName,Number(newProductPrice).toFixed(2));    // returns array with 2 DOM elements
  
  $newProduct.appendChild(newProductInfo[0]);   //appends new-product div with product name div
  $newProduct.appendChild(newProductInfo[1]);   //appends new-product div with product unit price div
  $newProduct.appendChild(createQuantityNode());   //creates and appends new quantity node to new product
  $newProduct.appendChild(createTotalPrice());    //creates total price field
  $newProduct.appendChild(createDeleteButton());  //creates and appends delete button to new product div

  $allProducts.appendChild($newProduct)         //appends all-products div with new product
  document.querySelector('.new-product-name').value = "";     //resets values
  document.querySelector('.new-product-price').value = "";    // for new product fields

  var deleteButtons = document.getElementsByClassName('btn-delete');    //initializes all delete buttons
  for(var i = 0; i<deleteButtons.length ; i++){                         //including new delete button
    deleteButtons[i].onclick = deleteItem;                              //with functionality
  }
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

