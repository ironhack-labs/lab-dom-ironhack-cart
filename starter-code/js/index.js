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
//retrieve price
function getPrice(){
  var productPrice = document.getElementById('price');
  var price = 0;
  if (productPrice.innerHTML !== "") {
    price = parseInt(productPrice.innerHTML);
  }
  console.log(price);
  return price;
}
//retrieve quantity
function getQuantity(){
  var quantity = document.getElementById('QTY');
  var howMany = 0;
    if (quantity.value !== ""){
      howMany = parseInt(quantity.value);
    }
  //console.log(howMany);
  return howMany;
}
//retrieve every items prices
function getAllPrices(){}
//calculate total price
var getTotalPrice = function (){
  var totalPrice = document.getElementById('total-price');
  var total = getQuantity() * getPrice();
  totalPrice.innerHTML = total + "€";
};
