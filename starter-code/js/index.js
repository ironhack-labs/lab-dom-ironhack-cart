var currency = "$";

function deleteItem(e) {
  // Selector
  var deleteBtn = document.querySelectorAll(".btn-delete");

  deleteBtn.forEach(function(e, idx) {
    e.onclick = function() {
      var parentBtn = e.parentNode.parentNode;
      parentBtn.remove();
    };
  });
}

function getPriceByProduct(itemNode) {
  return (getPrice = document.querySelectorAll(".product-price"));
}

function updatePriceByProduct(productPrice, index) {}

function getTotalPrice() {
  // Selector
  var productPrice = document.querySelectorAll(".product-price-span");
  var productPriceValue = [];

  productPrice.forEach(function(e, idx) {
    productPriceValue.push(Number(e.innerHTML));
    console.log(productPriceValue);
  });

  // Selector
  var productQuantity = document.querySelectorAll(".quantity-input");
  var qty = [];

  productQuantity.forEach(function(e, idx) {
    qty.push(e.value);
    console.log(qty);
  });

  // Selector
  var totalPriceHolder = document.querySelectorAll(".product-total-price");
  var totalPrice = [];
  var totalAmount = 0;

  totalPriceHolder.forEach(function(e, idx) {
    totalPrice.push(productPriceValue[idx] * qty[idx]);
    totalAmount += totalPrice[idx];
    // console.log("quantity " + qty[idx], idx);
    // console.log("Price " + productPriceValue[idx], idx);
    // console.log("res :" + totalAmount);
    e.innerHTML = "$ " + totalPrice[idx];
  });

  // TOTAL CART AMOUNT
  var totalCartAmount = document.querySelector(".total-price-span");
  totalCartAmount.innerHTML = totalAmount;

  // SINGLE LOOP TRAIL
  // var totalPriceHolder = document.querySelectorAll(".product-total-price");
  // totalPriceHolder.forEach(function(e,idx){
  // });
}

function createQuantityInput() {}

function createDeleteButton() {}

function createQuantityNode() {}

function createItemNode(dataType, itemData) {}

function createNewItemRow(itemName, itemUnitPrice) {}

function createNewItem() {
  // Selector
  var addProduct = document.querySelector("#new-item-create");
  console.log(addProduct);
  
  addProduct.onclick = function(){
    console.log("Add product clicked");
    
    var inputName = document.querySelector(".input-product-name");
    var inputNameValue = document.querySelector(".input-product-name").value;
    inputName.classList.add("product-name");
    var inputPrice = document.querySelector(".input-product-price");
    var inputPriceValue = document.querySelector(".input-product-price").value;
    inputPrice.classList.add("product-price");
    var inputQuantity = "<div class='quantity'>quantity<input type='text' class='quantity-input' placeholder='enter your quantity'/> </div>"
    var delBtn = "<div><button class='btn btn-delete'>DELETE</button></div>"
    var newLine = document.createElement("div");
    newLine.classList.add("container");
    newLine.innerHTML = "<div class='product-name'><span>" + inputNameValue + "</span></div>" + "<div class='product-price'>$<span class='product-price-span'>"+inputPriceValue+"</span></div>" + inputQuantity + "<div class='product-total-price'>0.00</div>" + delBtn;

    var list = document.querySelector(".global-container");
    list.appendChild(newLine);
  };


}

window.onload = function() {
  var defaultPrice = document.querySelectorAll(".product-total-price");
  defaultPrice.forEach(function(e, idx) {
    e.innerHTML = "0.00";
  });
  var calculatePriceButton = document.getElementById("calc-prices-button");
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName("btn-delete");

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};
