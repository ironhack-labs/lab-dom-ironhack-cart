function deleteItem(){

var deleteButtons = document.querySelectorAll(".btn-delete");

deleteButtons.forEach(button=> {
  button.onclick = function (){

var parentItem = button.parentNode;

var grdParentItem = parentItem.parentNode;

grdParentItem.remove();

      update();


  };
});
};

deleteItem();

/*function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}
*/

function createQuantityInput(){

var item = document.querySelectorAll(".items");

var btnSuccess = document.querySelector(".btn-success");

var totalCart = document.querySelector(".total-cart");

btnSuccess.onclick = function () {

  var total = 0;

  item.forEach(function (oneItem) {

    var singlePrice = oneItem.querySelector(".single-price");
    var userInput = oneItem.querySelector("input");
    var totalPrice = oneItem.querySelector(".total-price");

    totalPrice.innerHTML = singlePrice.innerHTML * userInput.value;
    total += singlePrice.innerHTML * userInput.value;

    totalCart.innerHTML = total;

  });
};
};

createQuantityInput();



function update(){
var item = document.querySelectorAll(".items");

var totalCart = document.querySelector(".total-cart");

var total = 0;

  item.forEach(function (oneItem) {

    var singlePrice = oneItem.querySelector(".single-price");
    var userInput = oneItem.querySelector("input");

    var totalPrice = oneItem.querySelector(".total-price");
    totalPrice.innerHTML = singlePrice.innerHTML * userInput.value;
    total += singlePrice.innerHTML * userInput.value;

    totalCart.innerHTML = total;
  });
};
/*

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}

function createNewItem(){

}

/* window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
*/
