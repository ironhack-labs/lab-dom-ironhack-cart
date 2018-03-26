function deleteItem(e) {
   e.parentNode.removeChild(event.currentTarget.parentNode.parentNode);
}

function getPriceByProduct(itemNode) {
  var price = itemNode.getAttribute("value");
  return price;
}

function updatePriceByProduct(productPrice, index) {
  qty = document.getElementsByClassName("quantity");
  spans = document.getElementsByClassName("price-per-qty");
  qty[index].setAttribute("value", qty[index].value);
  var qty = document.getElementsByClassName("quantity")[index].getAttribute("value");
  var price = productPrice * qty;
  var text = "$" + price;
  spans[index].textContent = text;
}


function getTotalPrice() {
  var prices = document.getElementsByClassName("price");
  var sum = 0;
  for (var i = 0; i < prices.length; i++) {
    var price = getPriceByProduct(prices[i]);
    updatePriceByProduct(price, i);
    var qty = document
      .getElementsByClassName("quantity")
      [i].getAttribute("value");
    var sumPrice = price * qty;
    sum += sumPrice;
  }
  document.getElementsByTagName("h2")[0].children[0].textContent = "$" + sum;
}

function createQuantityInput() {
  var input = document.createElement("INPUT");
  input.setAttribute("type", "text");
  input.setAttribute("class", "quantity");
  input.setAttribute("for", "qty");
  input.setAttribute("name", "quantity");
  return input;
}

function createDeleteButton() {
  var button = document.createElement("BUTTON");
  button.setAttribute("type", "submit");
  button.setAttribute("class", "btn-delete");
  button.appendChild(document.createTextNode("Delete"));
  button.onclick = function() {
    deleteItem(button.parentNode.parentNode);
  };
  // button.textContent("Delete");
  return button;
}

// function createQuantityNode() {

// }

// function createItemNode(dataType, itemData) {
  // NO SABEMOS PARA QUE ES
// }

function createNewItemRow(itemName, itemUnitPrice) {
  var name = document.createElement('SPAN');
  var text = document.createTextNode(itemName);
  name.appendChild(text);
  // name.textContent("itemName");
  var price = document.createElement("SPAN");
  price.appendChild(document.createTextNode("$" + itemUnitPrice));
  price.setAttribute('value', itemUnitPrice);
  price.setAttribute('class', 'price');
  var label = document.createElement("label");
  label.setAttribute("for", "qty");
  label.appendChild(document.createTextNode("QTY"));
  var input = createQuantityInput();
  var priceQty = document.createElement("SPAN");
  priceQty.setAttribute("class", "price-per-qty");
  priceQty.appendChild(document.createTextNode("$0.00"));
  // priceQty.textContent("$0.00");
  var button = createDeleteButton();
  var div = document.createElement("DIV");
  div.setAttribute("class", "cart-element");
  var elements = [name, price, label, input, priceQty, button];

  for (let i = 0; i < elements.length; i++) {
      var elemento = document.createElement("DIV");
      elemento.appendChild(elements[i]);
      div.appendChild(elemento);
  }
  document.getElementById("container").appendChild(div);
}

function createNewItem() {
  var name = document.getElementById("product").value;
  var price = document.getElementById("product-price").value;
  createNewItemRow(name, price);

}

window.onload = function() {
  var calculatePriceButton = document.getElementById("calc-prices-button");
  var createItemButton = document.getElementById("new-item-create");
  var deleteButtons = document.getElementsByClassName("btn-delete");

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    var button = deleteButtons[i];
    button.onclick = function() {
      deleteItem(button.parentNode.parentNode);
    }
    // button.addEventListener('click', function() {
    //   deleteItem(button.parentNode.parentNode);
    // }); 
  }
};
