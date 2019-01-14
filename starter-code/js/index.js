calculateButton = document.querySelector(".btn-success");
calculateButton.onclick = calculatePrice;

function calculatePrice() {
  var productPrice = document.querySelector(".price");
  // console.log(productPrice.innerHTML);
  var productQuantity = document.querySelector(".quantity");
  // console.log(productQuantity.value);
  var finalPrice = productPrice.innerHTML * productQuantity.value;
  // console.log(finalPrice);
  var showTotal = document.querySelector(".updatedPrice");
  showTotal.innerHTML = finalPrice;

  var productPrice2 = document.querySelector(".price2");
  // console.log(productPrice.innerHTML);
  var productQuantity2 = document.querySelector(".quantity2");
  // console.log(productQuantity.value);
  var finalPrice2 = productPrice2.innerHTML * productQuantity2.value;
  // console.log(finalPrice);
  var showTotal2 = document.querySelector(".updatedPrice2");
  showTotal2.innerHTML = finalPrice2;

  var sumOfPrices = finalPrice + finalPrice2;
  // console.log(sumOfPrices);
  var globalPrice = document.querySelector(".finalTotalPrice");
  globalPrice.innerHTML = sumOfPrices;
}

calculatePrice();
