function updatePriceByProduct(productPrice, index) {}

var calculatePriceBtn = document.querySelector(".btn-success");

calculatePriceBtn.onclick = function getTotalPrice() {
  var textField = document.querySelector(".quantity");

  var checkout = document.querySelectorAll(".unit-price");
  var unitQty = document.querySelectorAll(".quantity");
  var unitPrice = document.querySelectorAll(".unit-price");
  var total = document.querySelectorAll(".total");
  var checkoutPrice = document.querySelector("checkout-price");

  checkout.forEach(function(oneItem, index) {
    // console.log(unitPrice[index].innerHTML);

    unitQty[index].innerHTML = textField.value;
    // console.log(unitQty[index].value);

    var totalPrice = unitPrice[index].innerHTML * unitQty[index].value;
    total[index].innerHTML = totalPrice;
    // console.log(totalPrice);

    checkoutPrice = checkoutPrice + totalPrice;
    checkoutPrice.innerHTML = checkoutPrice;
  });

  console.log(checkoutPrice);
};

var deleteBtn = document.querySelectorAll(".btn-delete");

deleteBtn.forEach(function(oneBtn) {
  oneBtn.onclick = function() {
    // console.log("hello deleteBtn");

    var parentLine = oneBtn.parentNode.parentNode;
    parentLine.remove();
  };
});

var createBtn = document.querySelector(".create");

createBtn.onclick = function() {
  var textField = document.querySelector(".product-name");
  var priceField = document.querySelector(".product-price");

  var newLine = document.createElement("section");
  newLine.style.display = "flex";
  newLine.style.justifyContent = "space-around";
  newLine.style.paddingTop = "3%";

  newLine.innerHTML =
    "<div><span>" +
    textField.value +
    " </span></div>" +
    "<div>$ <span class='unit-price'>" +
    priceField.value +
    "</span></div>" +
    "<div><label>QTY : </label> <input class='quantity' type='number' placeholder='0' /></div>" +
    "<div>$ <span class='total'>0.00</span></div> " +
    "<div><button class='btn btn-delete'>Delete</button></div>";

  var line = document.querySelector(".checkout");
  line.appendChild(newLine);

  textField.value = "";
  priceField.value = "";

  var oneBtn = newLine.querySelector(".btn-delete");

  oneBtn.onclick = function() {
    // console.log("hello deleteBtn");

    var parentLine = oneBtn.parentNode.parentNode;
    parentLine.remove();
  };
};
