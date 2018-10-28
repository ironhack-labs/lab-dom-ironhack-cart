function remove() {

}

function getPriceByProduct() {
  var currPrice = parseFloat(document.getElementsByClassName("price")[0].innerHTML);
  var currQuantity = document.getElementById("quantity").value;
  return currQuantity * currPrice
}
function getPriceByProduct2() {
  var currPrice = parseFloat(document.getElementsByClassName("price")[1].innerHTML);
  var currQuantity = document.getElementById("quantity2").value;
  return currQuantity * currPrice
}

function updatePriceByProduct(productPrice, index) {

}

function getTotalPrice() {

}

function createQuantityInput() {

}

function createDeleteButton() {

}

function createQuantityNode() {

}

function createItemNode(dataType, itemData) {

}

function createNewItemRow(itemName, itemUnitPrice) {

}

function createNewItem() {

}

window.onload = function () {
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var calculatePriceButton2 = document.getElementById('calc-prices-button2')
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

/*
  function getPriceByProduct() {
    var currPrice = parseFloat(document.getElementsByClassName("price")[0].innerHTML);
    var currQuantity = document.getElementById("quantity").value;
    return currQuantity * currPrice
  }
  */

  calculatePriceButton.addEventListener('click', function () {
    document.getElementsByClassName("total")[0].innerHTML = getPriceByProduct()
  })
  calculatePriceButton2.addEventListener('click', function () {
    document.getElementsByClassName("total")[1].innerHTML = getPriceByProduct2()
  })

  //createItemButton.onclick = createNewItem;

  deleteButtons[0].onclick = function () {    
    deleteButtons[0].parentNode.remove()
  }

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};
