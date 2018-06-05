function deleteItem(e){

}
// Using jquery to browse the DOM and obtain values in html...
//...to obtain total order value for the product.
function getPriceByProduct(itemNode){
  var prices = itemNode.getElementsByClassName("value")[0].innerHTML;
  var qty = itemNode.getElementsByClassName("quantity")[0].value;
  var total = itemNode.getElementsByClassName("total-price")[0];
  total.innerHTML = (prices * qty);
} 


function getTotalPrice(){
  var sum = 0;
  var checkout = document.getElementsByClassName("total-price");
  for(i=0; i<checkout.length; i++) {
    sum = sum + parseInt(checkout[i].innerHTML);
  }
  var grandTotal = document.getElementById("grand-total");
  console.log(grandTotal[0]);
  grandTotal.innerHTML = sum;
}

 window.onload = function() {

$('.add-btn').click((function(){
  var product = 
  (`<div class="product">
  <span class="product-name"><input type="text" name="Product" value="Product"></span>
  <span class="product-cost"><span class="currency">$</span><span class="value">${prompt("Add Product Price")}</span></span>
  <span class="product-qty">QTY<input class="quantity" type="number" name="qty"></span>
  <span class="total-price"><--Please add quantity</span>
  <span class="btn"> <button class="btn-delete" type="button">Delete</button></span>
  </div>`);
  $('#products').append(product);

  $('.quantity').on("change",function(e){
    var parent = $(e.target).parent().parent()[0];
    getPriceByProduct(parent);
  });

  $('.btn-checkout').on('click', function(e){
    getTotalPrice();
  });

  $('.btn-delete').on('click', function(e){
    var parent = $(e.target).parent().parent().remove();
  })
}));



};

