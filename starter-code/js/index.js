function getTotalPrice() {
  var priceArr = document.getElementsByClassName('productPrice');
  var productPrice = [];
  //calculate price per product
  for (var i = 0; i < priceArr.length; i++) {
    productPrice.push(Number(document.getElementsByClassName('productPrice')[i].textContent) * Number(document.getElementsByTagName('input')[i].value));
    document.getElementsByClassName('priceByProduct')[i].innerHTML = Number(productPrice[i])
  }
  var totalPrice = 0;
  for (var i = 0; i < productPrice.length; i++) {
    totalPrice = totalPrice + productPrice[i];
    document.getElementById('totalPrice').innerHTML = Number(totalPrice);
  }
}

function createNewItem() {
  var parent = document.getElementById('parent');
  var firstChild = document.getElementById('newItems');
  var productName = document.createTextNode(document.getElementById('productNameInput').value);
  var productPriceInput = document.createTextNode(document.getElementById('productPriceInput').value);
  // var createSection = document.createElement('section');
  var createSection = document.getElementById('parent');
  var priceArr = document.getElementsByClassName('productPrice');

  createSection.insertAdjacentHTML("beforeend",
    '<section><div><span class=productName></span></div><div><span class=productPrice></span></div><div><span class=quantity></span><input type="text" name="QTY">Quantity:</div><div><span class=priceByProduct></span><span>€</span></div><button class="btn btn-delete" type="button">Delete</button></section>')
}

window.onload = function () {
  //everything should be written here, function declaration above
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');



  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = function deleteItem(e) {
      e.currentTarget.parentNode.remove();
      console.log(e.currentTarget.parentNode.nodeName)
    }
  }

};
