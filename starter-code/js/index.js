function deleteItem(e) {}

function getPriceByProduct(itemNode) {}

function updatePriceByProduct(productPrice, index) {}

function getTotalPrice() {
  var priceDolar = document.getElementsByClassName("price");
  var quantity = document.getElementsByClassName("quantity");
  var itemsPrice = document.getElementsByClassName("itemsPrice");
  var finalPrice = document.getElementById("finalPrice");
  var price = [];
  var totalPrice = 0;
  for (var i = 0; i < priceDolar.length; i++) {
    var priceArray = priceDolar[i].innerText.split("$");
    price.push(priceArray[1]);
    var finalitemsPrice = price[i] * quantity[i].value;
    itemsPrice[i].innerText = "$" + finalitemsPrice;
    totalPrice += finalitemsPrice;
  }
  console.log(totalPrice);
  finalPrice.innerText = "$" + totalPrice;
}

function createDeleteButton() {
  var father = document.getElementsByClassName("totalWidth");
  father[0].removeChild(event.target.parentNode.parentNode);
}

function createQuantityNode() {}

function createItemNode(dataType, itemData) {}

function createNewItemRow(itemName, itemUnitPrice) {}

function createNewItem() {
  var wrapper = document.querySelector("wrapper");

  wrapper = wrapper.cloneNode(true);
  
  wrapper.querySelector("#name").innerText = document.querySelector(".insertName").value
  wrapper.querySelector("#price").innerText = "$"+ document.querySelector(".insertValue").value
  document.getElementById("main").appendChild(wrapper);

}

/*window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};*/
