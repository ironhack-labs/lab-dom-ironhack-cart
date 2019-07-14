let quantityOfProductInput = document.getElementsByTagName('input');
let priceOfProduct = document.getElementsByClassName('price')
let calculatePriceButton = document.getElementById('calc-prices-button');
let totalPriceOfProduct = document.getElementsByClassName('totalProductPrice');
let totalPrice = document.getElementById('total');
let deleteButtons = document.getElementsByClassName('btn-delete');
let products = document.getElementsByClassName('product');
const parentOfProducts = document.getElementsByClassName('container')[0];
let createButton = document.getElementById('createButton');
let newItemInput = document.getElementsByClassName('newItem')[0];
let newPriceInput = document.getElementsByClassName('newPrice')[0];


function deleteItem(e){
      i=0;
      parentOfProducts.removeChild(products[i]);
      getTotalPrice()
      i++
  }



function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
    let total = 0;
    for(let i=0; i < priceOfProduct.length; i++){

      if(quantityOfProductInput[i].value
      .length === 0){
        quantityOfProductInput[i].value = 0
      }
      
      let totalPerProduct =  parseFloat(priceOfProduct[i].innerHTML.slice(1)) * parseInt(quantityOfProductInput[i].value);
      totalPriceOfProduct[i].innerHTML = `$${totalPerProduct}`;
      total += totalPerProduct;
      totalPrice.innerHTML = `$${total}`;

}
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
  createButton.onclick = function(){
   
  }
}



window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  //createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};

