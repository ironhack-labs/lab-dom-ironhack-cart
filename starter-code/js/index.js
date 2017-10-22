window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = function() {
      this.parentNode.parentNode.remove();
    };
  }
function getTotalPrice() {
  var price = document.getElementsByClassName("price");
  var qty = document.getElementsByClassName("qty");
  var price_items = document.getElementsByClassName("price-items");
  var multi;
  //ojo con carácteres de texto/////
  for (var i = 0; i < qty.length; i++) {

    multi = price[i].innerHTML * qty[i].value;
        console.log("esto " + multi);
    price_items[i].innerHTML = multi;
  }
  changeTotalPrice();
}
function changeTotalPrice () {
  var newTotalPrice = document.getElementsByClassName("price-items");
  var sum_item = 0;
  for (var j = 0; j < newTotalPrice.length; j++) {
    sum_item += Number(newTotalPrice[j].innerHTML);
  }
  document.getElementById("total").innerHTML = "<h2>Total price: $"+sum_item + "</h2>";
}
var parentForm = document.querySelector(".parent");
var itemForm = document.querySelector(".item");
var cloneItem;
function createNewItem() {

  cloneItem = itemForm.cloneNode(true);
  cloneItem.querySelector(".name").innerHTML = document.getElementById("newname").value;
  cloneItem.querySelector(".price").innerHTML = document.getElementById("newprice").value;
  cloneItem.querySelector(".btn-delete").onclick = function() {
    this.parentNode.parentNode.remove();
  };
  parentForm.appendChild(cloneItem);
}
};
