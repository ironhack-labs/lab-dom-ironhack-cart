function getPriceByProduct(i){
  var unitPrice = document.getElementsByClassName('product-cost')[i].innerHTML;
  var itemAmount = document.getElementsByClassName('quantity')[i].children[0].value;
  var totalPrice = unitPrice * itemAmount;

  return totalPrice;
}

function updatePriceByProduct(i) {
  var totalPrice = getPriceByProduct(i);
  console.log(totalPrice);
  var itemTotal = document.getElementsByClassName('total-cost')[i];
  itemTotal.innerHTML = totalPrice;
}

function getTotalPrice (){
  var numbers = [""];
  numbers.push(updatePriceByProduct());
  var totalNumbers = function () { for (var i=0; i < numbers.length; i++) {
          sum = sum + numbers[i];
       }};
  var Total = document.getElementsByClassName('total-price')[0];
  Total.innerHTML = totalNumbers;
}



var calculatePriceButton = document.getElementsByClassName('btn-success')[0];
calculatePriceButton.onclick = function() {
  for (var i=0; i <=document.getElementsByClassName('first-product').length; i++) {
    updatePriceByProduct(i);
    }
};
