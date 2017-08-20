function getPriceByProduct(productos){
  allTheProducts = document.getElementsByClassName("product-row");

  var price = parseInt(((document.getElementsByClassName("price"))[0].innerHTML).substring(1,3));

  var quantity = parseInt(((allTheProducts[productos-1].getElementsByClassName("quantity"))[0].value));

  (allTheProducts[productos-1].getElementsByClassName("sub-total"))[0].innerHTML = "$"+ price*quantity;

  return price*quantity;
}

function getTotalPrice() {
  numberOfProducts = (document.getElementsByClassName("product-row")).length;

  var totalPrice = 0;
  for (var i = 1; i<=numberOfProducts;i++){
    totalPrice += getPriceByProduct(i)
  }

  document.getElementById("total-price").innerHTML = "Total Price: $"+totalPrice;

};

window.onload = function(){
  var calculatePriceButton = document.getElementById("calc-prices-button");
  calculatePriceButton.onclick = getTotalPrice;
};
