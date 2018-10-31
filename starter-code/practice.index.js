let calculateButton = document.getElementById("calculate");
calculateButton.onclick = function() {
  let productPrices = document.getElementsByClassName("producPrice");
  for (let i = 0; i < productPrices.length; i++) {
    let eachPrice = Number(productPrices[i].innerHTML.substr(1));
    // console.log("price", Number(productPrices[i].innerHTML.substr(1)));
    let qty = Number(document.getElementsByClassName("quantity")[i].value);
    let productTotal = eachPrice * qty;
    let total = document.getElementsByClassName("total-product-price")[i];
    total.innerHTML = "$" + productTotal;
  }
};