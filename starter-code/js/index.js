var getProduct = document.getElementsByClassName('product-name');
var getUnitPrice = document.getElementsByClassName('product-price');
var getUnitQty = document.getElementsByClassName('quantity');
var getTotalProductPrice = document.getElementsByClassName('total-product-price');
var deleteButtons = document.getElementsByClassName('btn-delete');

  function getPriceByProduct() {

    for( i = 0; i < getProduct.length; i++ ) {
      var totalPrice = Number(getUnitPrice[i].innerHTML.replace(/[^0-9\.]+/g,"")) * getUnitQty[i].value;
      document.getElementsByClassName('total-product-price')[i].innerHTML = totalPrice;
    }
    getTotalPrice();
  }

function getTotalPrice() {
  var priceArray = [];
  for(i = 0; i < getProduct.length; i++) {
    var productPriceValue = parseInt(getTotalProductPrice[i].innerHTML);
    priceArray.push(productPriceValue);
  }
  var total = priceArray.reduce(function(a,b) {
    return a + b;}, 0);

  document.getElementById('spanTotalPrice').innerHTML =  total;
}

function deleteRow(){
  for(i = 0; i < getProduct.length; i++) {
    deleteButtons[i].addEventListener('click', function (e) {
      e.currentTarget.parentNode.parentNode.remove();
    });
  }
}


