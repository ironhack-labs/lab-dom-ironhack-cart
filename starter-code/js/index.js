function CalculatePrices() {
  var calculateBtn = document.querySelector(".btn-success");
  calculateBtn.onclick = function() {
    console.log("coucou CALCULATE BTN");
    var priceUnit = document.querySelector(".price");
    var qty = document.querySelector("input");
    var priceTotal = document.querySelector(".total");
    var calculPriceTotal = (priceTotal.innerHTML =
      qty.value * priceUnit.innerHTML);
    return calculPriceTotal;
  };
}

CalculatePrices();

function CalculateAllPrices() {
  var calculateBtn = document.querySelector(".btn-success");
  calculateBtn.onclick = function() {
    var priceUnitArr = document.querySelectorAll(".price");
    var qtyArr = document.querySelectorAll("input");
    var priceTotalArr = document.querySelectorAll(".total");

    // Display the two totals
    priceTotalArr.forEach(function(onePriceTotal, i) {
      return (onePriceTotal.innerHTML =
        qtyArr[i].value * priceUnitArr[i].innerHTML);
    });

    // Make the global total (addition of the two totals)
    var finalTotal = document.querySelector(".finalTotal");
    var finalTt = 0;
    priceTotalArr.forEach(function(onePriceTotal) {
      finalTt += Number(onePriceTotal.innerHTML);
    });

    return (finalTotal.innerHTML = finalTt);
  };
}

CalculateAllPrices();

var deleteBtnArray = document.querySelectorAll(".btn-delete");
deleteBtnArray.forEach(function(oneButton) {
  oneButton.onclick = function() {
    console.log("DELETE BUTTON");
    // get the PARENT of the <button> to delete the product
    var deleteProduct = oneButton.parentNode.parentNode;
    deleteProduct.remove();
  };
});

var createProduct = document.querySelector(".createBtn");
createProduct.onclick = function() {
  console.log("CREATE");
  var productInfo = document.querySelector(".createProduct");
  var priceInfo = document.querySelector(".createPrice");
  var newProduct = document.createElement("div");
  newProduct.classList.add(".flex");

  var newName = document.createElement("div");
  newName.classList.add(".product");
  newProduct.appendChild(newName);
  var span1 = document.createElement("span");
  newName.appendChild(span1);

  var newPrice = document.createElement("div");
  newProduct.appendChild(newPrice);
  var span2 = document.createElement("span");
  span2.classList.add(".price");
  newPrice.appendChild(span2);

  var newQty = document.createElement("div");
  newProduct.appendChild(newQty);
  var newLabel = document.createElement("label");
  var newInput = document.createElement("input");
  newQty.appendChild(newLabel);
  newQty.appendChild(newInput);

  console.log(newProduct);
};

////MAKE THE GARBAGE BUTTON TO DELETE

// var deleteBtnArray = document.querySelectorAll(".delete");
// //gives all the button with the delete class so create an arrat

// deleteBtnArray.forEach(function(oneButton) {
//   oneButton.onclick = function() {
//     console.log("coucou DELETE BUTTON click");
//     // get the PARENT of the <button> to delete all the <li> content
//     var parentLi = oneButton.parentNode;
//     parentLi.remove();
//   };
// });

//

function deleteItem(e) {}

function getPriceByProduct(itemNode) {}

function updatePriceByProduct(productPrice, index) {}

function getTotalPrice() {}

function createQuantityInput() {}

function createDeleteButton() {}

function createQuantityNode() {}

function createItemNode(dataType, itemData) {}

function createNewItemRow(itemName, itemUnitPrice) {}

function createNewItem() {}

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
