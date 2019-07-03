function deleteItem(e) {
  const deleteBtn = e.target;
  deleteBtn.parentNode.remove();
  getTotalPrice();
  console.log(e);
}

function getPriceByProduct(itemNode) {
  const itemPrice = +itemNode.getElementsByClassName("item-price")[0].innerText;
  const itemQuantity = +itemNode.getElementsByClassName("item-quantity")[0]
    .value;
  const itemTotalPrice = itemPrice * itemQuantity;
  return itemTotalPrice;
}

function updatePriceByProduct(productPrice, itemNode) {
  itemNode.getElementsByClassName(
    "item-total-price"
  )[0].innerText = productPrice;
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

function createNewItem() {
  const itemName = document.getElementById("new-item-name");
  const itemPrice = document.getElementById("new-item-price");
  const newItem = document.createElement("div");
  newItem.innerHTML = `<div class="item">
  <span>${itemName.value}</span>
  <div>
    <span>$</span>
    <span class="item-price">${itemPrice.value}</span>
  </div>
  <div>
    <span>QTY</span>
    <input type="number" placeholder="0" class="item-quantity" min="0" />
  </div>
  <div>
    <span>$</span>
    <span class="item-total-price">0.00</span>
  </div>
  <button class="btn-delete" onclick="deleteItem(event)">
    Delete
  </button>
</div>`;
  document.getElementById("shopping-cart").appendChild(newItem);
  itemName.value = "";
  itemPrice.value = "";
}