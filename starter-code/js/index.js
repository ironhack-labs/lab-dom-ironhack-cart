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
  // if(typeof(units.value) instanceof Number){
  totalPrice = 0;
  for (i = 0; i < unitCost.length; i++) {
    totalCost[i].innerHTML = unitCost[i].innerText * units[i].value;
    totalPrice += unitCost[i].innerText * units[i].value;
  }
  document.getElementById("total-price").innerHTML = totalPrice;
  // }else{
  // alert("The quantity has to be a number value");
  // }
}

function createQuantityInput() {
  // <div>
  //   <label for="quantity-input">QTY</label>
  //   <input type="text" name="quantity-input" placeholder="Insert the quantity" class="quantity quantity-input">
  // </div>
  divTag= document.createElement('div');
  labelTag= document.createElement('label');
  labelTag.setAttribute('for', 'quantity-input');
  text = document.createTextNode('QTY');
  labelTag.appendChild(text);
  divTag.appendChild(labelTag);
  // inputTag= document.createElement('input');
  // inputTag.setAttribute('placeholder', 'Insert the quantity');
  // inputTag.setAttribute('class', 'quantity quantity-input');
  // buttonTag.appendChild(text);
  // divTag.appendChild(buttonTag);
  return divTag;
}

function createDeleteButton() {
  // <div>
  //   <button class="btn btn-delete">
  //     Delete
  //   </button>
  // </div>
  divTag= document.createElement('div');
  buttonTag= document.createElement('button');
  buttonTag.setAttribute('class', 'btn-delete btn');
  text = document.createTextNode('Delete');
  buttonTag.appendChild(text);
  divTag.appendChild(buttonTag);
  return divTag;
}

function createQuantityNode() {

}

function createItemNode(dataType, itemData) {

}

function createNewItemRow(itemName, itemUnitPrice) {

}

function createNewItem() {
  container = document.getElementById('container');
  lastChild = document.getElementById('div-calculate-prices');
  divTag = document.createElement('div');
  divTag.setAttribute('class', 'product');
  divTag.appendChild(createQuantityInput());
  divTag.appendChild(createDeleteButton());
  container.insertBefore(divTag, lastChild);
  // container[0].children[1].innerHTML = "";
}

window.onload = function() {
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');
  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};
