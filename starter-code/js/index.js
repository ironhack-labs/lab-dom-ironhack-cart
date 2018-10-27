function deleteItem(e){
  document.getElementById("container").removeChild(e.currentTarget.parentElement.parentElement)
  getTotalPrice()
}

// function getPriceByProduct(itemNode){

// }

// function updatePriceByProduct(productPrice, index){

// }

function getTotalPrice() {
  var totalPrice = 0;
  var productsQty = document.getElementsByClassName("price");
  for (var i = 0; i < productsQty.length; i++) {
  var productPrice = document.getElementsByClassName("price")[i].innerHTML;
  var totalProductPrice = document.getElementsByClassName("total-product-price")[i].innerHTML;
  var productQuantity = document.getElementsByClassName("quantity")[i].value;
  totalProductPrice = (productPrice*productQuantity).toFixed(2);
  document.getElementsByClassName("total-product-price")[i].innerHTML= totalProductPrice;
  totalPrice += parseFloat(totalProductPrice);
  }
  document.getElementById("total-price").innerHTML= totalPrice.toFixed(2);
}

// function createQuantityInput(){

// }

// function createDeleteButton(){

// }

// function createQuantityNode(){

// }

// function createItemNode(dataType, itemData){

// }

// function createNewItemRow(itemName, itemUnitPrice){

// }

function createNewItem(){
  var newProduct = document.getElementsByClassName("product-input")[0].value;
  var newProductValue = document.getElementsByClassName("value-input")[0].value;
  var newDiv = document.createElement("div")
  newDiv.classList.add("align-product")
  newDiv.classList.add("spacer")
  newDiv.innerHTML=`
        <span class="name-left">`+newProduct+`</span>
        <span class="align-product">$<span class="price">`+parseFloat(newProductValue).toFixed(2)+`</span></span>
        <div class="align-product">
          <label for="quantity">QTY</label><br>
          <input type="number" min="0" class="quantity">
        </div>
        <span class="align-product, value-center">$<span class="total-product-price">0.00</span></span>
        <div><button type="submit" class="btn btn-delete">Delete</button></div>`
  
  document.getElementById("container").appendChild(newDiv)
  
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var deleteButtons = document.getElementsByClassName('btn-delete');
  calculatePriceButton.onclick = getTotalPrice;
  deleteButtons.onclick = deleteItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  
  deleteButtons.onclick = deleteItem;

  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
