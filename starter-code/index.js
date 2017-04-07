var greatTotal = 0;

function checkPrice(str, qty, tot) {
  var total;

  if(qty <= 0 || qty == ""){
    total = 0;
  }
  else{
    total = str*qty;
  }

  tot.innerHTML = '$' + total +'.00';

  return total;
}

// =============
// TOTAL PRICE =======================================
// =============
function totalPrice() {
    var price1 = document.querySelector('.price').innerHTML;
    var qty_1 = document.querySelector('.quantity').value;
    var total1 = document.querySelector('.total');

    var price2 = document.querySelector('.price-2').innerHTML;
    var qty_2 = document.querySelector('.quantity-2').value;
    var total2 = document.querySelector('.total-2');

    window.greatTotal = checkPrice(price1, qty_1, total1) + checkPrice(price2, qty_2,total2);

    var total = document.querySelector('.sumTotal');
    total.innerHTML = greatTotal +'.00';

}

// =============
// REMOVE BTN =======================================
// =============

function remove_1() {
  var price1 = document.querySelector('.price').innerHTML;
  var qty_1 = document.querySelector('.quantity').value;
  var total1 = document.querySelector('.total');

  document.querySelector('.total').innerHTML = '$0.00';
  var reset = document.querySelector('.quantity');
  reset.value = reset.defaultValue;

  var total = document.querySelector('.sumTotal');
  total.innerHTML = window.greatTotal -= checkPrice(price1, qty_1,total1);


}

function remove_2() {

  var price2 = document.querySelector('.price-2').innerHTML;
  var qty_2 = document.querySelector('.quantity-2').value;
  var total2 = document.querySelector('.total-2');

  document.querySelector('.total-2').innerHTML = '$0.00';
  var reset = document.querySelector('.quantity-2');
  reset.value = reset.defaultValue;

  var total = document.querySelector('.sumTotal');
  total.innerHTML = window.greatTotal -= checkPrice(price2, qty_2,total2);
}
