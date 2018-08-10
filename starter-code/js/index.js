// ITERATION 1 OLD
// var calculatePriceBtn = document.querySelector(".btn-success");
// var priceInput = document.querySelector("input");
// var unitPrice = document.querySelector(".one-unit-cost");
// var priceResult = document.querySelector(".result");

// calculatePriceBtn.onclick = function(){
// var result = parseFloat(unitPrice.innerHTML.slice(1)) * parseFloat(priceInput.value);
// priceResult.innerHTML = "$" + result;
// };

//ITERATION 2 OLD
// var calculatePriceBtn = document.querySelector(".btn-success");

// var productOne = document.querySelector(".product-one");
// var priceInput = productOne.querySelector("input");
// var unitPrice = productOne.querySelector(".one-unit-cost");
// var priceResult = productOne.querySelector(".result");

// var productTwo = document.querySelector(".product-two");
// var priceInputTwo = productTwo.querySelector("input");
// var unitPriceTwo = productTwo.querySelector(".one-unit-cost");
// var priceResultTwo = productTwo.querySelector(".result");

// calculatePriceBtn.onclick = function(){
// var result = parseFloat(unitPrice.innerHTML.slice(1)) * parseFloat(priceInput.value);
// priceResult.innerHTML = "$" + result;
// var resultTwo = parseFloat(unitPriceTwo.innerHTML.slice(1)) * parseFloat(priceInputTwo.value);
// priceResultTwo.innerHTML = "$" + resultTwo;


// var finalResult = document.querySelector(".final-price");
// finalResult.innerHTML = result + resultTwo;

// };


//ITERATION 1, 2 AND 3


var calculatePriceBtn = document.querySelector(".btn-success");
var allProducts = document.querySelectorAll(".product");



calculatePriceBtn.onclick = function() {
  var totalResult = 0;
  allProducts.forEach(function (oneProduct) {
    var unitPrice = oneProduct.querySelector(".one-unit-cost");
    var priceInput = oneProduct.querySelector("input");
    var priceResult = oneProduct.querySelector(".result");
    var result = parseFloat(unitPrice.innerHTML.slice(1)) * parseFloat(priceInput.value);
    priceResult.innerHTML = "$" + result; 
    totalResult += result;
  });
  finalPrice = document.querySelector(".final-price")
  finalPrice.innerHTML = "$" + totalResult; 
}

//ITERATION 4
var deleteButton = document.querySelectorAll(".btn-delete");

deleteButton.forEach(function (oneButton) { 
  oneButton.onclick = function () {
    var parent = oneButton.parentNode;
    parent.remove();
  };
});

//ITERATION 5
var createButton = document.querySelector(".btn-create");

createButton.onclick = function () {
  var product = document.createElement("div")  
};

