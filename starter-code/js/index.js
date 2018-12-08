function deleteItem(e){
  let deleteBtn = e.currentTarget;
  let product = e.currentTarget.parentNode.parentNode;
  let container = document.querySelector(".cartContainer");

  container.removeChild(product);
  getTotalPrice();
}

function getPriceByProduct(itemNode){
  //let productPrice = itemNode.childNodes[3].innerText;
  //let productQty = itemNode.childNodes[5].childNodes[3].value;
  let productPrice = itemNode.querySelector(".productCost").innerText;
  let productQty = itemNode.querySelector(".qty").value;
  
  return (productPrice.substring(0,productPrice.indexOf("€"))) * productQty;
}

function updatePriceByProduct(productPrice, index){
  //document.getElementsByClassName("productContainer")[index].childNodes[7].innerText = productPrice + "€";
  document.querySelectorAll(".productContainer")[index].querySelector(".producTotal>span").innerText = productPrice + "€";
}

function getTotalPrice() {
  let products = document.getElementsByClassName("productContainer");
  let total = document.querySelector(".total");
  let sum = 0;
  
  for (let i = 0; i < products.length; i++) {
    let price = getPriceByProduct(products[i]);
    sum += price; 
    updatePriceByProduct(price, i);
  }

  //let total = document.getElementsByClassName("total");
  //total[0].childNodes[1].childNodes[1].innerText = sum + "€";
  //total[0].querySelector("span").innerText = sum + "€";
  total.querySelector("span").innerText = sum + "€";
}

function createQuantityInput(){
  let quantityContainer = document.createElement("div");
  let label = document.createElement("label");
  let input = document.createElement("input");

  quantityContainer.setAttribute("class", "quantity");
  label.innerText = "QTY";
  input.setAttribute("class", "qty");
  input.setAttribute("type", "text");
  input.setAttribute("placeholder", "0");

  quantityContainer.appendChild(label);
  quantityContainer.appendChild(input);

  return quantityContainer;
}

function createDeleteButton(){
  let btnContainer = document.createElement("div");
  let btn = document.createElement("button");

  btnContainer.setAttribute("class", "productDelete");
  btn.setAttribute("class", "btn btn-delete");
  btn.innerText = "Delete";

  btnContainer.appendChild(btn);

  return btnContainer;
}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){
  let itemNode = document.createElement(dataType);

  itemNode.innerText = itemData;

  return itemNode;
}

function createNewItemRow(itemName, itemUnitPrice){
  let productContainer = document.createElement("div");
  let input = document.createElement("div");
  let productCost = document.createElement("div");

  input.setAttribute("class", "input");
  input.appendChild(createItemNode("span", itemName));

  productCost.setAttribute("class", "productCost");
  productCost.appendChild(createItemNode("span", itemUnitPrice));

  productContainer.setAttribute("class", "productContainer");
  productContainer.appendChild(input);
  productContainer.appendChild(productCost);

  return productContainer;
}

function createNewItem(){
  let cartContainer = document.querySelector(".cartContainer");
  let newProductContainer = document.querySelector(".newProductContainer");
  let product = newProductContainer.querySelector(".productName");
  let price = newProductContainer.querySelector(".productPrice");
  let productContainer = createNewItemRow(product.value, (price.value + "€"));
  let producTotal = document.createElement("div");

  producTotal.setAttribute("class", "producTotal");
  producTotal.appendChild(document.createElement("span"));
  producTotal.querySelector("span").innerText = "0€";

  productContainer.appendChild(createQuantityInput());
  productContainer.appendChild(producTotal);
  productContainer.appendChild(createDeleteButton());

  console.log(productContainer);

  cartContainer.insertBefore(productContainer, newProductContainer);

  newProductContainer.querySelector(".productName").value = "";
  newProductContainer.querySelector(".productPrice").value = "";

  window.onload();

}

window.onload = function(){
  let calculatePriceButton = document.getElementById('calc-prices-button');
  let createItemButton = document.getElementById('new-item-create');
  let deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.addEventListener("click", getTotalPrice);
  createItemButton.addEventListener("click", createNewItem);

  //calculatePriceButton.onclick = getTotalPrice;
  //createItemButton.onclick = createNewItem;

  for(let i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].addEventListener("click", deleteItem);
  }
};