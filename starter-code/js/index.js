function deleteItem(e){
  let mainContainer = document.querySelector(".main_container") //invocar el dom
  let deleteBtn = e.currentTarget;
  let wrapper = deleteBtn.parentElement.parentElement;
  mainContainer.removeChild(wrapper);

  getTotalPrice();

}
function getPriceByProduct(itemNode){
  

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  
  let unitPrice = document.querySelectorAll(".unit_cost");
  let quantityDesired = document.querySelectorAll(".input");
  let totalPrice = document.querySelectorAll(".total_price");
  let finalTotalPrice = document.querySelector("h2>span");
  let finalPrice = 0;

  if (unitPrice.length != 0) {
    for (let i = 0; i < unitPrice.length; i++) {
      totalPrice[i].textContent = "$" +
        (quantityDesired[i].value * unitPrice[i].textContent.slice(1)).toFixed(2);
    }
    console.log(totalPrice[0].textContent.slice(1));

    for (var i = 0; i < totalPrice.length; i++) {
      finalPrice += parseFloat(totalPrice[i].textContent.slice(1));
    }

    finalTotalPrice.textContent = "$" + finalPrice.toFixed(2);
  } else finalTotalPrice.textContent = "$0.00";

}



function createQuantityInput(){
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

function createDeleteButton(){
  

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){
  // let newWrap = document.createElement("div");
  // newWrap.className = "wrapper";

  // let newProduct = createNewItem(itemName);
  // let newProductPrice = createNewItemPrice(itemUnitPrice);
  // let newQuantity = createQuantityInput();
  // let newTotalPrice = createTotalPrice();
  // let newDelete = createDeleteButton();

  // newWrap.appendChild(newProduct);
  // newWrap.appendChild(newProductPrice);
  // newWrap.appendChild(newQuantity);
  // newWrap.appendChild(newTotalPrice);
  // newWrap.appendChild(newDelete);

  return newWrap;
}

function createNewItem(){
  // let newItem = document.createElement("div");
  // newItem.className = "product-name";
  // newItem.innerHTML = `<span>${(itemName)}</span>`;

  // return newItem;
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
