
function deleteItem(e){
	unitPrice = e.currentTarget.parentNode.parentNode;
  unitPrice.parentNode.removeChild(unitPrice);
}

function getPriceByProduct(unitPrice){
	return unitPrice.innerHTML;
}

function updatePriceByProduct(productPrice, index){
	quantity = document.getElementsByClassName('product-quantity');
	finalProductPrice = document.getElementsByClassName('total-product-price');

  finalProductPrice[index].innerHTML = "";

	if(quantity[index].value >= 0){
    newText = quantity[index].value * productPrice;
    newTextNode = document.createTextNode(newText);
    finalProductPrice[index].appendChild(newTextNode);
	} else {
    ceroText = "0.00";
    ceroTextNode = document.createTextNode(ceroText);
    finalProductPrice[index].appendChild(ceroTextNode);
  }

	return finalProductPrice[index].innerHTML;
}

function getfinalProductPrice() {
	var unitPrice = document.getElementsByClassName('cost-unit');
	var totalPrice = 0;
	for(var i = 0; i < unitPrice.length; i++){
		totalPrice += parseInt(updatePriceByProduct(getPriceByProduct(unitPrice[i]), i));
	}
	var totalPriceResult = document.getElementById('total-price-span');
  totalPriceResult.innerHTML = "";

  newTotalPrice = document.createTextNode(totalPrice);
  totalPriceResult.appendChild(newTotalPrice);
}

function createQuantityInput(){
  quantityInput = document.createElement("input");
  quantityInput.className = "product-quantity";
  quantityInput.setAttribute("name", "product-quantity");
  quantityInput.setAttribute("value", "0");
  quantityInput.setAttribute("min", "0");
  quantityInput.setAttribute("type", "number");

  return quantityInput;
}

function createDeleteButton(){
  deleteBtnDiv = document.createElement('div');
  deleteBtnDiv.className = "btn-delete-container";

  deleteBtn = document.createElement('button');
  deleteBtn.className = "btn btn-delete";
  textDeleteBtn = document.createTextNode("Delete");
  deleteBtn.appendChild(textDeleteBtn);
  deleteBtn.onclick = deleteItem;

  deleteBtnDiv.appendChild(deleteBtn);

  return deleteBtnDiv;
}

function createQuantityNode(){
  quantityDiv = document.createElement("div");
  quantityDiv.className = "quantity";

  quantityLabel = document.createElement("label");
  quantityLabel.setAttribute("for", "product-quantity");
  quantityLabelText = document.createTextNode("QTY: ");
  quantityLabel.appendChild(quantityLabelText);

  quantityDiv.appendChild(quantityLabel);
  quantityDiv.appendChild(createQuantityInput());

  return quantityDiv;
}

function createUnitName() {
  unitName = document.getElementById("new-product-name");
  unitNameText = document.createTextNode(unitName.value);

  unitNameDiv = document.createElement("div");
  unitNameDiv.className = "product-name";

  unitNameSpan = document.createElement("span");

  unitNameSpan.appendChild(unitNameText);
  unitNameDiv.appendChild(unitNameSpan);

  return unitNameDiv;
}

function createUnitPrice() {
  unitPrice = document.getElementById("new-product-price");
  unitPriceText = document.createTextNode(unitPrice.value);

  unitPriceDiv = document.createElement("div");

  unitPriceSpan = document.createElement("span");
  unitPriceSpan.className = "cost-unit";

  unitPriceSpan.appendChild(unitPriceText);
  unitPriceDiv.appendChild(unitPriceSpan);

  return unitPriceDiv;
}

function createTotalProductPriceDiv() {
  totalPriceDiv = document.createElement("div");
  totalPriceDiv.className = "total-product-price";

  totalPriceSpan = document.createElement("span");
  totalPriceSpanText = document.createTextNode("0");

  totalPriceSpan.appendChild(totalPriceSpanText);
  totalPriceDiv.appendChild(totalPriceSpan);

  return totalPriceDiv;
}

function createNewItemRow(){
  productWrapper = document.createElement("div");
  productWrapper.className = "product-wrapper flexbox-container";

  productWrapper.appendChild(createUnitName());
  productWrapper.appendChild(createUnitPrice());
  productWrapper.appendChild(createQuantityNode());
  productWrapper.appendChild(createTotalProductPriceDiv());
  productWrapper.appendChild(createDeleteButton());

  return productWrapper;
}

function createNewItem(){
  pageWrapper = document.getElementById("page-wrapper");
  productNode = createNewItemRow();

  if (document.getElementById("new-product-name").value.length > 0 && document.getElementById("new-product-price").value > 0) {
    pageWrapper.appendChild(productNode);
  } else {
    alert("Check if you enter a correct name and price");
  }
}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getfinalProductPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
