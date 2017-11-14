function deleteItem(e){

}

function getPriceByProduct(itemNode){

return parseInt(itemNode.innerHTML.replace("$",""));

}

function updatePriceByProduct(productPrice, index){

  var amountOfProduct = document.getElementsByClassName("quantity");
  var totalPricePerProduct = document.getElementsByClassName("total-price-per-product");
  if (amountOfProduct[index].value > 0) {
    totalPricePerProduct[index].innerHTML = "$ " + (amountOfProduct[index].value * productPrice).toFixed(2);
  }
  return parseInt(totalPricePerProduct[index].innerHTML.replace("$",""));
}


function getTotalPrice() {
  var itemNode = document.getElementsByClassName("price-per-unit");
  var totalPrice = 0;
  for(var i = 0; i < itemNode.length; i++){
    totalPrice += updatePriceByProduct(getPriceByProduct(itemNode[i]), i);
  }
  var totalMoneyNode = document.getElementById("total-price");
  
  totalMoneyNode.innerHTML = totalPrice.toFixed(2);

  function createQuantityInput(){
    
        var qtyInput = document.createElement("div");
        qtyInput.className = "quantity-form";
        var label = document.createElement("label");
        var text = document.createTextNode("QTY");
        label.appendChild(text);
    
        var input = document.createElement("input");
        input.type = "number";
        input.value = 0;
        input.className = "quantity";
        input.name = "amount";
    
        qtyInput.appendChild(label);
        qtyInput.appendChild(input);
        return qtyInput;
    
    }

  function createResultNode() {
      var result = document.createElement("span");
      result.className = "total-price-per-product";
      result.innerHTML = "$0.00";
      return result;
    }
    
    function createDeleteButton(){
      var deleteButton = document.createElement("button");
      deleteButton.className ="btn-delete";
      deleteButton.innerHTML= "DELETE";
      deleteButton.onclick = deleteItem;
      return deleteButton;
      //deleteButton.appendChild()
      }

  function createNameNode(name) {
    var nameNode = document.createElement("span");
    nameNode.className = "product-name";
    nameNode.innerHTML = name;
    return nameNode;
  }
  
  function createPriceNode(price) {
    var priceNode = document.createElement("span");
    priceNode.className = "price-per-unit";
    priceNode.innerHTML = price;
    return priceNode;

}

function createNamePriceDiv() {
	var itemName = document.getElementById("new-item-name");
	var itemPrice = document.getElementById("new-item-price");
	itemPrice = parseInt(itemPrice.value.replace("$","")).toFixed(2);
	var namePriceDiv = document.createElement("div");
	namePriceDiv.className = "item-row";
	namePriceDiv.appendChild(createNameNode(itemName.value));
	namePriceDiv.appendChild(createPriceNode("$" + itemPrice));
	return namePriceDiv;
}


function createQuantityNode(){
	var qntNode = document.createElement("div");
	qntNode.className = "quantity-form";
	var label = document.createElement("label");
	label.for = "amount";
	label.innerHTML = "QTY";
	var input = document.createElement(input);
	input.className = "quantity";
	input.type = "number";
	input.name = "amount";
	qntNode.appendChild(label);
	qntNode.appenChild(input);
	return qntNode;
}
function createItemRow() {
	var rowNode = document.createElement("div");
	rowNode.className = "item";
	rowNode.appendChild(createNamePriceDiv());
	rowNode.appendChild(createQuantityInput());
	rowNode.appendChild(createResultNode());
	rowNode.appendChild(createDeleteButton());
	return rowNode;
}

function createNewItem(){
  var parentNode = document.getElementById("all-products-div");
	var divNode = createItemRow();
	if(divNode.childNodes[0].childNodes[0].innerHTML && divNode.childNodes[0].childNodes[1].innerHTML!=="$NaN"){
		parentNode.appendChild(divNode);
	}
}


window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
