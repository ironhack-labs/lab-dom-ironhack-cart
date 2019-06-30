 function deleteItem(e) {
  const deleteBtn = e.target;
  deleteBtn.parentNode.remove();
  getTotalPrice();
}

function getPriceByProduct(itemNode){
  const itemPrice = +itemNode.getElementsByClassName('item-price')[0].innerText;
  const itemQuantity = +itemNode.getElementsByClassName('item-quantity')[0].value;
  const itemTotalPrice = itemPrice * itemQuantity;
  return itemTotalPrice;
}


function updatePriceByProduct(productPrice, itemNode) {
  itemNode.getElementsByClassName('item-total-price')[0].innerText = productPrice;

}

function getTotalPrice() {
  const cartItems = Array.from(document.getElementsByClassName("item"));
  const totalCartPrice = cartItems.reduce((totalPrice, item) => {
    const itemTotalPrice = getPriceByProduct(item);
    updatePriceByProduct(itemTotalPrice, item);
    return totalPrice + itemTotalPrice;
  }, 0);

  document.getElementById("cart-total").innerText = totalCartPrice;
}


function createQuantityInput() {
  const newItemQty = document.createElement("input");
  newItemQty.setAttribute("type", "number");
  newItemQty.setAttribute("placeholder", 0);
  newItemQty.setAttribute("min", 0);
  newItemQty.classList.add("item-quantity");
  return newItemQty;
}

function createTotalItemPrice () {
  const totalItemPriceDiv = document.createElement("div");
  const dollarSpan = document.createElement("span");
  dollarSpan.innerText = "$";
  const newItemTotalPrice = document.createElement("span");
  newItemTotalPrice.innerText = 0.0;
  newItemTotalPrice.classList.add("item-total-price");
  totalItemPriceDiv.appendChild(dollarSpan);
  totalItemPriceDiv.appendChild(newItemTotalPrice);
  return totalItemPriceDiv;
}

function createDeleteButton(){
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete"
  deleteButton.classList.add("btn-delete");
  deleteButton.addEventListener("click", deleteItem)
  return deleteButton;
}

function createQuantityNode(){
const newItemQuantityDiv = document.createElement("div");
const qtySpan = document.createElement("span");
qtySpan.innerText = "QTY";
newItemQuantityDiv.appendChild(qtySpan);
newItemQuantityDiv.appendChild(createQuantityInput());

return newItemQuantityDiv;
}


function createItemPrice(itemPrice) {
  const newItemPriceDiv = document.createElement("div");
  const dollarSpan = document.createElement("span");
  dollarSpan.innerText = "$";
  const newItemPrice = document.createElement("span");
  newItemPrice.innerText = itemPrice;
  newItemPrice.classList.add("item-price");
  newItemPriceDiv.appendChild(dollarSpan);
  newItemPriceDiv.appendChild(newItemPrice);
  return newItemPriceDiv;
}



function createItemName(itemName) {
  const newItemName = document.createElement("span");
  newItemName.innerText = itemName;
  return newItemName;
}

function createNewItem(){
  const itemName = document.getElementById("new-item-name");
  const itemPrice = document.getElementById("new-item-price");
  const newItem = document.createElement("div");
  newItem.classList.add("item");
  newItem.appendChild(createItemName(itemName.value));
  newItem.appendChild(createItemPrice(itemPrice.value));
  newItem.appendChild(createQuantityNode());
  newItem.appendChild(createTotalItemPrice());
  newItem.appendChild(createDeleteButton());
  document.getElementById("shopping-cart").appendChild(newItem);
  itemName.value = "";
  itemPrice.value = "";

}

