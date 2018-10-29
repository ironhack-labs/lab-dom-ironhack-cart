window.onload = function(){
  
  var deleteButton = document.getElementsByClassName("delete")[0];
  var calcTotalBtn = document.getElementById("calculate-total-btn");
  var price = document.getElementsByClassName("price")[0].innerHTML;
  var quant = document.getElementsByClassName("q")[0].value;
  var subtotal = document.getElementsByClassName("subtotal")[0];
  var addItemButton = document.getElementById("addItem");
  var theCartItems = document.getElementById("shoppingItems");

  calcTotalBtn.onclick = function(){
    var basketTotal = document.getElementById("baskettotal");
    var quantities = document.getElementsByClassName("q")
    var prices = document.getElementsByClassName("price")
    var subtotals = document.getElementsByClassName("subtotal")
    var theTotal = 0
    for (let i = 0; i < quantities.length; i++) {
      subtotals[i].innerHTML = (quantities[i].value * prices[i].innerHTML)
      theTotal += (quantities[i].value * prices[i].innerHTML);
    }
    basketTotal.innerHTML = theTotal;
  }

  function deleteRow(event){
    var theRow = event.currentTarget.parentNode.parentNode.parentNode
    theCartItems.removeChild(theRow);
  }

  deleteButton.onclick = deleteRow;
  
  addItemButton.onclick = function(){
    var newItemPrice = document.getElementById("priceItem").value;
    var newItemName = document.getElementById("nameItem").value;

    theCartItems.insertAdjacentHTML("beforeend",`
        <div class="row">
        <ul>
          <li class="name">${newItemName}</li>
          <li>$<span class="price">${newItemPrice}</span></li>
          <li><input class="q" type="number" value="0" name="" id=""></li>
          <li>$<span class="subtotal">0</span></li>
          <li><button class="delete">Delete</button></li>
        </ul>
        </div>
      `)

      var allButtons = document.getElementsByClassName("delete")
      var lastDeleteButton = allButtons[allButtons.length-1]
      
      lastDeleteButton.onclick = deleteRow
  } 
};








// var productPrice = parseFloat(document.getElementById('product-price').innerHTML)
// var productQuantityElem = document.getElementById('QTY-input');
// var totalPrice = document.getElementById('total-price');
// var theBody= document.getElementsByTagName("body")[0]

// var element = document.getElementById('update-price');
// var allPrices = document.getElementsByClassName("total-price-per-product");

// element.addEventListener("click", function(){
//   updatePriceByProduct(productPrice, productQuantityElem.value);
//   updateTotalBasketPrice(allPrices);
// });
// function updatePriceByProduct(productPrice, productQuantity){
//   totalPrice.innerHTML = productPrice * productQuantity;
// }

// var totalBasketPrice = document.getElementById("total-basket-price");

// function updateTotalBasketPrice (pricesInBasket){
//   totalBasketPrice.innerHTML = getTotalPrice(allPrices);
// }

// function getTotalPrice(pricesInBasket) {
//   var totalPrice = 0;
//   for (i = 0; i < pricesInBasket.length; i++){
//     totalPrice = totalPrice + pricesInBasket[i];
//   }
//   return totalPrice;
// }

// window.onload = function(){
//   var calculatePriceButton = document.getElementById('calc-prices-button');
//   var createItemButton = document.getElementById('new-item-create');
//   var deleteButtons = document.getElementsByClassName('btn-delete');

//   calculatePriceButton.onclick = getTotalPrice;
//   createItemButton.onclick = createNewItem;

//   for(var i = 0; i<deleteButtons.length ; i++){
//     deleteButtons[i].onclick = deleteItem;
//   }
// };

