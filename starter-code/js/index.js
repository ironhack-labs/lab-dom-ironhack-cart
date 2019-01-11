function deleteItem(e) {}

function getPriceByProduct(itemNode) {
  // div.innerHtml --> coger valor (su texto) del div seleccionado
  // div.innerHtml='nuevoTexto' --> cambiar el texto de dentro de ese div
  var products = document.querySelectorAll('.inline-elements');
  console.log(products);

  products.forEach(function(val) {
    console.log(val);
    var priceUnit = val.querySelector('.prices span').innerHTML;
    var priceNumber = priceUnit.split('$');
    var price = priceNumber[1];
    

    var quantityProduct = val.querySelector('.quantity input').value;
    
    var pricemultiply = price * quantityProduct;

    var totalPrice = (val.querySelector('.sum-prices span').innerHTML = pricemultiply + '$');
    
    console.log(totalPrice);
    });

  getTotalPrice()


  //parseFloat(cadena);
}

function updatePriceByProduct(productPrice, index) {}

function getTotalPrice() {

  var priceTotal = document.querySelectorAll(".sum-prices span");
  var priceUnit = 0;
  priceTotal.forEach(function(val){
      priceUnit = priceUnit + parseFloat(val.innerHTML);
  });

  document.querySelector("#prTotal").innerHTML = priceUnit + "$";


}

function createQuantityInput() {}

function createDeleteButton() {}

function createQuantityNode() {}

function createItemNode(dataType, itemData) {}

function createNewItemRow(itemName, itemUnitPrice) {}

function createNewItem() {}

window.onload = function() {
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  var priceButton = document.getElementById('btn-calculate');
  priceButton.onclick = getPriceByProduct;

  //calculatePriceButton.onclick = getTotalPrice;
  //createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};
