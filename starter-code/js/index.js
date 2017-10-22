var unitPrice = document.querySelectorAll(".js-unit-price");
var unitQuantity = document.querySelectorAll(".js-quantity-product").value;
var unitTotal = document.querySelectorAll(".js-total-product");

function deleteItem(e){
  e.parentNode.parentNode.remove();
}

function getPriceByProduct(itemNode, index){
  var itemQuantity = document.getElementsByClassName("quantity");
  return Math.floor(itemQuantity[index].value) * itemNode;
}

function getTotalPrice() {
  var itemPrice = document.getElementsByClassName("price");
  var totalPrice = document.getElementsByClassName("total-price");
  var sum = 0;

  for(var i = 0; i < itemPrice.length; i++) {
    var finalPrice = getPriceByProduct(itemPrice[i].innerHTML, i);
    totalPrice[i].innerHTML = parseFloat(finalPrice).toFixed(2);
    sum += Number(finalPrice);
  }

  var finalSum = document.getElementById("finalsum");
  finalSum.innerHTML = sum;

}

window.onload = function() {
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');
  var initialItem = document.getElementsByClassName("item-holder")[0];

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  function createNewItem(){
    var table = document.getElementById("table");
    var tr = initialItem.cloneNode(true);
    var tableBody = document.getElementById("table-body");
    var newProduct = document.getElementById("newproduct");
    var newPrice = document.getElementById("newprice");
    tr.childNodes[1].innerHTML = newProduct.value;
    tr.getElementsByClassName('price')[0].innerHTML = newPrice.value;
    var button = tr.getElementsByClassName('btn-delete')[0];
    button.onclick = function() {
      deleteItem(this);
    };

    tableBody.appendChild(tr);

  }

    for(var i = 0; i<deleteButtons.length ; i++){
      deleteButtons[i].onclick = function() {
        deleteItem(this);
      };
    }
  };
