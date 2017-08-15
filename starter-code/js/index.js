function deleteItem(mouseEvent){
  var body = document.querySelector('#library');
  var parentDiv = mouseEvent.path[1];
  body.removeChild(parentDiv);
}

function getPriceByProduct(itemNode){
  var quantity = Number(itemNode.querySelector("input").value);
  if(!quantity)
    quantity = 0;
  var cost = Number(itemNode.querySelector(".product .cost").innerHTML);
  var totalDiv = itemNode.querySelector(".product .total");
  var totalValue = cost * quantity;
  totalDiv.innerHTML = "$"+ totalValue;
  return totalValue;
}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  var totalSumHeader = document.querySelector("#total-cost");
  var products = document.querySelectorAll(".product");
  var sum = 0;
  products.forEach(function(product){
    sum += getPriceByProduct(product);
  });
  console.log(sum);
  totalSumHeader.innerHTML = "Total Price: $ " + sum;
}

function createQuantityInput(){
  var quantInput = createItemNode("input", '');
  quantInput.setAttribute('type', 'text');
  quantInput.setAttribute('placeholder', '0');
  quantInput.setAttribute("class","product-quanity");
  return quantInput;
}

function createDeleteButton(){
  var button = createItemNode("button", 'Delete');
  button.setAttribute('class', 'btn btn-delete');
  button.onclick =  deleteItem;
  return button;
}

function createQuantityNode(){
  var quantDiv = createItemNode("div", '');
  quantDiv.setAttribute("class", "quantity");
  quantDiv.innerHTML = "QTY "
  var quantInput = createQuantityInput();
  quantDiv.appendChild(quantInput);

  return quantDiv;
}

function createItemNode(dataType, itemData){
  var itemNode = document.createElement(dataType);
  if(typeof itemData !== "string")
    itemNode.appendChild(itemData);
  else
    itemNode.innerHTML = itemData;
  return itemNode;
}

function createNewItemRow(itemName, itemUnitPrice){
  var product = createItemNode("div", '');
  product.setAttribute("class","product");
  var title = createItemNode("div", itemName);
  var costSpan = createItemNode("span",itemUnitPrice);
  costSpan.setAttribute("class","cost");
  var costDiv = createItemNode("div","$");
  costDiv.appendChild(costSpan);
  var quantDiv = createQuantityNode();
  var totalDiv = createItemNode("div", "$0");
  totalDiv.setAttribute("class","total");
  product.appendChild(title);
  product.appendChild(document.createTextNode(" "));
  product.appendChild(costDiv);
  product.appendChild(document.createTextNode(" "));
  product.appendChild(quantDiv);
  product.appendChild(document.createTextNode(" "));
  product.appendChild(totalDiv);
  product.appendChild(document.createTextNode(" "));
  product.appendChild(createDeleteButton());
  return product;
}

function createNewItem(){
  var container = document.querySelector("#library");
  var itemName = document.getElementById("user-productname").value;
  var itemUnitPrice = document.getElementById("user-productprice").value;
  document.getElementById("user-productname").value = "";
  document.getElementById("user-productprice").value = "";  
  var newProduct = createNewItemRow(itemName,itemUnitPrice);
  container.appendChild(newProduct);
}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    console.log("test");
    deleteButtons[i].onclick =  deleteItem;
  }
};
