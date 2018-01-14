function deleteItem(e) {
	var item = e.currentTarget.parentElement.parentElement;
	var parentAll = document.getElementById("main");
	main.removeChild(item);
}

function getPriceByProduct(itemNode) {
	return parseFloat(itemNode.innerHTML.replace(/[^\d.]/g, ""));
}

function updatePriceByProduct(productPrice, index) {
	var element = document.getElementsByClassName("items-wrapper")[index];
	var priceString = productPrice.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 2 });
	var text = document.createTextNode(priceString);
	var newSpan = document.createElement("span");
	newSpan.appendChild(text);
	var totalPriceElement = element.children[3];
	totalPriceElement.innerHTML = "";
	totalPriceElement.appendChild(newSpan);
}

function getTotalPrice() {
	var container = document.getElementById("main");
	var elements = container.getElementsByClassName("items-wrapper");
	var elementsArr = [].slice.call(elements);
	var totalPrice = 0;
	var error = false;
	elementsArr.forEach(function (element, index) {
		var price = getPriceByProduct(element.children[1]);
		var quantity = element.getElementsByClassName("quantity")[0].value;
		if (isNaN(quantity)) {
			alert("Quantities must be numbers");
			error = true;
		} else {
			updatePriceByProduct(price * quantity, index);
			totalPrice += price * quantity;
		}
	});
	var totalPriceElement = document.getElementById("total-price");
	totalPriceElement.innerHTML = "";
	if (!error) {
		var text = document.createTextNode(totalPrice.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 2 }));
		totalPriceElement.appendChild(text);
	}
}

function createQuantityInput(){
	var newInput = document.createElement("input");
	newInput.setAttribute("class", "quantity");
	newInput.setAttribute("value", "0");
	return newInput;
}

function createDeleteButton(){
	var newButton = document.createElement("button");
	newButton.setAttribute("class", "btn-delete btn");
	newButton.onclick = deleteItem;
	var text = document.createTextNode("Delete");
	newButton.appendChild(text);
	return newButton;
}

function createQuantityNode(){
	var newCell = document.createElement("div");
	var newLabel = document.createElement("label");
	var text = document.createTextNode("QTY ");
	newLabel.appendChild(text);
	newCell.appendChild(newLabel);
	newCell.appendChild(createQuantityInput());
	return newCell;
}

function createItemNode(dataType, itemData){
	var newCell = document.createElement("div");
	newCell.setAttribute("class", "item");
	switch (dataType) {
		case "name":
			var newSpan = document.createElement("span");
			var text = document.createTextNode(itemData);
			newSpan.appendChild(text);
			newCell.appendChild(newSpan);
			break;
		case "unitPrice":
			var newSpan = document.createElement("span");
			var text = document.createTextNode(itemData.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 2 }));
			newSpan.appendChild(text);
			newCell.appendChild(newSpan);
			break;
		case "quantity":
			var quantityNode = createQuantityNode();
			newCell.appendChild(quantityNode);
			break;
		case "totalPrice":
			var newSpan = document.createElement("span");
			var text = document.createTextNode(itemData.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 2 }));
			newSpan.appendChild(text);
			newCell.appendChild(newSpan);
			break;
		case "deleteButton":
			newCell.appendChild(createDeleteButton());
			break;
		default:
			break;
	}
	return newCell;
}

function createNewItemRow(itemName, itemUnitPrice){
	var newRow = document.createElement("div");
	newRow.setAttribute("class", "items-wrapper");
	document.getElementById("main").appendChild(newRow);
	newRow.appendChild(createItemNode("name", itemName));
	newRow.appendChild(createItemNode("unitPrice", itemUnitPrice));
	newRow.appendChild(createItemNode("quantity", ""));
	newRow.appendChild(createItemNode("totalPrice", 0));
	newRow.appendChild(createItemNode("deleteButton", ""));
	return newRow;
}

function createNewItem() {
	var itemName = document.getElementById("new-name");
	var itemNameValue = itemName.value;
	if (itemNameValue == "") {
		alert("Name is required");
	} else {
		var itemUnitPrice = document.getElementById("new-quantity");
		var itemUnitPriceValue = itemUnitPrice.value;
		if (itemUnitPriceValue == "") {
			alert("Price is required");
		} else {
			if (isNaN(itemUnitPriceValue)){
				alert("Price must be a number");
			} else {
				document.getElementById("main").appendChild(createNewItemRow(itemNameValue, parseFloat(itemUnitPriceValue)));
				itemName.value = "";
				itemUnitPrice.value = "";
			}
		}
	}
}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
