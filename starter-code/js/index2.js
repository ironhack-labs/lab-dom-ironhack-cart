function deleteItem(e){

}
// Useing jquery to browse the DOM and obtain values in html...
//...to obtain total order value for the product.
function getPriceByProduct(itemNode){
  var prices = $(itemNode).children('.product-cost').children('#value')[0].innerHTML;
  var qty = $(itemNode).children('.product-qty').children('#quantity')[0].value;
  var total = $(itemNode).children('#total-price')[0];
  total.innerHTML = "$" + (prices * qty);
 }
 
 window.onload = function() {
 $('#quantity').on("change",function(e){
   var parent = $(e.target).parent().parent()[0];
   getPriceByProduct(parent);
 })

 };

 

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



// INDEX 3
function deleteItem(e){

}
// Useing jquery to browse the DOM and obtain values in html...
//...to obtain total order value for the product.
 
 window.onload = function() {

$('.add-btn').click((function(){
  var product = 
  (`<div class="product">
  <span class="product-name">${prompt("Add Product Name")}</span>
  <span class="product-cost"><span class="currency">$</span><span id="value">${prompt("Add Product Price")}</span></span>
  <span class="product-qty">QTY<input id="quantity" type="number" name="qty"></span>
  <span id="total-price"><--Please add quantity</span>
  <span class="btn"> <button class="btn-delete" type="button">Delete</button></span>
  </div>`);
  $('#products').append(product);

  $('#quantity').on("change",function(e){
    var parent = $(e.target).parent().parent()[0];
    getPriceByProduct(parent);
  })

}));

function getPriceByProduct(itemNode){
  var prices = $(itemNode).children('.product-cost').children('#value')[0].innerHTML;
  var qty = $(itemNode).children('.product-qty').children('#quantity')[0].value;
  var total = $(itemNode).children('#total-price')[0];
  total.innerHTML = "$" + (prices * qty);
 }

$('.btn-success').click((function(){
  
  
}))
 };

