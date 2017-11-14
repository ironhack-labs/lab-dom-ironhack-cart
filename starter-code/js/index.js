function deleteItem(e) {
  el = e.currentTarget;
  el2 = el.parentNode;
  el3 = el2.parentNode;
  el4 = el3.parentNode;
  el4.removeChild(el3);

}

function getPriceByProduct(itemNode) {

}

function updatePriceByProduct(productPrice, index) {

}

function getTotalPrice() {
  unitCost = document.getElementsByClassName("cost-unit-span");
  units = document.getElementsByClassName("quantity-input");
  totalCost = document.getElementsByClassName('span-total');
  totalPrice = 0;
  for (i = 0; i < unitCost.length; i++) {
    if(isNaN(units[i].value)){
      alert("You have introduced an incorrect number");
      break;
    }
    totalCost[i].innerHTML = unitCost[i].innerText * units[i].value;
    totalPrice += unitCost[i].innerText * units[i].value;
  }
  document.getElementById("total-price").innerHTML = totalPrice;
}

function createSpanProductName() {
  // <div>
  //   <span class="span-product-name">
  //     IronShirt
  //   </span>
  // </div>
  divTag = document.createElement('div');
  spanTag = document.createElement('span');
  spanTag.setAttribute('class', 'span-product-name');
  text = document.createTextNode(document.getElementById('new-element-name').value);
  spanTag.appendChild(text);
  divTag.appendChild(spanTag);
  return divTag;
}

function createSpanProductPrice() {
  // <div>
  //   $
  //   <span class="cost-unit-span">
  //     15.00
  //   </span>
  // </div>
  divTag = document.createElement('div');
  text = document.createTextNode('$');
  divTag.appendChild(text);
  spanTag = document.createElement('span');
  spanTag.setAttribute('class', 'cost-unit-span');
  if(isNaN(document.getElementById('new-element-price').value)){
    alert("You have introduced an incorrect number");
  }else{
    text = document.createTextNode(document.getElementById('new-element-price').value);
    spanTag.appendChild(text);
    divTag.appendChild(spanTag);
    return divTag;
  }
}

function createSpanTotal() {
  // <div>
  //   $
  //   <span class="span-total">
  //     0.00
  //   </span>
  // </div>
  divTag = document.createElement('div');
  text = document.createTextNode('$');
  divTag.appendChild(text);
  spanTag = document.createElement('span');
  spanTag.setAttribute('class', 'span-total');
  text = document.createTextNode('0.00');
  spanTag.appendChild(text);
  divTag.appendChild(spanTag);
  return divTag;
}

function createQuantityInput() {
  // <div>
  //   <label for="quantity-input">QTY</label>
  //   <input type="text" name="quantity-input" placeholder="Insert the quantity" class="quantity quantity-input">
  // </div>
  divTag = document.createElement('div');
  labelTag = document.createElement('label');
  labelTag.setAttribute('for', 'quantity-input');
  text = document.createTextNode('QTY');
  labelTag.appendChild(text);
  divTag.appendChild(labelTag);
  inputTag = document.createElement('input');
  inputTag.setAttribute('placeholder', 'Insert the quantity');
  inputTag.setAttribute('class', 'quantity quantity-input');
  divTag.appendChild(inputTag);
  return divTag;
}

function createDeleteButton() {
  // <div>
  //   <button class="btn btn-delete">
  //     Delete
  //   </button>
  // </div>
  divTag = document.createElement('div');
  buttonTag = document.createElement('button');
  buttonTag.setAttribute('class', 'btn btn-delete');
  text = document.createTextNode('Delete');
  buttonTag.appendChild(text);
  buttonTag.onclick = deleteItem;
  divTag.appendChild(buttonTag);
  return divTag;
}

function createQuantityNode() {

}

function createItemNode(dataType, itemData) {

}

function createNewItemRow(){//itemName, itemUnitPrice) {
  container = document.getElementById('container');
  lastChild = document.getElementById('div-calculate-prices');
  divTag2 = document.createElement('div');
  divTag2.setAttribute('class', 'product');
  divTag2.appendChild(createSpanProductName());
  divTag2.appendChild(createSpanProductPrice());
  divTag2.appendChild(createQuantityInput());
  divTag2.appendChild(createSpanTotal());
  divTag2.appendChild(createDeleteButton());
  container.insertBefore(divTag2, lastChild);
  // container[0].children[1].innerHTML = "";
}

window.onload = function() {
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');
  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItemRow;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};
