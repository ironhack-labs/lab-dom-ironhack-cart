window.onload = function(){

  let calculatePriceButton = document.getElementsByClassName("calc-prices-button")[0];
  let createItemButton = document.getElementById('new-item-create');
  let deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;

  createItemButton.onclick = createNewItem;

  for(let i = 0; i < deleteButtons.length ; i++){
   deleteButtons[i].onclick = deleteItem;
  }
 

function deleteItem(e){
  let product = e.currentTarget.parentNode.parentNode;
  let parent = product.parentNode;
  parent.removeChild(product);
}

function getTotalPrice() {
  let products = document.getElementsByClassName("wrapper");
  let elementGrandTotal = document.getElementById("total-price");
  let grandTotal = 0;

  for(let i = 0; i < products.length; i++){
      let cost = document.getElementsByClassName("cost")[i].innerText;
      let qty = document.getElementsByClassName("quantity")[i];
      let total = document.getElementsByClassName("total")[i];
      let totalPriceProduct =  Number(cost.slice(1)) * qty.value;
      total.innerHTML = "$" + totalPriceProduct.toFixed(2);
      grandTotal += totalPriceProduct;
  }
  elementGrandTotal.innerText = "$" + grandTotal;
}

function createDeleteButton(){
  let container = document.createElement("div");
  let deleteButton = document.createElement("button");
  let text = document.createTextNode("DELETE");
  deleteButton.setAttribute("class", "btn btn-delete");
  deleteButton.setAttribute("type", "button");
  deleteButton.appendChild(text);
  container.appendChild(deleteButton);  
  return container;
}

function createQuantityNode(){
  let container = document.createElement("div");
  let qtyInput = document.createElement("input");
  qtyInput.setAttribute("class", "quantity");
  qtyInput.setAttribute("placeholder", "0");
  let text = document.createTextNode("QTY")
  let label = document.createElement("label");
  label.appendChild(text);
  container.appendChild(label);
  container.appendChild(qtyInput);
  return container;
}

function createNameNode(itemName){
  let container = document.createElement("div");
  container.setAttribute("id","product-name");
  let span = document.createElement("span");
  span.setAttribute("class","product");
  let text = document.createTextNode(itemName);
  span.appendChild(text);
  container.appendChild(span);
  return container;
}

function createCostNode(itemUnitPrice){
  let container = document.createElement("div");
  let span = document.createElement("span");
  span.setAttribute("class","cost");
  let text = document.createTextNode(itemUnitPrice);
  span.appendChild(text);
  container.appendChild(span);
  return container;
}

function createItemTotalNode(){
  let container = document.createElement("div");
  let span = document.createElement("span");
  span.setAttribute("class","total");
  let text = document.createTextNode("$0.00");
  span.appendChild(text);
  container.appendChild(span);
  return container;
}

function createNewItem(){
  let newItem = document.querySelector("#new-product-name").value;
  let newItemCost = document.querySelector("#new-product-cost").value;
  let container = document.createElement("div");
  container.setAttribute("class", "wrapper");
  container.appendChild(createNameNode(newItem));
  container.appendChild(createCostNode("$"+newItemCost));
  container.appendChild(createQuantityNode());
  container.appendChild(createItemTotalNode());
  container.appendChild(createDeleteButton());
  let parent = document.getElementsByTagName("body")[0];
  let marker = document.querySelector(".user-input");
  parent.insertBefore(container,marker);

  for(let i = 0; i < deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
   }
}
};
