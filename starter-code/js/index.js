function getPriceByProduct(item) {
  var qty = document.getElementsByClassName('units')[item].value;

  // If the value types in the input is not a number, we modify the value of input and set value 0.
  if (isNaN(qty)) {
    document.getElementsByClassName('units')[item].value = 0;
    qty = 0;
  } else {
    parseInt(document.getElementsByClassName('units')[item].value);
  }

  var price = document.getElementsByClassName('price')[item].innerHTML;
  price = price.split('$');
  price = parseFloat(price[1]).toFixed(2);

  // Calculate Price
  var totalOfProduct = qty * price;
  // totalOfProduct = totalOfProduct.toFixed(2);
  var elementTotal = document.getElementsByClassName('total-of-product')[item];
  elementTotal.innerHTML = "$" + totalOfProduct.toFixed(2);

  return totalOfProduct;

}

function getTotalPrice() {
  var totalOfProduct = 0;
  var totalPrice = 0;

  var items = document.getElementsByClassName('item');

  for (var i = 0; i < items.length; i++) {
    // Get total Price of one product
    totalOfProduct = getPriceByProduct(i);
    // totalOfProduct = parseFloat(totalOfProduct).toFixed(2);

    // Total Price
    totalPrice += totalOfProduct;
    var elementTotal = document.getElementById('total-price');
    elementTotal.innerHTML = " $" + totalPrice.toFixed(2);
  }

}

function myFunction() {
  var node = document.createElement("LI");
  var textnode = document.createTextNode("Water");
  node.appendChild(textnode);
  document.getElementById("myList").appendChild(node);
}

var products = [{
    name: "IronShirt",
    price: "$15.00"
  },
  {
    name: "IronJeans",
    price: "$19.12"
  },
  {
    name: "SO Shirt",
    price: "$21.22"
  },
  {
    name: "Mario Bros Shirt",
    price: "$21.27"
  },
  {
    name: "Iron Glasses",
    price: "$15.13"
  }
];



function createNewItem() {
  var productIndex = Math.floor(Math.random() * products.length);

  newItemHTML = '<div class="row">' +
    '  <div class="item" id="ironbubble-head">' +
    '    <div class="product-name col-xs-5">' +
    '      <span id="' + products[productIndex].name + '">' + products[productIndex].name + '</span>' +
    '    </div>' +
    '    <div class="col-xs-5">' +
    '      <span class="price" id="">' + products[productIndex].price + '</span>' +
    '    </div>' +
    '    <div class="col-xs-5">' +
    '      <label for="units">QTY</label>' +
    '      <input name="units" id="" class="units quantity" type="text" value="0" maxlegnth="4">' +
    '    </div>' +
    '    <div class=".col-xs-5">' +
    '      <span id="" class="total-of-product">$0.00</span>' +
    '    </div>' +
    '    <div class="delete .col-xs-5">' +
    '      <input type="button" id="" class="btn btn-delete" value="Delete">' +
    '    </div>' +
    '  </div>' +
    '</div>';


  var parent = document.getElementById('container');
  parent.insertAdjacentHTML('beforeend', newItemHTML); // Insert HTML Just inside the element, after its last child.
}
//
// function createQuantityInput() {}
//
// function createDeleteButton() {}
//
// function createQuantityNode() {}
//
// function createItemNode(dataType, itemData) {}
//
// function createNewItemRow(itemName, itemUnitPrice) {}
//
// function deleteItem(e) {}
//
// function updatePriceByProduct(productPrice, index) {}


window.onload = function() {
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  // for (var i = 0; i < deleteButtons.length; i++) {
  //   deleteButtons[i].onclick = deleteItem;
  // }
};
