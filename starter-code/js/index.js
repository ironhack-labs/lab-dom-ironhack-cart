let getTotalPrice =document.querySelector ('.total price')

getTotalPrice = (units, price) =>{
  return units * price
}



function deleteItem(e){
  var productDiv =  e.currentTarget.parentNode.parentNode
  var container = e.currentTarget.parentNode.parentNode.parentNode
  container.removeChild(productDiv)
}

function getPriceByProduct(itemNode){
  function updatePriceByProduct(productPrice, index){
  }
}

function updatePriceByProduct(productPrice, index){
  for (var i = 0; i < totalPrice.length; i++) {
    finalPrice += parseFloat(totalPrice[i].textContent.slice(1));
  }

  finalTotalPrice.textContent = "$" + finalPrice.toFixed(2);
} else finalTotalPrice.textContent = "$0.00";
}

function getTotalPrice() {
  function createNewItem(itemName) {
    let newItem = document.createElement("div");
    newItem.className = "product-name";
    newItem.innerHTML = itemName
}

function createQuantityInput(){
  function createNewItemPrice(price) {
    let itemPrice = document.createElement("div");
    itemPrice.className = "unit-cost";
    itemPrice.innerHTML = `<span>$${parseFloat(price).toFixed(2)}</span>`;
    return itemPrice;

}

function createDeleteButton(){
  function createQuantityInput() {
    let div = document.createElement("div");
    let newlabel = document.createElement("label");
    newlabel["for"] = "qty";
    newlabel.className = "quantity";
    newlabel.innerHTML = "Qty";
  
    let newInput = document.createElement("input");
    newInput.type = "text";
    newInput.className = "input"
    newInput.value = "0";
    div.appendChild(newlabel);
    div.appendChild(newInput);
  
    return div;

}

function createQuantityNode(){
  function createTotalPrice() {
    let newPrice = document.createElement("div");
    newPrice.className = "total-price";
    newPrice.innerHTML = `<span>$0.00</span>`;
  
    return newPrice;

}

function createItemNode(dataType, itemData){
  function createDeleteButton() {
    let newDiv = document.createElement("div");
    let newDelete = document.createElement("button");
  
    newDelete.className = "btn btn-delete";
    newDelete.innerHTML = "Delete";
    newDelete.onclick = deleteItem;
  
    newDiv.appendChild(newDelete);
  
    return newDiv;

}

function createNewItemRow(itemName, itemUnitPrice){
let newWrap = document.createElement("div");
  newWrap.className = "wrapper";

  let newProduct = createNewItem(itemName);
  let newProductPrice = createNewItemPrice(itemUnitPrice);
  let newQuantity = createQuantityInput();
  let newTotalPrice = createTotalPrice();
  let newDelete = createDeleteButton();

  newWrap.appendChild(newProduct);
  newWrap.appendChild(newProductPrice);
  newWrap.appendChild(newQuantity);
  newWrap.appendChild(newTotalPrice);
  newWrap.appendChild(newDelete);

  return newWrap;
}

function createNewItem(){
  let newProductInput = document.querySelector(".new-product").value;
  let newProductPriceInput = document.querySelector(".new-product-price").value;

  let newItem = createNewItemRow(newProductInput, newProductPriceInput);
  document.querySelector(".main-div").appendChild(newItem);


}


window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem1;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
