let cart;
let calculatePriceButton;
let createItemButton;
let deleteButtons;

let items = [];

function ShopItem(name, price) {
  this.name = name;
  this.price = price;
  this.count = 0;
  this.lastInput;
  this.getHtml = function () {
    let item = document.createElement("div");
    item.classList.add("item");
    item.setAttribute("data-item-num", items.length)
    item.innerHTML = `
    <div class="name">
      <span>${this.name}</span>
    </div>
    <div class="price">
      <span>$${this.price.toFixed(2)}</span>
    </div>
    <div class="quantity">
      <label for="quantity">QTY</label>
      <input type="text" placeholder="0" id="quantity"${ this.lastInput ? ' value="' + this.lastInput + '"' : ""}>
    </div>
    <div class="totalPrice">
      <span>${this.count ? "$" + (this.count * this.price).toFixed(2) : "$0.00" }</span>
    </div>
    <div class="delete">
      <button class="btn btn-delete">Delete</button>
    </div>`
    return item;
  }
}

function addItem(item) {
  cart.appendChild(item.getHtml());
  items.push(item);
  // reload buttons and make sure the click events get passed on
  deleteButtons = document.getElementsByClassName('btn-delete');
  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
}

function deleteItem(e) {
  let item = e.currentTarget.parentNode.parentNode;
  let index = parseInt(item.dataset["itemNum"]);
  if ((index != 0 && !index) || index > items.length) {
    throw new Error("Invalid item number: " + index);
  }
  items.forEach((elem, i) => {
    if (i < index) return;
    let element = cart.querySelector(`[data-item-num="${i}"]`);
    if (i === index) {
      cart.removeChild(element);
      return;
    }
    element.dataset["itemNum"] = i - 1;
  })
  items.splice(index, 1);
  updateTotal();
}

function updatePriceByProduct(item, element) {
  let input = element.querySelector(".quantity input");
  item.lastInput = input.value;
  let parsed = parseInt(item.lastInput);
  if (!isNaN(parsed) && parsed >= 0) {
    item.count = parsed;
    input.classList.remove("mark-wrong");
  } else {
    item.count = 0;
    if (item.lastInput) input.classList.add("mark-wrong");
  }
  element.querySelector(".totalPrice span").innerHTML = `${item.count ? "$" + (item.count * item.price).toFixed(2) : "$0.00" }`
}

function calculatePrices() {
  let itemElements = document.getElementsByClassName("item");
  items.forEach((item, i) => {
    let element = itemElements[i];
    if (!element) {
      throw new Error("Cannot find the element for item Nr. " + i);
    }
    updatePriceByProduct(item, element);
  })
  updateTotal();
  return false;
}

function updateTotal() {
  let total = items.reduce((sum, item) => sum += item.count * item.price, 0)
  document.querySelector(".shop .total h2 span").innerHTML = `$${total.toFixed(2)}`
}

function newItemFromInput(e) {
  let newItemMask = document.getElementsByClassName("new-item-mask")[0];
  let nameInput = newItemMask.querySelector(".name input");
  let name = nameInput.value;
  if (!name) {
    nameInput.classList.add("mark-wrong");
  } else {
    nameInput.classList.remove("mark-wrong");
  }
  let priceInput = newItemMask.querySelector(".price input");
  let price = parseFloat(priceInput.value);
  if ( !isNaN(price) && price >= 0 ) {
    if ( name ) {
      addItem(new ShopItem(name, price));
    }
    priceInput.classList.remove("mark-wrong");
  } else {
    priceInput.classList.add("mark-wrong");
  }
}

window.onload = function () {
  calculatePriceButton = document.getElementById('calc-prices-button');
  createItemButton = document.getElementById('new-item-create');
  cart = document.getElementsByClassName('cart')[0];

  calculatePriceButton.onclick = calculatePrices;
  createItemButton.onclick = newItemFromInput;

  addItem(new ShopItem("IronBubble-head", 25))
};