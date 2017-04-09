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
    var number = quantity[i].value;
    //convert uncorrect inputs (NaN) to 0
    if(number === "" ||isNaN(number)){
      number = 0;
    }
    howMany.push(parseInt(number));
    i++;
  }
//  console.log(number);
  return howMany;
}
//calculate total price
var getTotalPrice = function (){
    var sumTotal = document.getElementById("sum-prices");
    var pricesArray = document.getElementsByClassName('total-price');
    var totalPrices = [];
    var i = 0;


    //for every product
    while(i<pricesArray.length){
      //we call both functions and insert values into array
      var Prices = getPrice();
      var Quantities = getQuantity();
      totalPrices.push(parseInt(Prices[i] * Quantities[i]));
      pricesArray[i].innerHTML = totalPrices[i] + "€";
      sumTotal.innerHTML = totalPrices.reduce(sumTotalPrice) + "€";
      i++;
    }
    console.log(totalPrices);
};
//sum the total prices
function sumTotalPrice(total,num){
  return total + num;
}
