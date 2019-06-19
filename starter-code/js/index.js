window.onload = function() {
  var calculatePriceButton = document.getElementById("calc-prices-button");
  var createItemButton = document.getElementById("create");
  let price = document.getElementsByClassName("cost-per-unit");
  let quantity = document.getElementsByClassName("userInput");
  let total = document.getElementsByClassName("total");
  let row = document.getElementsByClassName("row");
  let finalTotal = document.getElementById("finalTotal");
  let deleteButton = document.getElementsByClassName("btn-delete");
  let userProduct = document.getElementById("name");
  let userPrice = document.getElementById("price");
  var original = document.getElementById("test");
  let totalForAll = 0;
  let i = 1;
  createItemButton.onclick = () => {
    let productName = userProduct.value;
    let productPrice = userPrice.value;
    var clone = original.cloneNode(true);
    clone.id = "test " + i++;
    let deleteSpan = clone.querySelector(
      ".product-container .product-name .name-changed"
    );
    deleteSpan.innerHTML = productName;
    let deletePrice = clone.querySelector(
      ".product-container .cost-tab .cost-per-unit"
    );
    let priceWithDec = parseFloat(Math.round(productPrice * 100) / 100).toFixed(
      2
    );
    deletePrice.innerHTML = `$${priceWithDec}`;
    original.parentNode.appendChild(clone);
    document.getElementById("name").value = " ";
    document.getElementById("price").value = " ";
  };

  calculatePriceButton.onclick = () => {
    for (let i = 0; i < row.length; i++) {
      console.log(row[i]);
      let newPrice = price[i].innerHTML.split("$");
      // console.log(newPrice);
      let totalCalc = quantity[i].value * newPrice[1];
      let singleTotal = (total[i].innerHTML = `$${totalCalc.toFixed(2)}`);
      let test = singleTotal.split("$");
      totalForAll += Number(test[1]);
      finalTotal.innerHTML = `$${totalForAll.toFixed(2)}`;
    }
  };

  document.addEventListener("click", function(e) {
    if (e.target.innerHTML == "Delete") {
      let currentButton = e.target;
      let parentElement = currentButton.parentElement.parentElement;
      parentElement.remove();
    }
  });
};
