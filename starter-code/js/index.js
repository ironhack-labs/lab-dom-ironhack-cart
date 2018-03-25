var deleteBtns = document.querySelectorAll(".btn-delete");
  deleteBtns.forEach(function(oneBtn) {
    oneBtn.onclick = function() {
      var eBtn = event.currentTarget;
      var eDiv = eBtn.parentNode.parentNode;
      eDiv.remove();
    };
  });
//Don't know how to make the new delete buttons work

var createItemButton = document.getElementById('new-item-create');
// create new item from inputs after clicking create button
createItemButton.onclick = function() {
  var products = document.querySelector(".products");

  var newItemDiv = document.createElement("div");
  newItemDiv.className = "product";

  var newItemNameDiv = document.createElement("div");
  var newItemName = document.createElement("span");
  newItemName.className = "productName";

  var newUnitPriceDiv = document.createElement("div");
  var newUnitPrice = document.createElement("span");
  newUnitPrice.className = "productPris";
  
  var newBtn = document.createElement("div");
  newBtn.innerHTML = "<button class='btn-delete'>Delete</button>";

  var newQuantityInput = document.createElement("div");
  newQuantityInput.innerHTML = "<label class='quantity'>QTY</label><input class='quantity-input' type='number' placeholder='0'>";

  var newProductTotalPrice = document.createElement("div");
  newProductTotalPrice.innerHTML = "<span class='totalPrice'>$0.00</span>";

  //--------------------------------------------------------------------------
  var newItemInput = document.querySelector("#new-item-input");

  var newUnitPriceInput = document.querySelector("#new-unit-price-input");
  //--------------------------------------------------------------------------
  if (newItemInput.value === "" && newUnitPriceInput.value === "") {
    return;
  } else if (newItemInput.value === "" || newUnitPriceInput.value === "") {
    return;
  } else {
    newItemName.innerHTML = newItemInput.value;
    newItemNameDiv.appendChild(newItemName);

    newUnitPrice.innerHTML = newUnitPriceInput.value;
    newUnitPriceDiv.appendChild(newUnitPrice);

    newItemDiv.append(newItemNameDiv, newUnitPriceDiv, newQuantityInput, newProductTotalPrice, newBtn);
    products.appendChild(newItemDiv);
  };
  newItemInput.value = "";
  newUnitPriceInput.value = "";
};

var newItemUnitPrices = document.querySelectorAll(".product .productPris");
var newItemQuantityInputs = document.querySelectorAll(".product .quantity-input");
var newItemTotalPrices = document.querySelectorAll(".product .totalPrice");

var totalPrice = document.querySelector(".total-price span");
// variable for "Total Price"

var calculatePriceButton = document.getElementById('calc-prices-button');
// variable for caluclate prices button

calculatePriceButton.onclick = function() {
  var itemTotalPrice = 0;
  for(var i=0; i<newItemUnitPrices.length; i++) {
    newItemTotalPrices[i].innerHTML = "$" + (Number(newItemUnitPrices[i].innerHTML.slice(1)) * newItemQuantityInputs[i].value);
    itemTotalPrice += Number(newItemUnitPrices[i].innerHTML.slice(1)) * newItemQuantityInputs[i].value;
  };
  totalPrice.innerHTML = "$" + itemTotalPrice.toString();
};
// Don't know how to make the function work for the new items created :(

// window.onload = function(){
//   var calculatePriceButton = document.getElementById('calc-prices-button');
//   var createItemButton = document.getElementById('new-item-create');
//   var deleteButtons = document.getElementsByClassName('btn-delete');

//   calculatePriceButton.onclick = getTotalPrice;
//   createItemButton.onclick = createNewItem;

//   for(var i = 0; i<deleteButtons.length ; i++){
//     deleteButtons[i].onclick = deleteItem;
//   }
// };
