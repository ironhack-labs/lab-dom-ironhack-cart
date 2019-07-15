let quantityOfProductInput = document.getElementsByTagName('input');
let priceOfProduct = document.getElementsByClassName('price')
let calculatePriceButton = document.getElementById('calc-prices-button');
let totalPriceOfProduct = document.getElementsByClassName('totalProductPrice');
let totalPrice = document.getElementById('total');
let products = document.getElementsByClassName('product');
let parentOfProducts = document.getElementsByClassName('container')[0];
let newItemInput = document.getElementsByClassName('newItem')[0];
let newPriceInput = document.getElementsByClassName('newPrice')[0];



function deleteItem(e){
  parentOfProducts.removeChild(e.currentTarget.parentNode)
  getTotalPrice()
  }



function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
    let total = 0;
    for(let i=0; i < priceOfProduct.length; i++){

      if(priceOfProduct[0] = undefined){
        totalPrice.innerHTML = 0;
        }

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
    lastProduct = products[products.length-1]
    lastProduct.insertAdjacentHTML('afterend',`<div class="product"><div><span>${newItemInput.value}</span></div><div class="prices"><span class="price">$${newPriceInput.value}</span></div><div><label for="quantity">QTY</label><input name="quantity" type="text"></div><div><span class="totalProductPrice">$0</span></div><button class="btn-delete">Delete</button></div>`)
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

