function deleteItem(e) {
    var product = e.currentTarget.parentNode.parentNode;
    console.log(product);
    while (product.hasChildNodes()) {
        product.removeChild(product.lastChild);
    }
}

function getPriceByProduct(itemNode) {

}

function updatePriceByProduct(productPrice, node, index) {
    document.getElementsByClassName(node)[index].innerHTML = productPrice;
}

function substringPrice(price) {
    return price.substring(1, price.length);
}

function getTotalPrice(e) {
    var prices = document.querySelectorAll('span.price'); // So that it doesn't take the empty input
    var quantity = document.getElementsByClassName('quantity');
    for (var i = 0; i < prices.length; i++) {
      var totalProductPrice = '$' + (substringPrice(prices[i].innerHTML) * quantity[i].value).toFixed(2);
      updatePriceByProduct(totalProductPrice, 'total-product-price', i)
    }

    var total = document.getElementsByClassName('total')[0];
    var products = document.getElementsByClassName('product');
    console.log(products);

    var totalPrice = 0;
    for (var i = 0; i < products.length; i++) {
      var child = products[i].getElementsByClassName('total-product-price')[0];
      totalPrice += parseInt(substringPrice(child.innerHTML));
    }
    totalPrice = '$' + totalPrice.toFixed(2);
    updatePriceByProduct(totalPrice, 'total', 0);
}

function createQuantityInput() {

}

function createDeleteButton() {
  var deleteButtons = document.getElementsByClassName('btn-delete');

  for (var i = 0; i < deleteButtons.length; i++) {
      deleteButtons[i].onclick = deleteItem;
  }}

function createQuantityNode() {

}

function createItemNode(dataType, itemData) {

}

function createNewItemRow(itemName, itemUnitPrice) {
    var parent = document.getElementById('products');
    var products = document.getElementsByClassName('product');
    var last_product = document.getElementById('product-preview');
    var inputs = last_product.getElementsByTagName('input');
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].value = "";
    }

    var new_product = document.createElement('div');
    new_product.setAttribute('class', 'product');
    var content = `
      <div class="product-name"><span class="name">` + itemName + `</span></div>
      <div class="product-price"><span class="price">$` + itemUnitPrice + `</span></div>
      <div class="product-quantity">
          <label for="quantity">QTY</label>
          <input class="quantity" type="number" name="quantity" value="0" />
      </div>
      <div><span class="total-product-price">$0.00</span></div>
      <div>
          <button class="btn btn-delete">Delete</button>
      </div>
  `;

    new_product.innerHTML = content;
    parent.insertBefore(new_product, last_product);
    createDeleteButton();
}

function createNewItem(e) {
    var products_names = document.getElementsByClassName('name');
    var new_product_name = products_names[products_names.length - 1].value;
    var products_prices = document.getElementsByClassName('price');
    var new_product_price = parseInt(products_prices[products_prices.length - 1].value).toFixed(2);
    createNewItemRow(new_product_name, new_product_price);
}

window.onload = function() {
    var calculatePriceButton = document.getElementById('calc-prices-button');
    var createItemButton = document.getElementById('new-item-create');
    var deleteButtons = document.getElementsByClassName('btn-delete');
    console.log(deleteButtons);

    calculatePriceButton.onclick = getTotalPrice;
    createItemButton.onclick = createNewItem;

    for (var i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].onclick = deleteItem;
    }
};
