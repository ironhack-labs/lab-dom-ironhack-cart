//Event listener over the button
var button = document.getElementsByClassName("btn-success")[0];
var productLength = document.getElementsByClassName("product-row");
button.onclick =function(){ 
  var finalPrice=0;
  for (var i=0;i<productLength.length;i++){
  //pick up the price, the amount of objets and the total amount of cost
  var precio= document.getElementsByClassName("product-price")[i].innerHTML;
  var cantidad= document.getElementsByClassName("quantity")[i].value;
  var total=parseFloat(precio.replace("$", ""))*cantidad;
 //Equal the final price to the pricexunits price
  document.getElementsByClassName("total-price")[i].innerHTML="$"+total;
  finalPrice += total;
  }
document.getElementsByClassName("final-price")[0].innerHTML="$"+finalPrice;
}

//delete button
var btn = document.getElementsByClassName("btn-delete")
for (var i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function(e) {
    e.currentTarget.parentNode.parentNode.remove();
  }, false);
}

//Create button

var createButton = document.getElementsByClassName("createButton")[0];
createButton.onclick = function(){
  var inputName = document.getElementsByClassName("inputName")[0].value;
  var inputPrice= document.getElementsByClassName("inputPrice")[0].value;
  
  var parent = document.getElementById("body");
  var firstChild = document.getElementsByClassName("product-create")[0];
  var pTag = document.createElement("p");
  var text = document.createTextNode("hey");

  pTag.appendChild(text);
  parent.insertBefore(pTag, firstChild); 
}
























/*
window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  //calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
*/