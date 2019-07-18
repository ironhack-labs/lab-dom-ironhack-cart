let quantityOfProductInput = document.getElementsByTagName('input');
let priceOfProduct = document.getElementsByClassName('price')
let calculatePriceButton = document.getElementById('calc-prices-button');
let totalPriceOfProduct = document.getElementsByClassName('totalProductPrice');
let totalPrice = document.getElementById('total');
let products = document.getElementsByClassName('product');
let parentOfProducts = document.getElementsByClassName('products-parent')[0];
let newItemInput = document.getElementsByClassName('newItem')[0];
let newPriceInput = document.getElementsByClassName('newPrice')[0];
let deleteButtons = document.getElementsByClassName('btn-delete');



function deleteItem(e){
  parentOfProducts.removeChild(e.currentTarget.parentNode.parentNode);
  getTotalPrice();
  }



function getPriceByProduct(itemNode){
  
}

function updatePriceByProduct(productPrice, index){
  
}

//to do: try with reduce method
function getTotalPrice() {
    let total = 0;
    if(deleteButtons.length === 0){
      totalPrice.innerText = `$0`
    }
    for(let i=0; i < priceOfProduct.length; i++){

       if(quantityOfProductInput[i].value
       .length === 0){
         quantityOfProductInput[i].value = 0
       }

       if(typeof parseInt(quantityOfProductInput[i].value) != "number"){
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
  let newDeleteButton = deleteButtons[deleteButtons.length - 1];
  newDeleteButton.onclick = deleteItem;
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
    lastProduct.insertAdjacentHTML('afterend',`<tr class = "product"><th scope="row"></th><td>${newItemInput.value}</td><td class = "price">$${newPriceInput.value}</td><td><label for="quantity">QTY</label><input name="quantity" type="number"></td><td class = "totalProductPrice">$0</td><td><button class="btn-delete">Delete</button></td></tr>`)
    newItemInput.value = ""
    newPriceInput.value = ""
    }
    else {
      parentOfProducts.insertAdjacentHTML('afterbegin',`<tr class = "product"><th scope="row"></th><td>${newItemInput.value}</td><td class = "price">$${newPriceInput.value}</td><td><label for="quantity">QTY</label><input name="quantity" type="number"></td><td class = "totalProductPrice">$0</td><td><button class="btn-delete">Delete</button></td></tr>`)
      newItemInput.value = ""
      newPriceInput.value = ""
    }
    createDeleteButton();
  }




window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');


  calculatePriceButton.onclick = getTotalPrice;
   createItemButton.onclick = 
  function() {
    if(newPriceInput.value.length === 0 || newItemInput.value.length === 0){
    alert("Please enter a new item and a new price.")
  }
    else{
      createNewItem()
    }
  }

   for(var i = 0; i<deleteButtons.length ; i++){
     deleteButtons[i].onclick = deleteItem;
     
   }
};

