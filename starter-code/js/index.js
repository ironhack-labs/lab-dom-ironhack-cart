function deleteItem(e) {}

function updatePriceByProduct(productPrice, index) {}

var calculatePriceBtn = document.querySelector(".btn-success");

calculatePriceBtn.onclick = function getTotalPrice() {
  // //Retrieves the unit price of the product :
  // var unitPrice = document.querySelector('.unit-price');
  // console.log(unitPrice.innerHTML);

  //Retrieves the unit quantity of the product :

  // var unitQty = document.querySelector('.quantity');

  var textField = document.querySelector(".quantity");
  // unitQty.innerHTML = textField.value;
  // console.log(unitQty.value);

  //Calculates the total price based on this data :
  // var totalPrice = unitPrice.innerHTML * unitQty.value;
  // var total = document.querySelector('.total');
  // total.innerHTML = totalPrice;
  // console.log(totalPrice);

  var checkout = document.querySelectorAll(".unit-price");
  var unitQty = document.querySelectorAll(".quantity");
  var unitPrice = document.querySelectorAll(".unit-price");
  var total = document.querySelectorAll(".total");
  var checkoutPrice = document.querySelector("checkout-price");

  // onePrice.value;

  checkout.forEach(function(oneItem, index) {
    console.log(unitPrice[index].innerHTML);

    unitQty[index].innerHTML = textField.value;
    console.log(unitQty[index].value);

    var totalPrice = unitPrice[index].innerHTML * unitQty[index].value;
    total[index].innerHTML = totalPrice;
    console.log(totalPrice);

    checkoutPrice = checkoutPrice + totalPrice;
  });

  console.log(checkoutPrice);
};

function createDeleteButton() {}

function createQuantityNode() {}

function createItemNode(dataType, itemData) {}

function createNewItemRow(itemName, itemUnitPrice) {}

function createNewItem() {}
