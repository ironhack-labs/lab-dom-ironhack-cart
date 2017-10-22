var unitPrice = document.querySelectorAll(".js-unit-price");
var unitQuantity = document.querySelectorAll(".js-quantity-product").value;
var unitTotal = document.querySelectorAll(".js-total-product");

function deleteItem(e){
  e.parentNode.parentNode.remove();
  getTotalPrice();
}

function getPriceByProduct(itemNode, index){
  var itemQuantity = document.getElementsByClassName("quantity");
  return Math.floor(itemQuantity[index].value) * itemNode;
}

function getTotalPrice() {
  var itemPrice = document.getElementsByClassName("price");
  var totalPrice = document.getElementsByClassName("total-price");
  var sum = 0;
  var finalPrice;

  //To iterate for every elements
  for(var i = 0; i < itemPrice.length; i++) {
    finalPrice = getPriceByProduct(itemPrice[i].innerHTML, i);
    totalPrice[i].innerHTML = parseFloat(finalPrice).toFixed(2);
    sum += Number(finalPrice);
  }

  //To update the total
  var finalSum = document.getElementById("finalsum");
  finalSum.innerHTML = sum;
}

window.onload = function() {

  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');
  var initialItem = document.querySelector(".item-holder");

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  function createNewItem(){
    var table = document.getElementById("table");
    var tr = initialItem.cloneNode(true); //To clone the node and his childs.
    var tableBody = document.getElementById("table-body");
    var newProduct = document.getElementById("newproduct");
    var newPrice = document.getElementById("newprice");
    var button;

    //We check if the input has value and show a warning

    if(!newProduct.value || !newPrice.value) {
      alert("You need enter a value");
    } else {
      tr.childNodes[1].innerHTML = newProduct.value;
      tr.querySelector('.price').innerHTML = newPrice.value;
      button = tr.querySelector('.btn-delete');
      button.onclick = function() {
        deleteItem(this);
      };

      //To reset the values
      tr.querySelector('.quantity').value = 0;
      tr.querySelector('.total-price').innerHTML = 0;
      newPrice.value = 0;
      newProduct.value = '';

      //To append new element
      tableBody.appendChild(tr);
    }
  }

    for(var i = 0; i<deleteButtons.length ; i++){
      deleteButtons[i].onclick = function() {
        deleteItem(this);
      };
    }
  };
