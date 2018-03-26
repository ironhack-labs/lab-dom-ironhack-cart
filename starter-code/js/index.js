var allProducts = document.querySelector(".all-products");

//***calculating the price of one product, inline

  var howMany = document.querySelector(".qty");
  var totalPriceOne= document.querySelector(".total-products-price");
  howMany.onchange = function(){
    var onePrice = document.querySelector(".price-of-one-product");
    onePrice = Number(onePrice.innerHTML.slice(1)); 
  // taking the price, slice, to number
      totalPriceOne.innerHTML = "$"+(onePrice*howMany.value).toFixed(2);
    }

//***calculating the total and displaying it on the bottom
var buttonToCalculate = document.querySelector(".calculate-price");
buttonToCalculate.onclick = function(){
  var allPrices = document.querySelectorAll(".total-products-price");
  var totalPrice = 0;
  for (var i=0; i<allPrices.length; i++){
     totalPrice += Number(allPrices[i].innerHTML.slice(1));
  }
  var outputPrice= document.querySelector(".total-cart-price");
  outputPrice.innerHTML = "Total: $"+totalPrice.toFixed(2);
}

//***delecting an item

var deleteButtons = document.querySelectorAll(".btn-delete");
  deleteButtons.forEach(function(eachButton){
    eachButton.onclick = function(){
      var clickedButton= event.target;
      var clickedDiv = clickedButton.parentNode.parentNode;
      allProducts.removeChild(clickedDiv);
    }
  })


//***creating a new item
var addButton = document.querySelector(".btn-add");
var newProductInput = document.querySelector(".new-product-name");
var newEachProductDiv = document.createElement("div");
var newPriceInput = document.querySelector(".new-price");
addButton.onclick = function(){
    if(newProductInput.value=== "" || newPriceInput.value === ""){
      return;
    }
    
    newEachProductDiv.setAttribute('class', 'each-product');
    var newPrice = Number(newPriceInput.value);
    newEachProductDiv.innerHTML = 
    "<div><span class=\"products-name\">"+newProductInput.value+"</span></div>";
    newEachProductDiv.innerHTML += 
    "<div><span class=\"price-of-one-product\">$"+newPrice.toFixed(2)+"</span></div>";
    newEachProductDiv.innerHTML += 
    "<div><label for=\"quantity\">QTY</label><input type=\"number\" id=\"quantity\" class=\"qty\"></div>";
    newEachProductDiv.innerHTML += 
    "<div><span class=\"total-products-price\">$"+newPrice.toFixed(2)+"</span></div>";
    newEachProductDiv.innerHTML += 
    "<div><button class=\"btn btn-delete\">Delete</button></div>";
    allProducts.appendChild(newEachProductDiv);
    var before = querySelector("#before");
    allProducts.insertBefore(newEachProductDiv, before);

    newPriceInput.value = 0;

    deleteItem();
}

function deleteItem(e){
  
}

function getPriceByProduct(itemNode){

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

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
  }

