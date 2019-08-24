function deleteItem(e) {
  console.log(e, this);
  e.target.parentElement.parentElement.remove();
  prices(); // deleting rows with update the prices auto.
}

function prices() {
  const cost = document.getElementsByClassName("cost");
  let totalCost = 0;
  console.log("cost", cost);

  const quantity = document.getElementsByName("price-quantity");
  console.log(quantity);

  let wraps = document.getElementsByClassName("wrap1");

  for (let i = 0; i < cost.length; i++) {
    let wrap = wraps[i];
    let price = wrap.children[1].innerText.replace("$", "");
    let qty = wrap.children[2].children[1].value;
    console.log(price, qty);
    wrap.children[3].innerText = Number(price) * Number(qty);
    totalCost +=
      parseFloat(cost[i].innerText.replace("$", "")) * quantity[i].value;
  }
  document.getElementById("totalPrice").innerText = "$" + totalCost;
}

document.querySelector("#calc-prices-button").onclick = function(e) {
  console.log("test");
};

function createNewItem() {
  const productName = document.getElementById("productName").value;
  const productPrice = document.getElementById("productPrice").value;
  console.log(productName, productPrice);
  const dynamicRow = `<div class="wrap1">
    <div>
      <span id='${productName}'>${productName}</span>
    </div>
    <div>
      <span class="cost">${productPrice}</span>
    </div>
    <div>
      <label class='quantity'>QTY</label> <input placeholder="0" name="price-quantity">
    </div>
    <div>
      <span class="subPrice" value=0>$0.00</span>
    </div>
    <div>
      <button class="btn-delete btn">Delete</button>
    </div>
  </div>`;
  const shopping = document.getElementById("shoppingItems");
  shopping.innerHTML += dynamicRow;
}

window.onload = function() {
  var calculatePriceButton = document.getElementById("calc-prices-button");
  var createItemButton = document.getElementById("create-new-row");
  createItemButton.onclick = createNewItem;
  calculatePriceButton.onclick = prices;
  const shopItems = document.getElementById("shoppingItems");
  shopItems.onclick = e => {
    const deleteBtnClass = "btn-delete btn";
    if (e.target.className === deleteBtnClass) {
      deleteItem(e);
    }
  };
};
