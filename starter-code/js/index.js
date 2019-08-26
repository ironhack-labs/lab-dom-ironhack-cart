function deleteItem(e) {
  let deleteItemDiv = e.currentTarget.parentNode.parentNode;
  document.querySelector(".itemContainer").removeChild(deleteItemDiv);
}

function getTotalPrice() {
  let itemPrice = [...document.querySelectorAll(".unitCost")]
  let itemUnit = [...document.querySelectorAll(".unitNumber")]  
  console.log(itemPrice)
  console.log(itemUnit)
  let itemContainer = [...document.querySelectorAll(".row")]
  let priceAmount = itemContainer.map( (item) => {
    let unitPrice = +item.querySelector(".unitCost").innerText
    let unitQty = +item.querySelector(".unitNumber").value
    console.log(unitPrice)
    console.log(unitQty)
    item.querySelector(".totalPrice").innerHTML = `${unitPrice * unitQty}`
    return unitPrice * unitQty
  })
  console.log(priceAmount)
  let finalPrice = priceAmount.reduce(function (previous, current) {
    return previous + current;
})
  console.log(finalPrice)
  document.querySelector("#finalPrice").innerHTML = `${finalPrice}`
}




function createNewItemRow(itemName, itemPrice) {
  return `<div class="row align-items-center justify-content-between">
    <div class="col-lg"><span class="productName">${itemName}</span></div>
    <div class="col-lg"><span class="unitCost">${itemPrice}</span></div>
    <div class="col-lg-auto"><form><label for="unitNumber">QTY
    <input type="number" class="unitNumber" name="unitNumber" min="0" value="0"></label></form></div>
    <div class="col-lg"><span class="totalPrice">0</span></div>
    <div class="col-lg"><button class="btn-delete">Delete</button></div></div>`
}

function createNewItem() {
  let itemName = document.querySelector(".newItemName").value;
  let itemPrice = document.querySelector(".newItemPrice").value;
  let newItem = createNewItemRow(itemName, itemPrice);
  document.querySelector(".itemContainer").innerHTML += newItem;
  addDeleteEvents();
}

function addDeleteEvents() {
  var deleteButtons = document.getElementsByClassName("btn-delete");
  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
}

window.onload = function() {
  var calculatePriceButton = document.getElementById("calc-prices-button");
  var createItemButton = document.getElementById('addButton');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;
  
  addDeleteEvents();
};