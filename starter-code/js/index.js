window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = function() {
      this.parentNode.remove();
    };
  }

function getTotalPrice() {
  var itemPrice = document.getElementsByClassName("price");
  var qty = document.getElementsByClassName("quantity");
  var totalPrice = document.getElementsByClassName("totalprice");
  var mult;
  for (var i = 0; i < itemPrice.length; i++) {
    mult = itemPrice[i].innerHTML * qty[i].value;
    totalPrice[i].innerHTML = mult;
  }
  changeTotalPrice();
}

function changeTotalPrice () {
  var newTotalPrice = document.getElementsByClassName("totalprice");
  var sum = 0;
  for (var j = 0; j < newTotalPrice.length; j++) {
    sum += Number(newTotalPrice[j].innerHTML);
  }
  document.getElementById("finalsum").innerHTML = sum;
}

var copiedDiv = document.querySelector(".container");
var bodyItem = document.getElementById("totalitemlist");
function createNewItem() {
  var newDiv = copiedDiv.cloneNode(true);
  newDiv.querySelector(".name").innerHTML = document.getElementById("newitem").value;
  newDiv.querySelector(".price").innerHTML = document.getElementById("newprice").value;
  newDiv.querySelector(".btn-delete").onclick = function() {
    this.parentNode.remove();
  };
  bodyItem.appendChild(newDiv);
}
};
