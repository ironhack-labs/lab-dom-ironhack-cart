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
    if(products.length > 0){
    lastProduct.insertAdjacentHTML('afterend',`<div class="row justify-content-between product"><div class="col-4"><span>${newItemInput.value}</span></div><div class="col-2 prices"><span class="price">$${newPriceInput.value}</span></div><div class ="col-4"><label for="quantity">QTY</label><input name="quantity" type="text"></div><div><span class="col-2 totalProductPrice">$0</span></div><button class="col-1 btn-delete">Delete</button></div>`)
    newItemInput.value = ""
    newPriceInput.value = ""
    }
    else {
      parentOfProducts.insertAdjacentHTML('afterbegin',`<div class="row justify-content-between product"><div class="col-4"><span>${newItemInput.value}</span></div><div class="col-2 prices"><span class="price">$${newPriceInput.value}</span></div><div class ="col-4"><label for="quantity">QTY</label><input name="quantity" type="text"></div><div><span class="col-2 totalProductPrice">$0</span></div><button class="col-1 btn-delete">Delete</button></div>`)
      newItemInput.value = ""
      newPriceInput.value = ""
    }

    var deleteButtons = [...document.getElementsByClassName('btn-delete')];
  }




window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');


  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  var deleteButtons = [...document.getElementsByClassName('btn-delete')];

   for(var i = 0; i<deleteButtons.length ; i++){
     deleteButtons[i].onclick = deleteItem;
   }
};

