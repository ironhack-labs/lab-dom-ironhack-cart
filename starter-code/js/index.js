window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');
  var total = 0;

  calculatePriceButton.onclick = getTotalPrice;
  //createItemButton.onclick = createNewItem;

//  for(var i = 0; i<deleteButtons.length ; i++){
//      deleteButtons[i].onclick = deleteItem;
//  }
};
//retrieve prices
function getPrice(){
  var productPrice = document.getElementsByClassName('price');
  var priceList = [];
  var i =0 ;
  while ( i<productPrice.length){
    priceList.push(parseInt(productPrice[i].innerHTML));
    i++;
  }
  //console.log(priceList);
  return priceList;
}
//retrieve quantities
function getQuantity(){
  var quantity = document.getElementsByClassName('QTY');
  var howMany = [];
  var i = 0;
  while(i<quantity.length){
    howMany.push(parseInt(quantity[i].value));
    i++;
  }
  //console.log(howMany);
  return howMany;
}
//calculate total price
var getTotalPrice = function (){

  //pricesArray.forEach(function(){
    var pricesArray = document.getElementsByClassName('total-price');
    var totalPrices = [];
    var i = 0;
    while(i<pricesArray.length){
      //totalPrices.push();
      var Prices = getPrice();
      var Quantities = getQuantity();
      //var doneOperation = ();
      totalPrices.push(parseInt(Prices[i] * Quantities[i]));

      pricesArray[i].innerHTML = totalPrices[i] + "€";
      //totalPrices[i].innerHTML = priceList[i] * howMany[i];
      i++;
    }
    console.log(totalPrices);

    // var total = getQuantity() * getPrice();
    // totalPrice.innerHTML = total + "€";
    //console.log(totalPrice);
    //console.log(total);
//});
  //console.log(pricesArray);
};
